import Image from "next/image";

export default function About() {
  return (
    <div>
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/about.png"
            alt="About image"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative p-12">
          <h1 className="text-4xl text-primary font-heading font-bold">
            About Olympia
          </h1>
          <h4 className="text-xl text-accent font-heading font-semibold opacity-70">
            Credibility Through Experience
          </h4>
        </div>
      </section>
    </div>
  );
}
