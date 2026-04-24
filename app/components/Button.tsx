import Link from "next/link";

type ButtonProps = {
  label?: string;
  href?: string;
  primary?: boolean;
};

export default function Button({
  label = "See More",
  href = "/",
  primary = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`flex w-full justify-center items-center px-6 py-3 rounded-lg font-bold transition-colors duration-300 ${
        primary
          ? "bg-primary text-white hover:bg-accent hover:text-white"
          : "bg-secondary text-primary hover:bg-accent hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}
