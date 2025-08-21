// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#183e36] text-center px-6">
      {/* Logo (put /public/logo.png in your project) */}
      <div className="mb-6">
        <Image
          src="/logo.png"
          alt="BorderlessPlug Logo"
          width={120}
          height={120}
          priority
        />
      </div>

      {/* Title - brighter gold */}
      <h1 className="text-4xl font-bold mb-3 text-[#fcefc2]">
        BorderlessPlug
      </h1>

      {/* Subtitle - gold */}
      <p className="text-lg mb-8 text-[#d7bc64] max-w-xl">
        Welcome! Explore remote opportunities across different job categories.
      </p>

      {/* CTA: emerald background, gold accents + brighter-gold text */}
      <Link href="/remote-jobs" className="inline-block">
        <button className="bg-[#183e36] text-[#fcefc2] border border-[#d7bc64] px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition">
          View Remote Jobs
        </button>
      </Link>
    </main>
  );
}