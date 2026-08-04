import React, { useState } from 'react';
import { Group as PanelGroup, Panel, Separator as PanelResizeHandle } from 'react-resizable-panels';
import IDEPanel from '../../practice/IDEPanel';
import { runScratchpadApi } from '../../../api';

interface Props {
  language: string;
  starterCode: string;
  /** Show a stdin box when the program is meant to read input. */
  showStdin?: boolean;
  /** Preset stdin (e.g. SQL fixture tables) sent instead of learner input. */
  fixture?: string;
  /** False for languages the sandbox cannot execute; hides the Run button. */
  runnable?: boolean;
  /** Rendered in the action row, next to Run — used for the Submit button. */
  footerSlot?: React.ReactNode;
  value: string;
  onChange: (code: string) => void;
}

const LANGUAGE_LABEL: Record<string, string> = {
  javascript: 'JavaScript',
  python: 'Python',
  java: 'Java',
  cpp: 'C++',
  go: 'Go',
  sql: 'PostgreSQL',
  dockerfile: 'Dockerfile',
  shell: 'Shell',
};

/**
 * The SQL runner emits {"rows": [...]}. Render it as an aligned table, which is
 * what a learner expects from a query, rather than raw JSON.
 */
function formatSqlOutput(stdout: string): string {
  let parsed: { rows?: Record<string, unknown>[] };
  try {
    parsed = JSON.parse(stdout);
  } catch {
    return stdout;
  }
  if (!Array.isArray(parsed.rows)) return stdout;
  if (parsed.rows.length === 0) return '(0 rows)';

  const rows = parsed.rows;
  const columns = Object.keys(rows[0]);
  const cell = (v: unknown) => (v === null || v === undefined ? 'NULL' : String(v));
  const widths = columns.map((c) => Math.max(c.length, ...rows.map((r) => cell(r[c]).length)));
  const line = (cells: string[]) => cells.map((v, i) => v.padEnd(widths[i])).join(' | ');

  return [
    line(columns),
    widths.map((w) => '-'.repeat(w)).join('-+-'),
    ...rows.map((r) => line(columns.map((c) => cell(r[c])))),
    '',
    `(${rows.length} row${rows.length === 1 ? '' : 's'})`,
  ].join('\n');
}

/**
 * The assignment code editor, built on the same IDEPanel the practice section
 * uses, so the two feel like one product — identical Monaco setup, font
 * controls, reset and fullscreen — and the editor fills the available height
 * instead of sitting in a short fixed box.
 *
 * It deliberately does NOT reuse the practice ConsolePanel: that reports
 * "Accepted / Wrong Answer" against test cases, and assignments are ungraded,
 * so a verdict there would be misleading.
 */
const AssignmentCodeEditor: React.FC<Props> = ({
  language,
  starterCode,
  showStdin = false,
  fixture,
  runnable = true,
  footerSlot,
  value,
  onChange,
}) => {
  const [stdin, setStdin] = useState('');
  const [running, setRunning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [output, setOutput] = useState<{ text: string; isError: boolean } | null>(null);

  const handleRun = async () => {
    setRunning(true);
    setOutput(null);
    try {
      const result = await runScratchpadApi(language, value, fixture ?? stdin);

      if (result.timedOut) {
        setOutput({ text: 'Timed out. Check for an infinite loop.', isError: true });
      } else if (result.exitCode !== 0) {
        setOutput({
          text:
            result.stderr.trim() || result.stdout.trim() || `Exited with code ${result.exitCode}`,
          isError: true,
        });
      } else {
        const raw = result.stdout.trim();
        const text = language === 'sql' ? formatSqlOutput(raw) : raw;
        setOutput({ text: text || '(no output — did you print anything?)', isError: false });
      }
    } catch (err) {
      setOutput({
        text: err instanceof Error ? err.message : 'Could not run your code.',
        isError: true,
      });
    } finally {
      setRunning(false);
    }
  };

  const label = LANGUAGE_LABEL[language] ?? language;
  // Nothing to show until a run has happened.
  const showOutput = running || output !== null;

  return (
    <div
      style={
        isFullscreen
          ? {
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: '#0d0f1a',
              display: 'flex',
              flexDirection: 'column',
            }
          : { flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }
      }
    >
      {/* The editor takes the full pane until there is something to show.
          The output panel only appears once the learner runs, so an empty
          console never occupies space it has not earned. */}
      <PanelGroup orientation="vertical">
        <Panel minSize="25%">
          <IDEPanel
            language={language}
            // The starter code is written for this language, so the question
            // pins it rather than offering a switch that would invalidate it.
            availableLanguages={[{ id: language, label }]}
            onLanguageChange={() => {}}
            code={value}
            onCodeChange={onChange}
            onReset={() => onChange(starterCode)}
            isFullscreen={isFullscreen}
            onToggleFullscreen={() => setIsFullscreen((f) => !f)}
          />
        </Panel>

        {showOutput && (
          <>
            <PanelResizeHandle
              style={{ height: 6, background: '#1f2235', cursor: 'row-resize' }}
            />
            <Panel defaultSize="34%" minSize="15%">
              <div
                style={{
                  height: '100%',
                  overflowY: 'auto',
                  padding: '12px 14px',
                  background: '#111320',
                  boxSizing: 'border-box',
                }}
              >
                {running || !output ? (
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '.08em',
                      color: '#4b5675',
                    }}
                  >
                    RUNNING...
                  </span>
                ) : (
                  <pre
                    style={{
                      margin: 0,
                      fontFamily: "'Fira Code','JetBrains Mono',monospace",
                      fontSize: 12.5,
                      lineHeight: 1.6,
                      whiteSpace: 'pre-wrap',
                      color: output.isError ? '#f87171' : '#00ea64',
                    }}
                  >
                    <code>{output.text}</code>
                  </pre>
                )}
              </div>
            </Panel>
          </>
        )}
      </PanelGroup>

      {/* stdin and the actions sit outside the panel group so they are always
          visible, whether or not the output panel is showing. */}
      {showStdin && !fixture && (
        <div
          style={{
            padding: '10px 14px',
            borderTop: '1px solid #1f2235',
            background: '#111320',
            flexShrink: 0,
          }}
        >
          <label
            style={{
              display: 'block',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              color: '#4b5675',
              marginBottom: 6,
            }}
          >
            Input (stdin)
          </label>
          <textarea
            value={stdin}
            onChange={(e) => setStdin(e.target.value)}
            rows={2}
            style={{
              width: '100%',
              fontFamily: "'Fira Code','JetBrains Mono',monospace",
              fontSize: 12,
              padding: 8,
              borderRadius: 8,
              border: '1px solid #1f2235',
              background: '#151829',
              color: '#e2e8f0',
              resize: 'vertical',
              boxSizing: 'border-box',
            }}
          />
        </div>
      )}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '10px 14px',
          borderTop: '1px solid #1f2235',
          background: '#111320',
          flexWrap: 'wrap',
          flexShrink: 0,
        }}
      >
        {runnable && (
          <button
            type="button"
            onClick={handleRun}
            disabled={running || !value.trim()}
            style={{
              background: 'transparent',
              border: '1px solid #28C5BC',
              color: '#28C5BC',
              fontWeight: 700,
              fontSize: 13,
              padding: '8px 16px',
              borderRadius: 9,
              cursor: running ? 'default' : 'pointer',
              opacity: running || !value.trim() ? 0.55 : 1,
            }}
          >
            {running ? 'Running...' : '▶ Run code'}
          </button>
        )}
        {footerSlot}
      </div>
    </div>
  );
};

export default AssignmentCodeEditor;
