"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  // Don't render navbar on the landing page
  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 p-4 z-50 flex items-center justify-between px-8">
      <div className="flex items-center space-x-8">
        <Image src="/netflix.png" alt="Netflix Logo" width={90} height={25} />
        <Link href="/hero" className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-300">
          Home
        </Link>
        <Link href="/tvshows" className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-300">
          TV Shows
        </Link>
        <Link href="/movies" className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-300">
          Movies
        </Link>
        <Link href="/recently-added" className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-300">
          Recently Added
        </Link>
        <Link href="/my-list" className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-300">
          My List
        </Link>
        <Link href="/about" className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-300">
          About Me
        </Link>
        <Link href="/projects" className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-300">
          Projects
        </Link>
        <Link href="/experience" className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-300">
          Experience
        </Link>
        <Link href="/blogs" className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-300">
          Blogs
        </Link>
        <Link href="/testimonials" className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-300">
          Testimonials
        </Link>
        <Link href="/contact" className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-300">
          Contact
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-300 transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
        {/* Add more icons here, e.g., notifications, profile */}
      </div>
    </nav>
  );
} 