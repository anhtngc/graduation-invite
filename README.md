# 🌸 Thư mời lễ tốt nghiệp — Pink Pastel Edition

Website thiệp mời nhiều trang, phong cách thanh lịch với tone hồng pastel rose gold.

## ✨ Cấu trúc 5 trang

1. **Trang nhập tên** — Khách nhập tên trước khi mở thư
2. **Trang bìa** — "TRÂN TRỌNG KÍNH MỜI [Tên khách]"
3. **Thông tin buổi lễ** — Ngày, giờ, địa điểm
4. **Xác nhận tham dự** — RSVP, thông tin liên hệ
5. **Bản đồ** — Hướng dẫn đến địa điểm

Khách có thể bấm nút **◀ Trước / Tiếp ▶** hoặc bấm vào dots ở trên cùng để chuyển trang.

## 🚀 Chạy local

```bash
npm install
cp .env.local.example .env.local   # đổi ADMIN_SECRET
npm run dev
```

Mở http://localhost:3000.

## ✏️ Tùy chỉnh nội dung

Mở các file slide tương ứng để sửa text:

| File | Nội dung |
|------|----------|
| `components/slides/NameInputSlide.tsx` | Trang nhập tên + tên chuyên ngành ("Trí Tuệ Nhân Tạo") |
| `components/slides/CoverSlide.tsx` | Tên bạn, chuyên ngành, trường |
| `components/slides/DetailsSlide.tsx` | Ngày, giờ, địa điểm, lịch trình |
| `components/slides/RsvpSlide.tsx` | Thông tin liên hệ (SĐT, email) |
| `components/slides/MapSlide.tsx` | Bản đồ + thông tin chỉ đường |

## 🗺️ Thêm ảnh bản đồ

Bỏ ảnh map.png vào thư mục `/public/`, rồi sửa `MapSlide.tsx`:
```tsx
<img src="/map.png" alt="Bản đồ UIT" className="w-full" />
```

## 🎨 Tùy chỉnh màu

Mở `app/globals.css`, sửa các biến `:root`:
```css
:root {
  --bg-1: #FFF0F3;       /* Hồng nhạt nhất */
  --bg-2: #FFD9E2;       /* Hồng pastel */
  --bg-3: #FFC2D1;       /* Hồng đậm hơn */
  --paper: #FFFBF8;      /* Màu giấy */
  --rose-gold: #C9A07C;  /* Rose gold cho viền */
  --deep-rose: #8B4A57;  /* Hồng đậm cho chữ */
  ...
}
```

## 📁 Cấu trúc thư mục

```
graduation-invite/
├── app/
│   ├── api/guests/route.ts       # API lưu/đọc danh sách khách
│   ├── globals.css               # CSS toàn cục + biến màu pastel
│   ├── layout.tsx
│   └── page.tsx                  # Orchestrator - quản lý chuyển slide
├── components/
│   ├── CornerBrackets.tsx        # Góc viền L, divider, con dấu tròn
│   ├── PageNav.tsx               # Dots + nút TRƯỚC/TIẾP
│   └── slides/
│       ├── NameInputSlide.tsx    # Slide nhập tên
│       ├── CoverSlide.tsx        # Bìa thư mời
│       ├── DetailsSlide.tsx      # Thông tin lễ
│       ├── RsvpSlide.tsx         # Xác nhận tham dự
│       └── MapSlide.tsx          # Bản đồ
├── lib/guests.ts                 # Helper đọc/ghi guests.json
├── public/                       # Ảnh tĩnh (map.png, etc.)
├── package.json, tsconfig.json, tailwind.config.ts, next.config.js
└── README.md
```

## 👀 Xem danh sách khách đã mở thư mời

```
https://your-site.com/api/guests?secret=mat_khau_trong_env
```

## 🌐 Deploy Vercel

```bash
# 1. Push lên GitHub
git init && git add . && git commit -m "init"
# Push lên repo

# 2. Vào vercel.com → Import repo
# 3. Thêm biến môi trường ADMIN_SECRET
# 4. Deploy 🎉
```

**Lưu ý:** Trên Vercel filesystem read-only, nên file `data/guests.json` không lưu được sau khi deploy. 
Để lưu thật, hãy đổi `lib/guests.ts` sang **Vercel KV / Supabase / MongoDB Atlas**. 

Ví dụ với Vercel KV:
```bash
npm install @vercel/kv
```
```ts
// lib/guests.ts
import { kv } from "@vercel/kv";

export async function addGuest(name: string) {
  const guest = { name, visitedAt: new Date().toISOString() };
  await kv.lpush("guests", JSON.stringify(guest));
  return guest;
}
export async function getGuests() {
  const list = await kv.lrange("guests", 0, -1);
  return list.map((s) => JSON.parse(s as string));
}
```
API route không cần đổi gì.
