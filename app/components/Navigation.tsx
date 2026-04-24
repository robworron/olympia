"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const currentPath = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex gap-x-12 text-xl font-semibold font-heading">
        <li className="group relative">
          <Link href="/">Home</Link>
          <span
            className={`absolute left-0 -bottom-1 w-full h-0.5 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ${currentPath === "/" ? "scale-x-100" : ""}`}
          />
        </li>
        <li className="group relative">
          <Link href="/about">About</Link>
          <span
            className={`absolute left-0 -bottom-1 w-full h-0.5 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ${currentPath === "/about" ? "scale-x-100" : ""}`}
          />
        </li>
        <li className="group relative">
          <Link href="/services">Services</Link>
          <span
            className={`absolute left-0 -bottom-1 w-full h-0.5 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ${currentPath === "/services" ? "scale-x-100" : ""}`}
          />
        </li>
        <li className="group relative">
          <Link href="/investors">Investors</Link>
          <span
            className={`absolute left-0 -bottom-1 w-full h-0.5 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ${currentPath === "/investors" ? "scale-x-100" : ""}`}
          />
        </li>
        <li className="group relative">
          <Link href="/brokers">Brokers</Link>
          <span
            className={`absolute left-0 -bottom-1 w-full h-0.5 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ${currentPath === "/brokers" ? "scale-x-100" : ""}`}
          />
        </li>
        <li className="group relative">
          <Link href="/contact">Contact</Link>
          <span
            className={`absolute left-0 -bottom-1 w-full h-0.5 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ${currentPath === "/contact" ? "scale-x-100" : ""}`}
          />
        </li>
      </ul>
    </nav>
  );
}
