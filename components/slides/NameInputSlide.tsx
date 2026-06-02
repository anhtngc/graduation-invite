"use client";

import { useState } from "react";
import { CornerBrackets, FleurDivider, CircleEmblem } from "@/components/CornerBrackets";

interface Props {
  onSubmit: (name: string) => void;
}

export function NameInputSlide({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  // Sparkles - mix stars and hearts
  const sparkles = [
    { top: "5%", left: "8%", delay: "0s", size: 22, symbol: "✿" },
    { top: "12%", right: "7%", delay: "0.7s", size: 18, symbol: "♡" },
    { top: "28%", left: "5%", delay: "1.4s", size: 22, symbol: "★" },
    { top: "42%", right: "4%", delay: "0.4s", size: 18, symbol: "❀" },
    { top: "58%", left: "6%", delay: "2s", size: 18, symbol: "♡" },
    { bottom: "30%", right: "6%", delay: "1.1s", size: 22, symbol: "✦" },
    { bottom: "15%", left: "10%", delay: "1.7s", size: 20, symbol: "✿" },
    { bottom: "7%", right: "12%", delay: "0.3s", size: 18, symbol: "❁" },
    { top: "70%", right: "8%", delay: "1.5s", size: 16, symbol: "✧" },
  ];

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = name.trim();
    if (!v) return;
    setLoading(true);
    try {
      await fetch("/api/guests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: v }),
      });
    } catch (err) {
      console.error(err);
    }
    onSubmit(v);
  };

  return (
    <div className="paper dashed-border relative w-full max-w-md md:max-w-lg rounded-sm p-10 md:p-14 slide-enter overflow-hidden">
      <CornerBrackets />

      {/* Sparkles bay khắp - hearts + stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((s, i) => (
          <span
            key={i}
            className="absolute text-[var(--rose-gold)] sparkle-cute"
            style={{
              top: s.top,
              left: s.left,
              right: s.right,
              bottom: s.bottom,
              fontSize: `${s.size}px`,
              animationDelay: s.delay,
            }}
          >
            {s.symbol}
          </span>
        ))}
      </div>

      <div className="relative z-10 text-center">
        <div className="label-box mb-6 inline-block">
          <span className="tracked-sm text-[var(--deep-rose)]">INVITATION</span>
        </div>

        <FleurDivider className="mb-6" />

        {/* 2 dòng tracked uppercase - cùng cỡ */}
        <p className="tracked-sm text-[var(--text-soft)] mb-1 text-[0.72rem]">
          Bachelor&apos;s Graduation Ceremony
        </p>
        <p className="tracked-sm text-[var(--rose-gold-deep)] mb-5 text-[0.72rem]">
          Computer Engineering
        </p>

        {/* Tên to - calligraphy mảnh */}
        <h1 className="cute-name text-6xl md:text-7xl text-[var(--deep-rose)] mb-4">
          Ngọc Ánh
        </h1>

        <CircleEmblem className="w-12 h-12 mx-auto mb-6" />

        <div className="w-32 h-px bg-[var(--line)] mx-auto mb-6" />

        <p className="display-italic text-[var(--text-main)] text-lg md:text-xl mb-1 leading-relaxed">
          Hi lovely! <span className="text-[var(--deep-rose)]">♡</span>
        </p>
        <p className="display-italic text-[var(--text-soft)] text-sm md:text-base mb-6 leading-relaxed">
          tell me your name first
          <br />
          so I can write you the cutest invitation
        </p>

        <form onSubmit={handle} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your name, lovely..."
            maxLength={50}
            required
            className="w-full px-5 py-3 bg-white/60 border border-[var(--line)] text-center display-italic text-xl text-[var(--deep-rose)] placeholder:text-[var(--text-soft)]/50 placeholder:not-italic placeholder:text-base focus:outline-none focus:border-[var(--rose-gold-deep)] focus:bg-white/90 transition-all rounded-sm"
          />
          <button
            type="submit"
            disabled={loading || !name.trim()}
            className="nav-btn rounded-sm w-full"
          >
            {loading ? "Opening..." : "Open Invitation ▶"}
          </button>
        </form>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

        @keyframes sparkleCute {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(-10deg); }
          50% { opacity: 0.9; transform: scale(1.15) rotate(15deg); }
        }
        .sparkle-cute {
          animation: sparkleCute 2.8s ease-in-out infinite;
          filter: drop-shadow(0 0 6px rgba(201, 160, 124, 0.5));
          display: inline-block;
        }
        .cute-name {
          font-family: 'Great Vibes', cursive;
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: 0.01em;
        }
      `}</style>
    </div>
  );
}
