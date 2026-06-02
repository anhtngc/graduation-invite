import type { Metadata } from "next";
import { Controls } from "@/components/Controls";
import "./globals.css";

export const metadata: Metadata = {
  title: "Graduation Invitation 🎓",
  description: "You're invited to celebrate my graduation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Controls />
      </body>
    </html>
  );
}
