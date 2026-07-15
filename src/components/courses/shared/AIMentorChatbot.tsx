import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AIAnimation } from './AIAnimation';
import './AIMentorChatbot.css';

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const CONFIG = {
  mentorName: 'Lali AI Mentor',
  subject: 'programming and software development',
  model: 'gpt-4o-mini',
  welcomeMessage:
    "Hi! I'm Lali your AI Mentor. Ask me anything about your code, algorithms, or interview prep.",
  systemPrompt: `You are Lali AI Mentor, a friendly and encouraging AI mentor embedded in an online course about programming and software development.

Your two jobs:
1. EXPLAIN: When a student asks a question, explain concepts clearly, with short code examples where useful. Match your depth to what they seem to already know. Use plain language before jargon.
2. QUIZ: Periodically, or when asked, quiz the student with a short question to check understanding. Ask one question at a time, wait for their answer, then give feedback before moving on. Mix in occasional quick checks even when not explicitly asked, if it fits naturally after an explanation.

Style rules:
- Keep responses concise and scannable. Use short paragraphs and code blocks, not walls of text.
- Be encouraging but honest — if an answer is wrong, say so clearly and explain why, then help them get it right.
- Never do a student's graded assignment for them wholesale; guide them toward the answer with questions and hints instead.
- If asked something outside programming/software topics, gently redirect back to the course material.`,
};

// ─── TYPES ───────────────────────────────────────────────────────────────────
interface Message {
  role: 'user' | 'ai';
  content: string;
  isHtml?: boolean;
}

