"use client";

import { CornerBrackets, FleurDivider } from "@/components/CornerBrackets";

interface InfoBlockProps {
  label: string;
  children: React.ReactNode;
}

function InfoBlock({ label, children }: InfoBlockProps) {
  return (
    <div className="text-center">
      <p className="tracked-sm text-[var(--rose-gold-deep)] text-[0.7rem] mb-3">
        {label}
      </p>
      <div className="font-palatino text-[var(--text-main)] text-base md:text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function MiniDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-5">
      <span className="block h-px w-8 bg-[var(--line)]" />
      <span className="text-[var(--rose-gold)] text-xs">✦</span>
      <span className="block h-px w-8 bg-[var(--line)]" />
    </div>
  );
}

export function DetailsSlide() {
  const sparkles = [
    { top: "6%", left: "7%", delay: "0s", size: 22, symbol: "✿" },
    { top: "15%", right: "6%", delay: "0.8s", size: 18, symbol: "♡" },
    { top: "30%", left: "4%", delay: "1.4s", size: 20, symbol: "★" },
    { top: "45%", right: "5%", delay: "0.4s", size: 18, symbol: "✦" },
    { top: "60%", left: "5%", delay: "1.6s", size: 20, symbol: "❀" },
    { bottom: "25%", right: "6%", delay: "1.1s", size: 22, symbol: "♡" },
    { bottom: "15%", left: "8%", delay: "1.7s", size: 18, symbol: "✿" },
    { bottom: "20%", right: "12%", delay: "0.3s", size: 16, symbol: "✧" },
    { bottom: "5%", right: "5%", delay: "1.3s", size: 18, symbol: "★" },
  ];

  return (
    <div className="paper dashed-border relative w-full max-w-md md:max-w-lg rounded-sm p-8 md:p-12 slide-enter overflow-hidden">
      <CornerBrackets />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((s, i) => (
          <span
            key={i}
            className="absolute text-[var(--rose-gold)] sparkle-twinkle-2"
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
            Event Details
          </span>
        </div>

        <p className="font-palatino italic text-[var(--text-soft)] text-sm md:text-base leading-relaxed px-4">
          Celebrating the graduation of
        </p>
        <h2 className="name-calligraphy text-5xl md:text-6xl text-[var(--deep-rose)] mb-2">
          Trần Ngọc Ánh
        </h2>
        <p className="tracked-sm text-[var(--rose-gold-deep)] text-[0.65rem]">
          Bachelor of Computer Engineering
        </p>

        <FleurDivider className="my-7" />

        <InfoBlock label="Date">11 June 2026</InfoBlock>

        <MiniDivider />

        <InfoBlock label="Time">10:30 - 12:00</InfoBlock>

        <MiniDivider />

        <InfoBlock label="Venue">
          <span className="text-lg md:text-xl text-[var(--deep-rose)]">
            Building A
          </span>
          <br />
          <span>University of Information Technology</span>
          <br />
          <a
            href="https://maps.app.goo.gl/7ApGVs7eyE4fxh5d7"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link font-palatino block text-sm mt-3 leading-relaxed group"
          >
            Khu phố 34, Phường Linh Xuân
            <br />
            Thành phố Hồ Chí Minh
            <span className="inline-block ml-1.5 text-[var(--rose-gold)] group-hover:translate-x-0.5 transition-transform">
              ↗
            </span>
          </a>
        </InfoBlock>

        <MiniDivider />

        <InfoBlock label="Contact">0939 508 327</InfoBlock>

        <FleurDivider className="my-7" />

        <p className="font-palatino italic text-[var(--text-soft)] text-sm md:text-base leading-relaxed px-4">
          Hoping to celebrate this milestone together{" "}
          <span className="text-[var(--deep-rose)]">♡</span>
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap');

        .font-palatino {
          font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, 'URW Palladio L', serif;
        }

        @keyframes sparkleTwinkle2 {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.15) rotate(180deg); }
        }
        .sparkle-twinkle-2 {
          animation: sparkleTwinkle2 3s ease-in-out infinite;
          filter: drop-shadow(0 0 6px rgba(201, 160, 124, 0.5));
          display: inline-block;
        }
        .name-calligraphy {
          font-family: 'Dancing Script', 'Great Vibes', cursive;
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: 0.01em;
        }
        .map-link {
          color: var(--text-soft);
          text-decoration: none;
          border-bottom: 1px dotted transparent;
          transition: all 0.3s ease;
        }
        .map-link:hover {
          color: var(--deep-rose);
          border-bottom-color: var(--rose-gold);
        }
      `}</style>
    </div>
  );
}
