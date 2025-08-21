// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";  // ✅ fixed path

export const metadata: Metadata = {
  title: "BorderlessPlug",
  description: "Remote jobs and career tools for global talent",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="m-0 font-sans bg-gray-50 text-gray-900">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}