interface ApiMessage {
  role: 'user' | 'assistant';
  content: string;
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderMarkdown(text: string): string {
  const escaped = escapeHtml(text);
  const withBlocks = escaped.replace(
    /```([\\s\\S]*?)```/g,
    (_m, code: string) => '<div class="code-block">' + code.trim() + '</div>'
  );
  const withInline = withBlocks.replace(/`([^`]+)`/g, '<code style="background:var(--bg-page);padding:2px 4px;border-radius:4px;color:var(--accent);font-family:monospace;font-size:12px;">' + '$1' + '</code>');
  return withInline
    .split(/\\n{2,}/)
    .map(p => '<p style="margin-bottom:8px;line-height:1.6">' + p.replace(/\\n/g, '<br>') + '</p>')
    .join('');
}

function playPopSound() {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sine';
    // Quick frequency sweep for a "pop" or "bubble" sound
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);

    // Quick volume envelope
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {
    console.warn('Audio play failed:', e);
  }
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
const AIMentorChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isBusy, setIsBusy] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);

  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const historyRef = useRef<ApiMessage[]>([]);

  // TTS (Text-to-Speech) State
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState<number>(0);
  const [voiceOutputOn, setVoiceOutputOn] = useState(true);

  // STT (Speech-to-Text) State
  const [isRecording, setIsRecording] = useState(false);
  const recognizerRef = useRef<any>(null);

  // ─── INIT TTS & STT ───
  useEffect(() => {
    // 1. Initialize Voices
    const synth = window.speechSynthesis;
    if (synth) {
      const loadVoices = () => {
        const availableVoices = synth.getVoices();
        if (availableVoices.length > 0) {
          setVoices(availableVoices);

          // Try to find a high quality female voice by default
          const bestVoiceIndex = availableVoices.findIndex(v =>
            v.name === "Samantha" || // High quality Mac female voice
            v.name === "Victoria" || // Another Mac female voice
            v.name.includes("Female") ||
            v.name.includes("Google UK English Female")
          );

          if (bestVoiceIndex !== -1) {
            setSelectedVoiceIndex(bestVoiceIndex);
          } else {
            // Fallback to the first available English voice
            const enIndex = availableVoices.findIndex(v => v.lang && v.lang.startsWith("en"));
            setSelectedVoiceIndex(enIndex !== -1 ? enIndex : 0);
          }
        }
      };
      loadVoices();
      synth.onvoiceschanged = loadVoices;
    }

    // 2. Initialize Microphone
    const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognitionAPI) {
      const recognizer = new SpeechRecognitionAPI();
      recognizer.continuous = false;
      recognizer.interimResults = false;
      recognizer.lang = "en-US";

      recognizer.onstart = () => setIsRecording(true);
      recognizer.onend = () => setIsRecording(false);
      recognizer.onerror = () => setIsRecording(false);

      recognizer.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(prev => (prev ? prev + " " : "") + transcript);
      };

      recognizerRef.current = recognizer;
    }
  }, []);

  const speak = useCallback((text: string) => {
    if (!voiceOutputOn || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const clean = text
      .replace(/```[\s\S]*?```/g, " code example omitted. ")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold asterisks
      .replace(/\*(.*?)\*/g, "$1")     // Remove italic asterisks
      .replace(/__(.*?)__/g, "$1")     // Remove bold underscores
      .replace(/_(.*?)_/g, "$1")       // Remove italic underscores
      .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Clean links to just show text
      .replace(/#+\s/g, "")            // Remove heading hashes
      // Remove emojis so they are not read aloud
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "");

    const utter = new SpeechSynthesisUtterance(clean);

    if (voices[selectedVoiceIndex]) {
      utter.voice = voices[selectedVoiceIndex];
    }
    window.speechSynthesis.speak(utter);
  }, [voiceOutputOn, voices, selectedVoiceIndex]);

  const toggleMic = () => {
    if (!recognizerRef.current) return;
    if (isRecording) {
      recognizerRef.current.stop();
    } else {
      recognizerRef.current.start();
    }
  };

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [messages, isBusy]);

  const addMessage = useCallback((role: 'user' | 'ai', content: string, isHtml = false) => {
    setMessages(prev => [...prev, { role, content, isHtml }]);
  }, []);

  const sendMessage = useCallback(async () => {
    const text = inputValue.trim();
    if (!text || isBusy) return;

    setInputValue('');
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
    }

    addMessage('user', text, false);
    historyRef.current.push({ role: 'user', content: text });

    setIsBusy(true);

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      if (!apiKey) {
        addMessage('ai', 'API Key missing. Please set VITE_OPENAI_API_KEY in your .env.local file.', false);
        setIsBusy(false);
        return;
      }

      // Use the Vite proxy endpoint instead of direct API to avoid CORS issues
      const response = await fetch('/api/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: CONFIG.model,
          max_tokens: 1000,
          messages: [
            { role: 'system', content: CONFIG.systemPrompt },
            ...historyRef.current.map(msg => ({
              role: msg.role === 'assistant' ? 'assistant' : 'user',
              content: msg.content
            }))
          ],
        }),
      });
      const data = await response.json();
      
      if (data.error) {
        addMessage('ai', `API Error: ${data.error.message}`, false);
        setIsBusy(false);
        return;
      }

      const replyText = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response just now.";

      addMessage('ai', renderMarkdown(replyText), true);
      historyRef.current.push({ role: 'assistant', content: replyText });

      // Play incoming message sound (synthetic pop)
      playPopSound();

      // Speak response aloud
      speak(replyText);
    } catch (err) {
      addMessage('ai', 'Something went wrong reaching the mentor service. Please try again.');
      console.error('AI Mentor error:', err);
    } finally {
      setIsBusy(false);
      inputRef.current?.focus();
    }
  }, [inputValue, isBusy, addMessage, speak]);

  const handleOpen = () => {
    setIsOpen(true);
    if (!hasOpenedBefore) {
      setHasOpenedBefore(true);
      const html = renderMarkdown(CONFIG.welcomeMessage);
      addMessage('ai', html, true);
      speak(CONFIG.welcomeMessage); // fires immediately inside the gesture so browser allows audio
    }
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleClose = () => setIsOpen(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px';
  };

  return (
    <>
      {/* ── Launcher Button ── */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '24px',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-md)',
            zIndex: 99998
          }}
          title="Open AI Mentor"
        >
          <AIAnimation size={56} />
        </button>
      )}

      {/* ── Chat Panel ── */}
      {isOpen && (
        <div className="ai-mentor-widget">
          {/* Header */}
          <div className="chat-header">
            <div style={{ width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-surface-2)", border: "1px solid var(--border)" }}>
              <AIAnimation size={44} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)" }}>{CONFIG.mentorName}</div>
              <div style={{ fontSize: "12px", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                <div className="chat-ai-dot" /> Online — responds instantly
              </div>
            </div>

            {/* Voice Controls */}
            {voices.length > 0 && (
              <select
                style={{
                  background: 'var(--bg-page)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  fontSize: '10px',
                  padding: '2px 4px',
                  maxWidth: '90px',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
                value={selectedVoiceIndex}
                onChange={(e) => setSelectedVoiceIndex(Number(e.target.value))}
              >
                {voices.map((v, i) => (
                  <option key={i} value={i}>
                    {v.name.replace(/^Google |^Microsoft /, "")}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={() => {
                setVoiceOutputOn(!voiceOutputOn);
                if (voiceOutputOn) window.speechSynthesis?.cancel();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'none',
                border: 'none',
                color: voiceOutputOn ? 'var(--accent)' : 'var(--text-muted)',
                fontSize: '11px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                marginLeft: '4px',
                marginRight: '8px'
              }}
              title="Toggle voice"
            >
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: voiceOutputOn ? 'var(--accent)' : 'var(--text-muted)'
              }} />
              voice
            </button>

            <button
              onClick={handleClose}
              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
              title="Minimize"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </button>
          </div>

          {/* Message Log */}
          <div ref={logRef} className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={"chat-msg " + m.role}>
                <div className={"chat-avatar " + (m.role === "ai" ? "ai-avatar" : "user-avatar")}>
                  {m.role === "ai" ? <AIAnimation size={36} /> : "👤"}
                </div>
                <div className={"chat-bubble " + m.role}>
                  {m.isHtml ? (
                    <div dangerouslySetInnerHTML={{ __html: m.content }} />
                  ) : (
                    <div>{m.content}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isBusy && (
              <div className="chat-msg ai">
                <div className="chat-avatar ai-avatar">
                  <AIAnimation size={36} />
                </div>
                <div className="chat-bubble ai" style={{ color: "var(--text-secondary)" }}>Thinking...</div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="chat-input-area">
            <textarea
              ref={inputRef}
              className="chat-input"
              placeholder="Ask anything..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              disabled={isBusy}
              rows={1}
            />

            {/* Mic button */}
            <button
              onClick={toggleMic}
              disabled={!recognizerRef.current}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '18px',
                padding: '0 4px',
                cursor: recognizerRef.current ? 'pointer' : 'not-allowed',
                color: !recognizerRef.current
                  ? 'var(--text-muted)'
                  : isRecording
                    ? 'var(--accent)'
                    : 'var(--text-secondary)',
                opacity: isRecording ? (Date.now() % 1000 > 500 ? 0.5 : 1) : 1
              }}
              title="Speak your question"
            >
              🎤
            </button>

            <button
              className="btn-primary"
              onClick={sendMessage}
              disabled={isBusy || !inputValue.trim()}
            >
              ↑
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIMentorChatbot;
