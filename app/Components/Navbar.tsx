// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-emerald-700 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link
        href="/"
        className="text-white text-xl font-bold hover:text-gray-200 transition-colors"
      >
        BorderlessPlug
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6">
        <Link href="/" className="text-white hover:text-gray-200">Home</Link>
        <Link href="/remote-jobs" className="text-white hover:text-gray-200">Remote Jobs</Link>
        <Link href="/build-linkedin" className="text-white hover:text-gray-200">Build LinkedIn</Link>
        <Link href="/upgrade-resume" className="text-white hover:text-gray-200">Upgrade Resume</Link>
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        {/* Icon changes when open/closed */}
        {isOpen ? (
          <span className="text-2xl">✖</span> // Close
        ) : (
          <span className="text-2xl">☰</span> // Hamburger
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-emerald-700 flex flex-col items-center gap-4 py-6 md:hidden">
          <Link href="/" className="text-white text-lg hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/remote-jobs" className="text-white text-lg hover:text-gray-200" onClick={() => setIsOpen(false)}>Remote Jobs</Link>
          <Link href="/build-linkedin" className="text-white text-lg hover:text-gray-200" onClick={() => setIsOpen(false)}>Build LinkedIn</Link>
          <Link href="/upgrade-resume" className="text-white text-lg hover:text-gray-200" onClick={() => setIsOpen(false)}>Upgrade Resume</Link>
        </nav>
      )}
    </header>
  );
}