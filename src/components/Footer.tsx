"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Don't render footer on the landing page
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="bg-black text-gray-400 py-8 px-4 sm:px-8 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Shardul Singh. All rights reserved.</p>
          <p className="text-xs mt-1">Built with ❤️ using Next.js and Tailwind CSS.</p>
        </div>
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            Resume
          </Link>
          <Link href="https://github.com/shardulsinghdev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            GitHub
          </Link>
          <Link href="/blogs" className="hover:text-white transition-colors duration-300">
            Blog
          </Link>
        </div>
        {/* Optional: Dark/Light toggle placeholder */}
        {/* <div>
          <button className="px-4 py-2 border border-gray-600 rounded-md text-gray-400 hover:text-white hover:border-white transition-colors duration-300">
            Toggle Theme
          </button>
        </div> */}
      </div>
    </footer>
  );
} 