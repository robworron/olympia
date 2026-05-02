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
        <div className="relative z-10 flex items-center justify-around h-full mx-auto px-8">
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
      <section className="w-full bg-gradient-to-b from-white to-primary/10 border-t border-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-sm tracking-widest text-accent font-semibold">
                OUR EXPERIENCE
              </h4>
              <h2 className="text-4xl font-bold font-heading mt-3 leading-tight">
                Built on Real Deals, Not Theory
              </h2>
            </div>
            <div className="w-20 h-1 bg-accent" />
            <p className="text-lg text-primary leading-relaxed max-w-xl">
              ~ 50 words here to summarize something quick about yourself, and
              your company. We've spent years working within the Niagara
              region's residential market, structuring deals that actually
              close. From standard home financing to complex builds, our focus
              is simple terms, reliable execution, and relationships that last
              beyond a single transaction.
            </p>
            <div className="flex gap-10 pt-2">
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">250+</p>
                <p className="text-sm text-gray-600">Deals Funded</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">Niagara</p>
                <p className="text-sm text-gray-600">Local Expertise</p>
              </div>
            </div>
            <div className="max-w-64 pt-4">
              <Button label="Learn More About Us" href="/about" primary />
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/assets/experience.png"
                alt="Team working on real estate deals"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/** Services Section */}
      <section className="flex gap-8 w-full mt-16 mb-32">
        <div className="flex-1">
          <div className="relative w-full h-[600px]">
            <Image
              src="/assets/home-services.png"
              alt="temp"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h4 className="text-sm tracking-widest text-accent font-semibold">
                OUR SERVICES
              </h4>
              <h2 className="text-4xl font-bold font-heading mt-3 leading-tight">
                Lending Solutions Built Around Your Goals
              </h2>
            </div>
            <div className="w-20 h-1 bg-accent" />
            <p className="text-lg text-primary leading-relaxed max-w-xl">
              ~ 50 words here to summarize what services you offer your clients
              and why they should choose you. We provide tailored residential
              financing solutions for homeowners, brokers, and investors
              throughout the Niagara region. Whether you're purchasing,
              refinancing, or funding a new build, our team works to structure
              lending options that align with your timeline and long-term
              objectives.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-primary">
                  Residential Mortgages
                </p>
                <p className="text-sm text-gray-600">
                  Purchase and refinance solutions
                </p>
              </div>

              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-primary">
                  Construction Financing
                </p>
                <p className="text-sm text-gray-600">
                  Flexible funding for new builds
                </p>
              </div>

              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-primary">
                  Broker Partnerships
                </p>
                <p className="text-sm text-gray-600">
                  Reliable regional lending support
                </p>
              </div>

              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-primary">
                  Private Investment Lending
                </p>
                <p className="text-sm text-gray-600">
                  Strategic opportunities for investors
                </p>
              </div>
            </div>
            <div className="max-w-64 pt-4">
              <Button label="See Our Services" href="/services" primary />
            </div>
          </div>
        </div>
      </section>

      {/** Google Reviews Section -- eventually */}
    </div>
  );
}
