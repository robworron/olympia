import Link from "next/link";

type NavMenuProps = {
  onClick: () => void;
};

export default function NavMenu({ onClick }: NavMenuProps) {
  return (
    <nav
      className="absolute lg:hidden top-16 md:top-24 right-0 border-l-1 border-b-1 border-gray-200 rounded-bl-xl"
      aria-label="Main navigation"
    >
      <ul className="flex flex-col w-60 bg-white text-xl font-semibold font-heading rounded-bl-xl">
        <li className="group relative w-full p-8 border-b-1 border-gray-200 transition-translate duration-200 hover:translate-x-2">
          <Link href="/" onClick={onClick}>
            Home
          </Link>
        </li>
        <li className="group relative w-full p-8 border-b-1 border-gray-200 transition-translate duration-200 hover:translate-x-2">
          <Link href="/about" onClick={onClick}>
            About
          </Link>
        </li>
        <li className="group relative w-full p-8 border-b-1 border-gray-200 transition-translate duration-200 hover:translate-x-2">
          <Link href="/services" onClick={onClick}>
            Services
          </Link>
        </li>
        <li className="group relative w-full p-8 border-b-1 border-gray-200 transition-translate duration-200 hover:translate-x-2">
          <Link href="/investors" onClick={onClick}>
            Investors
          </Link>
        </li>
        <li className="group relative w-full p-8 border-b-1 border-gray-200 transition-translate duration-200 hover:translate-x-2">
          <Link href="/brokers" onClick={onClick}>
            Brokers
          </Link>
        </li>
        <li className="group relative w-full p-8 transition-translate duration-200 hover:translate-x-2">
          <Link href="/contact" onClick={onClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
