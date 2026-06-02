"use client";

import { CornerBrackets, FleurDivider } from "@/components/CornerBrackets";

export function MapSlide() {
  // Sparkles đa dạng - hoa, sao, trái tim, sparkles
  const sparkles = [
    { top: "4%", left: "6%", delay: "0s", size: 22, symbol: "✿" },
    { top: "10%", right: "5%", delay: "0.6s", size: 18, symbol: "♡" },
    { top: "22%", left: "4%", delay: "1.3s", size: 20, symbol: "★" },
    { top: "32%", right: "6%", delay: "0.9s", size: 16, symbol: "✦" },
    { top: "50%", left: "5%", delay: "1.6s", size: 22, symbol: "❀" },
    { top: "62%", right: "4%", delay: "0.4s", size: 18, symbol: "✧" },
    { bottom: "28%", left: "6%", delay: "2s", size: 20, symbol: "♡" },
    { bottom: "18%", right: "5%", delay: "1.1s", size: 22, symbol: "✿" },
    { bottom: "10%", left: "10%", delay: "1.7s", size: 18, symbol: "★" },
    { bottom: "5%", right: "12%", delay: "0.3s", size: 18, symbol: "❁" },
  ];

  return (
    <div className="paper dashed-border relative w-full max-w-md md:max-w-lg rounded-sm p-8 md:p-12 slide-enter overflow-hidden">
      <CornerBrackets />

      {/* Sparkles bay khắp khung - đủ loại hình */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((s, i) => (
          <span
            key={i}
            className="absolute text-[var(--rose-gold)] sparkle-map"
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
          <span className="tracked-sm text-[var(--deep-rose)] text-[0.7rem]">
            Finding Your Way
          </span>
        </div>

        {/* Ảnh bản đồ - lấy từ /public/map.jpg */}
        <div className="dashed-border rounded-sm overflow-hidden bg-white/60 mb-5 relative">
          <img
            src="/map.jpg"
            alt="Map to UIT"
            className="w-full h-auto block"
          />
          {/* Hoa decor góc */}
          <span className="absolute top-2 right-2 text-[var(--rose-gold)] text-lg drop-shadow-sm">
            ✿
          </span>
          <span className="absolute bottom-2 left-2 text-[var(--rose-gold)] text-base drop-shadow-sm">
            ❀
          </span>
        </div>

        {/* Khối thông tin Building A + lời nhắn */}
        <div className="dashed-border rounded-sm p-5 md:p-6 bg-white/50 mb-6 relative">
          {/* Hoa góc */}
          <span className="absolute -top-2 -left-2 text-[var(--rose-gold)] text-lg">
            ✿
          </span>
          <span className="absolute -bottom-2 -right-2 text-[var(--rose-gold)] text-lg">
            ❀
          </span>

          <p className="font-palatino text-[var(--deep-rose)] text-base md:text-lg mb-1 font-semibold">
            <span className="text-[var(--rose-gold-deep)]">📍</span>
            <span className="font-semibold ml-2">
              The ceremony takes place at Building A
            </span>
          </p>

          <FleurDivider className="my-4" />

          <p className="font-palatino text-[var(--text-main)] text-sm md:text-base leading-relaxed mb-3">
            When you arrive, ping me on Messenger
            <span className="text-[var(--deep-rose)]"> ♡</span>
            <br />
            <span className="text-[var(--text-soft)]">
              I&apos;ll keep updating my live location for you
            </span>
          </p>

          <p className="font-palatino italic text-[var(--deep-rose)] text-sm md:text-base leading-relaxed">
            Hoping you&apos;ll join me to capture
            <br />
            this precious moment together{" "}
            <span className="text-[var(--rose-gold-deep)]">✿</span>
          </p>
        </div>

        {/* Footer info */}
        <div className="flex flex-col items-center gap-1 text-xs tracked-sm text-[var(--text-soft)] pt-4 border-t border-[var(--line-soft)]">
          <span>☎ 0939 508 327</span>
          <span className="text-[var(--rose-gold-deep)] font-medium">
            UIT · CE 2026
          </span>
        </div>
      </div>

      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Palatino+Linotype:wght@400;500;600;700&display=swap');
  .font-palatino {
    font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, 'URW Palladio L', serif;
  }

  @keyframes sparkleMap {
    0%, 100% { opacity: 0; transform: scale(0.5) rotate(-15deg); }
    50% { opacity: 0.9; transform: scale(1.15) rotate(15deg); }
  }
  .sparkle-map {
    animation: sparkleMap 3s ease-in-out infinite;
    filter: drop-shadow(0 0 6px rgba(201, 160, 124, 0.5));
    display: inline-block;
  }
`}</style>
    </div>
  );
}
