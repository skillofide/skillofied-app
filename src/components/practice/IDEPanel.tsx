import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Maximize2, Minimize2, RotateCcw } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface IDEPanelProps {
  language: string;
  onLanguageChange: (lang: string) => void;
  code: string;
  onCodeChange: (newCode: string) => void;
  onReset: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

const IDEPanel: React.FC<IDEPanelProps> = ({
  language,
  onLanguageChange,
  code,
  onCodeChange,
  onReset,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const { theme } = useTheme();
  const [fontSize, setFontSize] = useState<number>(14);
  const [editorLoading, setEditorLoading] = useState<boolean>(true);

  // Map editor language string to Monaco editor support
  const getMonacoLanguage = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'javascript':
        return 'javascript';
      case 'python':
        return 'python';
      case 'java':
        return 'java';
      case 'c++':
      case 'cpp':
        return 'cpp';
      default:
        return 'javascript';
    }
  };

  const languages = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'python', label: 'Python' },
    { id: 'java', label: 'Java' },
    { id: 'cpp', label: 'C++' },
  ];

  return (
    <div className="flex flex-col h-full bg-surface border border-border rounded-xl overflow-hidden shadow-sm transition-colors duration-200">
      {/* Editor Header Panel */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg-page/40 px-5 py-3 select-none">
        {/* Language select */}
        <div className="flex items-center space-x-2">
          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="px-3 py-1.5 text-xs font-bold bg-surface border border-border rounded-xl text-text-primary focus:outline-none hover:bg-bg-page/80 transition-all cursor-pointer shadow-sm"
          >
            {languages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        {/* Editor controls */}
        <div className="flex items-center space-x-2">
          {/* Font sizing buttons */}
          <div className="flex items-center bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setFontSize(Math.max(12, fontSize - 1))}
              className="px-3 py-1.5 text-[10px] font-bold text-text-secondary hover:bg-bg-page/80 focus:outline-none transition-colors border-r border-border"
              title="Decrease Font Size"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize(Math.min(20, fontSize + 1))}
              className="px-3 py-1.5 text-[10px] font-bold text-text-secondary hover:bg-bg-page/80 focus:outline-none transition-colors"
              title="Increase Font Size"
            >
              A+
            </button>
          </div>

          <button
            onClick={onReset}
            className="p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-page/80 border border-transparent hover:border-border transition-all duration-150 focus:outline-none"
            title="Reset Editor to Default Starter Code"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-page/80 border border-transparent hover:border-border transition-all duration-150 focus:outline-none"
            title={isFullscreen ? 'Exit Full Screen Editor' : 'Full Screen Editor'}
          >
            {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="flex-1 w-full relative bg-surface">
        {editorLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface text-slate-400 space-y-3 z-10 font-sans">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-accent border-t-transparent"></div>
            <div className="text-xs font-semibold tracking-wider">INITIALIZING MONACO WORKSPACE...</div>
          </div>
        )}
        <Editor
          height="100%"
          language={getMonacoLanguage(language)}
          value={code}
          onChange={(val) => onCodeChange(val || '')}
          onMount={() => setEditorLoading(false)}
          theme={theme === 'dark' ? 'custom-dark' : 'custom-light'}
          beforeMount={(monaco) => {
            monaco.editor.defineTheme('custom-dark', {
              base: 'vs-dark',
              inherit: true,
              rules: [],
              colors: {
                'editor.background': '#111827',
                'editorGutter.background': '#111827',
                'editor.lineHighlightBackground': '#1f293755',
              }
            });
            monaco.editor.defineTheme('custom-light', {
              base: 'vs',
              inherit: true,
              rules: [],
              colors: {
                'editor.background': '#ffffff',
                'editorGutter.background': '#ffffff',
                'editor.lineHighlightBackground': '#f1f5f9aa',
              }
            });
          }}
          options={{
            fontSize: fontSize,
            fontFamily: "'Fira Code', 'Courier New', Courier, monospace",
            minimap: { enabled: false },
            lineNumbers: 'on',
            automaticLayout: true,
            tabSize: 4,
            insertSpaces: true,
            scrollBeyondLastLine: false,
            cursorBlinking: 'smooth',
            smoothScrolling: true,
            scrollbar: {
              vertical: 'visible',
              horizontal: 'visible',
              verticalScrollbarSize: 10,
              horizontalScrollbarSize: 10,
            },
            hideCursorInOverviewRuler: true,
            renderLineHighlight: 'all',
            padding: { top: 12, bottom: 12 },
          }}
        />
      </div>
    </div>
  );
};

export default IDEPanel;
