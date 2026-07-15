import React from "react";

interface AIAnimationProps {
  size?: number;
}

export const AIAnimation: React.FC<AIAnimationProps> = ({ size = 120 }) => {
  return (
    <div className="ai-orb-wrapper" style={{ width: size, height: size }}>
      <div className="ai-glow-bg" />
      <div className="ai-orb">
        <div className="ai-core" />
        <div className="ai-ring ring-a" />
        <div className="ai-ring ring-b" />
        <div className="ai-ring ring-c" />
        <div className="ai-sparkles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`sparkle sparkle-${i}`} />
          ))}
        </div>
      </div>
      <style>{`
        .ai-orb-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          pointer-events: none;
        }
        .ai-glow-bg {
          position: absolute;
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(26, 110, 255, 0) 70%);
          filter: blur(20px);
          animation: pulseBg 3s infinite alternate ease-in-out;
        }
        .ai-orb {
          position: relative;
          width: 60%;
          height: 60%;
          perspective: 800px;
          transform-style: preserve-3d;
        }
        .ai-core {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 35%;
          height: 35%;
          background: radial-gradient(circle at 30% 30%, #FFFFFF 0%, #00D4FF 30%, #1A6EFF 70%);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.8),
                      0 0 40px rgba(26, 110, 255, 0.6),
                      inset 0 -2px 8px rgba(0,0,0,0.3);
          animation: floatCore 4s infinite ease-in-out;
          z-index: 2;
        }
        .ai-ring {
          position: absolute;
          inset: -30%;
          border: 1.5px solid transparent;
          border-radius: 50%;
          mask-image: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
          -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%);
        }
        .ring-a {
          border-top-color: rgba(0, 212, 255, 0.8);
          border-bottom-color: rgba(26, 110, 255, 0.8);
          transform: rotateX(70deg) rotateY(0deg);
          animation: orbitRotationA 6s linear infinite;
        }
        .ring-b {
          border-left-color: rgba(0, 212, 255, 0.7);
          border-right-color: rgba(0, 230, 118, 0.7);
          transform: rotateX(-60deg) rotateY(60deg);
          animation: orbitRotationB 7s linear infinite;
        }
        .ring-c {
          border-top-color: rgba(245, 166, 35, 0.6);
          border-bottom-color: rgba(26, 110, 255, 0.7);
          transform: rotateX(30deg) rotateY(-60deg);
          animation: orbitRotationC 8s linear infinite reverse;
        }
        .ai-sparkles {
          position: absolute;
          inset: -40%;
        }
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00D4FF;
          border-radius: 50%;
          box-shadow: 0 0 6px #00D4FF;
          opacity: 0;
        }
        .sparkle-0 { top: 20%; left: 30%; animation: particleEmit 2s infinite 0.2s; }
        .sparkle-1 { top: 50%; left: 10%; animation: particleEmit 2.5s infinite 0.8s; }
        .sparkle-2 { top: 80%; left: 40%; animation: particleEmit 1.8s infinite 1.2s; }
        .sparkle-3 { top: 30%; left: 70%; animation: particleEmit 2.2s infinite 0.5s; }
        .sparkle-4 { top: 60%; left: 90%; animation: particleEmit 2.6s infinite 1.5s; }
        .sparkle-5 { top: 10%; left: 60%; animation: particleEmit 2.1s infinite 0.1s; }

        @keyframes pulseBg {
          from { transform: scale(0.9); opacity: 0.5; }
          to { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes floatCore {
          0%, 100% { transform: translateY(0) scale(0.9); }
          50% { transform: translateY(-4px) scale(1.1); }
        }
        @keyframes orbitRotationA {
          from { transform: rotateX(70deg) rotateZ(0deg); }
          to { transform: rotateX(70deg) rotateZ(360deg); }
        }
        @keyframes orbitRotationB {
          from { transform: rotateX(-60deg) rotateY(60deg) rotateZ(0deg); }
          to { transform: rotateX(-60deg) rotateY(60deg) rotateZ(360deg); }
        }
        @keyframes orbitRotationC {
          from { transform: rotateX(30deg) rotateY(-60deg) rotateZ(0deg); }
          to { transform: rotateX(30deg) rotateY(-60deg) rotateZ(360deg); }
        }
        @keyframes particleEmit {
          0% { transform: scale(0) translate(0, 0); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: scale(1.2) translate(var(--tx, 10px), var(--ty, -10px)); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
