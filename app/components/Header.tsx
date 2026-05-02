"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Burger from "./Burger";
import Navigation from "./Navigation";
import NavMenu from "./NavMenu";

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleMenu = () => {
    setBurgerOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setBurgerOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 z-50 flex justify-center w-full h-16 md:h-24 px-4 md:px-12 py-2 md:py-4 bg-white border-b border-gray-300 shadow">
      <div className="flex justify-between items-center w-full max-w-7xl h-full">
        <Link href="/" className="relative w-30 h-8 md:w-48 md:h-12">
          <Image
            src="/assets/wordmark.png"
            alt="Olympia Mortgage Group wordmark logo"
            fill
          />
        </Link>
        <div className="hidden md:flex">
          <Navigation />
        </div>
        <div className="flex md:hidden">
          <Burger isActive={burgerOpen} onClick={toggleMenu} />
        </div>
      </div>
      {burgerOpen ? <NavMenu onClick={closeMenu} /> : <></>}
    </header>
  );
}
