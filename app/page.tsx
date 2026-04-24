import Image from "next/image";
import Card from "./components/Card";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex-1 flex gap-16 w-full flex-col items-center">
      {/** Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.png"
            alt="Hero image"
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 flex items-center justify-between h-full max-w-7xl mx-auto px-8">
          <div className="max-w-xl flex flex-col gap-6">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
              Lending You Can Rely On
            </h1>
            <p className="text-xl font-semibold text-gray-600">
              Expert mortgage solutions tailored to your goals, backed by proven
              industry experience.
            </p>
            <div className="w-40">
              <Button label="Get Started" href="/contact" primary />
            </div>
          </div>
          <div className="relative w-72 h-72">
            <Image
              src="/assets/logo.png"
              alt="Olympia Mortgage Group logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/** Cards Section */}
      <section className="flex gap-8 justify-around w-full max-w-7xl my-16 px-8">
        <Card
          title="Investors"
          description="Earn consistent returns through carefully vetted mortgage opportunities."
          imageSrc={"/assets/investors.png"}
          href="/investors"
        />
        <Card
          title="Brokers"
          description="Help your clients move forward with practical lending solutions."
          imageSrc={"/assets/brokers.png"}
          href="/brokers"
        />
      </section>

      {/** About Section */}
      <section className="w-full bg-gradient-to-b from-white to-primary/10 border-t border-gray-100 py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <h4 className="text-lg text-accent font-semibold font-heading">
                Our Experience
              </h4>
              <h2 className="text-4xl font-bold font-heading mt-2">
                Real Estate Knowledge Built on Experience
              </h2>
            </div>
            <div className="w-24 h-1 bg-accent" />
            <p className="text-lg text-primary leading-relaxed">
              This section is for a brief 50-100 words about your experience and
              who you are. Longer details are on the About page. This is where
              you establish credibility, trust, and professional depth.
            </p>
            <div className="w-40">
              <Button label="Read More" href="/about" primary />
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/assets/experience.png"
                alt="Our experience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/** Google Reviews Section */}
      <section className="my-48">
        <h3 className="font-heading">GOOGLE REVIEWS SECTION</h3>
      </section>
    </div>
  );
}
