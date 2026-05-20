import Image from "next/image";
import Link from "next/link";
import { EMAIL_ICON, PHONE_ICON } from "@/utils/icons";

const PHONE_NUMBER = "(123) 456-7890";
const EMAIL_ADDRESS = "justin.domanico@gmail.com";
const LICENSE_NUMBER = "13822";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center md:items-start gap-6">
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
          <p className="text-sm text-gray-300 text-center md:text-start">
            Licensed by the Financial Services Regulatory Authority of Ontario
            (FSRA)
          </p>
          <p className="text-xl text-gray-300">MA Licence #{LICENSE_NUMBER}</p>
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
            <PHONE_ICON strokeColour="white" />
            <span>{PHONE_NUMBER}</span>
          </div>
          <div className="flex gap-3 items-center">
            <EMAIL_ICON strokeColour="white" />
            <span>{EMAIL_ADDRESS}</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl text-center mx-auto mt-12 px-8">
        <p className="w-full md:w-1/2 min-w-300px mx-auto text-xs text-gray-400">
          Olympia Mortgage Group Inc. is a licensed mortgage administrator in
          the Province of Ontario. FSRA Licence No. MA 13822. This website is
          for informational purposes only and does not constitute a commitment
          to lend, an offer to invest, or financial advice. All mortgage and
          investment opportunities are subject to underwriting, documentation,
          investor approval, and applicable legal and regulatory requirements.
          Private mortgage lending involves risk. Past performance is not
          indicative of future results.
        </p>
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
