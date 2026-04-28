import Image from "next/image";
import Link from "next/link";

const PHONE_NUMBER = "(123) 456-7890";
const EMAIL_ADDRESS = "email@email.com";
const ADDRESS = "123 Main St, Niagara Falls, Ontario, A1A 1A1";
const LICENSE_NUMBER = "#123456";

const PHONE_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    />
  </svg>
);

const EMAIL_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
);

const ADDRESS_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);
export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="relative w-16 h-16">
              <Image
                src="/assets/graphic-white.png"
                alt="Olympia logo graphic"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-10">
              <Image
                src="/assets/wordmark-white.png"
                alt="Olympia wordmark"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-sm text-gray-300">
            This is the place for a concise 30 words that captures the essence
            of your business and explains what you do and who you are.
          </p>
          <p className="text-xl text-gray-300">License {LICENSE_NUMBER}</p>
        </div>
        <div className="flex flex-col gap-2 items-center text-sm">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Investors", "/investors"],
            ["Brokers", "/brokers"],
            ["Contact", "/contact"],
            ["Privacy", "/privacy"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="hover:text-accent transition"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-200">
          <div className="flex gap-3 items-center">
            {PHONE_ICON}
            <span>{PHONE_NUMBER}</span>
          </div>
          <div className="flex gap-3 items-center">
            {EMAIL_ICON}
            <span>{EMAIL_ADDRESS}</span>
          </div>
          <div className="flex gap-3 items-center">
            {ADDRESS_ICON}
            <span>{ADDRESS}</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-400 flex flex-col gap-2">
        <p>
          © {new Date().getFullYear()} Olympia Mortgage Group Inc. All rights
          reserved.
        </p>
        <p>
          Website designed and developed by{" "}
          <a
            href="https://www.robworron.ca/"
            target="_blank"
            className="hover:text-white underline"
          >
            Rob Worron
          </a>
        </p>
      </div>
    </footer>
  );
}
