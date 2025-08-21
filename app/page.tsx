// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#183e36] text-center px-6">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/logo.png"
          alt="BorderlessPlug Logo"
          width={120}
          height={120}
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-3 text-[#fcefc2]">
        BorderlessPlug 🌍⚡
      </h1>

      {/* Subtitle */}
      <p className="text-lg mb-8 text-[#d7bc64] max-w-xl">
        Breaking borders, building careers.  
        Borderless Plug is here to keep you plugged into the world of remote work! 
        Our FREE remote job board gives you access to various remote job opportunities.
        Get access to jobs from Sales, I.T, Accounting, Admin, and more!  
        If you want to stand out as a top candidate then we're here to help
        with optimized resumes and LinkedIn profiles.  
        For general enquiries{" "}
        <a
          href="https://wa.me/27679245039"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#fcefc2]"
        >
          click here
        </a>.  
        Welcome again to Borderless Plug. Where ambition, meets altitude!
      </p>
    </main>
  );
}
