"use client";

import { useState } from "react";
import { PageDots, PageNav } from "@/components/PageNav";
import { NameInputSlide } from "@/components/slides/NameInputSlide";
import { CoverSlide } from "@/components/slides/CoverSlide";
import { DetailsSlide } from "@/components/slides/DetailsSlide";
import { MapSlide } from "@/components/slides/MapSlide";

// Tổng số slide SAU khi đã nhập tên (Cover, Details, RSVP, Map = 4 trang)
const TOTAL_SLIDES = 3;

export default function Home() {
  const [guestName, setGuestName] = useState<string | null>(null);
  const [page, setPage] = useState(0); // 0..3 sau khi đã nhập tên
  // key dùng để re-mount slide → trigger animation slide-enter mỗi lần chuyển trang
  const [animKey, setAnimKey] = useState(0);

  const goToPage = (i: number) => {
    if (i < 0 || i >= TOTAL_SLIDES) return;
    setPage(i);
    setAnimKey((k) => k + 1);
  };

  const handleNameSubmit = (name: string) => {
    setGuestName(name);
    setAnimKey((k) => k + 1);
  };

  // Chưa nhập tên → hiện slide nhập tên (không có nav, không có dots)
  if (!guestName) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 py-8">
        <NameInputSlide onSubmit={handleNameSubmit} />
      </main>
    );
  }

  // Đã nhập tên → hiện thiệp với điều hướng
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 py-6">
      {/* Page dots trên cùng */}
      <div className="py-4">
        <PageDots total={TOTAL_SLIDES} current={page} onSelect={goToPage} />
      </div>

      {/* Slide chính giữa */}
      <div key={animKey} className="flex-1 flex items-center justify-center w-full">
        {page === 0 && <CoverSlide guestName={guestName} />}
        {page === 1 && <DetailsSlide />}
        {page === 2 && <MapSlide />}
      </div>

      {/* Page navigation dưới cùng */}
      <div className="py-4">
        <PageNav
          current={page}
          total={TOTAL_SLIDES}
          onPrev={() => goToPage(page - 1)}
          onNext={() => goToPage(page + 1)}
        />
      </div>
    </main>
  );
}
