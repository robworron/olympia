import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-50 flex justify-center w-full px-12 py-4 bg-white border-b border-gray-300 shadow">
      <div className="flex justify-between items-center w-full max-w-7xl h-full">
        <Link href="/" className="relative w-48 h-12">
          <Image
            src="/assets/wordmark.png"
            alt="Olympia Mortgage Group wordmark logo"
            fill
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
