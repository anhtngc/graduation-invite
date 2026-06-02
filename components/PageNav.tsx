interface PageDotsProps {
  total: number;
  current: number;
  onSelect?: (i: number) => void;
}

export function PageDots({ total, current, onSelect }: PageDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect?.(i)}
          className={`page-dot ${i === current ? "active" : ""}`}
          aria-label={`Trang ${i + 1}`}
        />
      ))}
    </div>
  );
}

interface PageNavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export function PageNav({ current, total, onPrev, onNext }: PageNavProps) {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6">
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="nav-btn rounded-sm"
      >
        ◀ Previous
      </button>
      <div className="display-serif text-[var(--text-soft)] text-sm tracking-widest">
        {current + 1} / {total}
      </div>
      <button
        onClick={onNext}
        disabled={current === total - 1}
        className="nav-btn rounded-sm"
      >
        Next ▶
      </button>
    </div>
  );
}
