"use client";

import { useEffect, useRef, useState } from "react";

export function Controls() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Load saved preferences từ localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
    const savedMuted = localStorage.getItem("muted");
    if (savedMuted === "true") setMuted(true);
  }, []);

  // Auto-play nhạc sau khi user tương tác lần đầu (browser yêu cầu)
  useEffect(() => {
    if (hasInteracted) return;

    const handleInteraction = () => {
      if (audioRef.current && !hasInteracted) {
        audioRef.current.volume = 0.4;
        audioRef.current.muted = muted;
        audioRef.current.play().catch(() => {
          // Autoplay blocked - sẽ play khi click button
        });
        setHasInteracted(true);
      }
    };

    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("touchend", handleInteraction, { once: true });
    document.addEventListener("keydown", handleInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchend", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, [hasInteracted, muted]);

  const toggleMute = () => {
    const newMuted = !muted;
    setMuted(newMuted);
    if (audioRef.current) {
      audioRef.current.muted = newMuted;
      if (!newMuted && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
    }
    localStorage.setItem("muted", String(newMuted));
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      {/* Audio element - file nhạc đặt ở /public/music.mp3 */}
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

      {/* Floating control buttons - bottom right */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-2">
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute music" : "Mute music"}
          title={muted ? "Bật nhạc" : "Tắt nhạc"}
          className="control-btn"
        >
          {muted ? "🔇" : "🎵"}
        </button>
        <button
          onClick={toggleTheme}
          aria-label={isDark ? "Light mode" : "Dark mode"}
          title={isDark ? "Chế độ sáng" : "Chế độ tối"}
          className="control-btn"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>

      <style>{`
        .control-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--paper);
          border: 1px solid var(--rose-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(8px);
        }
        .control-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        .control-btn:active {
          transform: scale(0.95);
        }
        @media (max-width: 640px) {
          .control-btn {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
