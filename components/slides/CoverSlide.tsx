"use client";

import { CornerBrackets, FleurDivider } from "@/components/CornerBrackets";

interface Props {
  guestName: string;
}

export function CoverSlide({ guestName }: Props) {
  const sparkles = [
    { top: "5%", left: "8%", delay: "0s", size: 24, symbol: "✿" },
    { top: "10%", right: "6%", delay: "0.7s", size: 18, symbol: "♡" },
    { top: "25%", left: "4%", delay: "1.4s", size: 26, symbol: "★" },
    { top: "38%", right: "3%", delay: "0.4s", size: 20, symbol: "✦" },
    { top: "55%", left: "5%", delay: "2s", size: 20, symbol: "❀" },
    { bottom: "30%", right: "5%", delay: "1.1s", size: 24, symbol: "♡" },
    { bottom: "15%", left: "10%", delay: "1.8s", size: 22, symbol: "✿" },
    { bottom: "6%", right: "12%", delay: "0.3s", size: 18, symbol: "✧" },
  ];

  return (
    <div className="paper dashed-border relative w-full max-w-md md:max-w-lg rounded-sm p-8 md:p-10 slide-enter overflow-hidden">
      <CornerBrackets />

      {/* Sparkles twinkling khắp khung */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((s, i) => (
          <span
            key={i}
            className="absolute text-[var(--rose-gold)] sparkle-twinkle"
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
        {/* Dear */}
        <p className="tracked-sm text-[var(--text-soft)] mb-1 text-[0.7rem]">
          Dear
        </p>

        {/* Tên khách - calligraphy script viết tay */}
        <h1 className="guest-name text-6xl md:text-7xl text-[var(--deep-rose)] mb-4 break-words">
          {guestName}
        </h1>

        <FleurDivider className="mb-5" />

        {/* You're invited to */}
        <div className="label-box mb-4 inline-block">
          <span className="tracked-sm text-[var(--deep-rose)] text-[0.65rem]">
            You&apos;re invited to
          </span>
        </div>

        {/* "celebrate the graduation of" */}
        <p className="font-palatino text-[var(--text-soft)] text-xl md:text-2xl mb-2">
          celebrate the graduation of
        </p>

        {/* "Ngọc Ánh" */}
        <h2 className="font-palatino text-3xl md:text-4xl text-[var(--deep-rose)] mb-4 leading-tight font-semibold">
          Ngọc Ánh
        </h2>

        {/* Ngành + Class of */}
        <p className="tracked-sm text-[var(--rose-gold-deep)] text-[0.72rem] mb-1">
          Computer Engineering
        </p>
        <p className="tracked-sm text-[var(--rose-gold-deep)] text-[0.65rem] mb-6 opacity-75">
          Class of 2026
        </p>

        {/* CHỖ CHÈN ẢNH - sticker outline trắng ôm sát silhouette */}
        <div className="relative mx-auto mb-8 w-48 h-60 md:w-56 md:h-72 flex items-center justify-center">
          <img
            src="/myself.png"
            alt=""
            className="max-w-full max-h-full object-contain sticker-outline"
          />
          {/* Sparkles quanh ảnh - giữ nguyên */}
          <span className="absolute -top-5 -left-4 text-[var(--rose-gold)] text-3xl sparkle-twinkle z-10" style={{ animationDelay: "0s" }}>♡</span>
          <span className="absolute -top-3 -right-5 text-[var(--rose-gold)] text-xl sparkle-twinkle z-10" style={{ animationDelay: "0.6s" }}>✿</span>
          <span className="absolute -bottom-4 -right-3 text-[var(--rose-gold)] text-2xl sparkle-twinkle z-10" style={{ animationDelay: "1.2s" }}>★</span>
          <span className="absolute -bottom-5 -left-5 text-[var(--rose-gold)] text-xl sparkle-twinkle z-10" style={{ animationDelay: "1.8s" }}>❀</span>
        </div>

        {/* Câu cuối */}
        <p className="font-palatino italic text-[var(--text-soft)] text-sm md:text-base mt-6 px-4 leading-relaxed">
          Your presence would make my day complete <span className="text-[var(--deep-rose)]">♡</span>
        </p>
      </div>

      {/* CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Manrope:wght@400;500;600;700;800&display=swap');

        .font-palatino {
          font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
        }

        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.15) rotate(180deg); }
        }
        .sparkle-twinkle {
          animation: sparkleTwinkle 3s ease-in-out infinite;
          filter: drop-shadow(0 0 6px rgba(201, 160, 124, 0.5));
          display: inline-block;
        }
        .guest-name {
          font-family: 'Great Vibes', cursive;
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: 0.01em;
        }

        /* Sticker outline - viền trắng ôm sát alpha channel của PNG */
        .sticker-outline {
          filter:
            drop-shadow(3px 0 0 #ffffff)
            drop-shadow(-3px 0 0 #ffffff)
            drop-shadow(0 3px 0 #ffffff)
            drop-shadow(0 -3px 0 #ffffff)
            drop-shadow(2px 2px 0 #ffffff)
            drop-shadow(-2px 2px 0 #ffffff)
            drop-shadow(2px -2px 0 #ffffff)
            drop-shadow(-2px -2px 0 #ffffff)
            drop-shadow(0 8px 16px rgba(139, 74, 87, 0.3));
        }
      `}</style>
    </div>
  );
}
