interface CornerProps {
  className?: string;
}

// 4 góc L kiểu thiệp, tự đặt khắp 4 góc khung
export function CornerBrackets({ className = "" }: CornerProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {/* Góc trên trái */}
      <Bracket className="top-0 left-0" />
      {/* Góc trên phải */}
      <Bracket className="top-0 right-0" rotate={90} />
      {/* Góc dưới phải */}
      <Bracket className="bottom-0 right-0" rotate={180} />
      {/* Góc dưới trái */}
      <Bracket className="bottom-0 left-0" rotate={270} />
    </div>
  );
}

function Bracket({ className, rotate = 0 }: { className: string; rotate?: number }) {
  return (
    <svg
      className={`absolute w-10 h-10 md:w-14 md:h-14 ${className}`}
      viewBox="0 0 60 60"
      style={{ transform: `rotate(${rotate}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* L bracket */}
      <path
        d="M 4 22 L 4 4 L 22 4"
        stroke="var(--rose-gold)"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Chấm trang trí ở góc */}
      <circle cx="4" cy="4" r="1.5" fill="var(--rose-gold)" />
      <circle cx="22" cy="4" r="1" fill="var(--rose-gold)" opacity="0.6" />
      <circle cx="4" cy="22" r="1" fill="var(--rose-gold)" opacity="0.6" />
    </svg>
  );
}

// Hoa văn nhỏ kiểu ✦ làm divider
export function FleurDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="block h-px w-12 bg-[var(--line)]" />
      <svg viewBox="0 0 20 20" className="w-3 h-3" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 10 2 L 11 9 L 18 10 L 11 11 L 10 18 L 9 11 L 2 10 L 9 9 Z"
          fill="var(--rose-gold)"
        />
      </svg>
      <span className="block h-px w-12 bg-[var(--line)]" />
    </div>
  );
}

// Con dấu tròn nhỏ ở giữa trang
export function CircleEmblem({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="30"
        cy="30"
        r="22"
        stroke="var(--rose-gold)"
        strokeWidth="0.8"
        fill="none"
        strokeDasharray="2 2"
      />
      <circle
        cx="30"
        cy="30"
        r="16"
        stroke="var(--rose-gold)"
        strokeWidth="1"
        fill="none"
      />
      {/* Hoa văn nhỏ giữa */}
      <path
        d="M 30 22 L 31 29 L 38 30 L 31 31 L 30 38 L 29 31 L 22 30 L 29 29 Z"
        fill="var(--rose-gold)"
      />
    </svg>
  );
}
