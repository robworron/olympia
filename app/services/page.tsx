import Image from "next/image";
import ServiceCard from "../components/ServiceCard";
import { CHART_ICON, HOME_ICON, TOOLS_ICON } from "@/utils/icons";
import Button from "../components/Button";

export const metadata = {
  title: "Services",
  description:
    "Explore residential lending services from Olympia Mortgage Group in Niagara, including private mortgages, construction financing, and flexible solutions for brokers, investors, and borrowers.",
};

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative flex w-full h-[50vh]">
        <div className="z-10 absolute w-full h-full bg-gradient-to-r from-primary/70 md:from-primary md:from-50% to-primary/85 md:to-white/40 md:to-75%" />
        <div className="z-20 flex-1 flex justify-center items-center w-full h-full">
          <div className="flex flex-col gap-12 p-4 md:p-0 md:ml-4 xl:ml-0">
            <div className="flex flex-col gap-4 w-full max-w-2xl">
              <h1 className="text-xl lg:text-2xl text-accent font-heading font-bold">
                Our Services
              </h1>
              <span className="w-1/8 h-1 bg-accent" />
              <h2 className="text-3xl md:text-4xl lg:text-6xl text-white font-heading font-semibold">
                Lending solutions built for Niagara.
              </h2>
            </div>
            <p className="w-full max-w-md text-lg md:text-xl text-white">
              ~ 50-75 words on your services goes here. We provide flexible,
              reliable financing for residential projects of all sizes. With
              deep local insight and a relationship-first approach, we help our
              communities grow stronger.
            </p>
          </div>
        </div>
        <div className="absolute md:relative flex-1 w-full h-full">
          <Image
            src="/assets/services-hero.png"
            alt="temp"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <div className="w-full h-2 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

      {/* HOW WE HELP SECTION */}
      <section className="flex justify-center w-full min-h-[80vh]">
        <div className="flex flex-col w-full max-w-7xl my-10 md:my-20 px-4 md:px-12 py-4 md:py-8">
          <div className="flex flex-col gap-4 md:gap-8 items-center">
            <h2 className="text-3xl md:text-5xl text-primary font-heading font-bold">
              How We Help
            </h2>
            <span className="w-1/4 md:w-1/8 h-1 bg-accent" />
            <p className="max-w-2xl text-lg md:text-xl text-primary text-center">
              From home purchases to ground-up construction, we offer financing
              solutions designed to meet the needs of homeowners, builders, and
              investors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
              <ServiceCard
                header="SERVICE 1"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          bibendum ac mauris a ultrices. Vivamus pulvinar tortor euismod,
          consectetur mauris ac, dictum enim. Nunc id libero pellentesque lectus
          ultrices suscipit."
                imageSrc="/assets/services1.png"
                icon={
                  <HOME_ICON
                    className="size-6 md:size-8"
                    strokeColour="#c19d55"
                  />
                }
              />
              <ServiceCard
                header="SERVICE 2"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          bibendum ac mauris a ultrices. Vivamus pulvinar tortor euismod,
          consectetur mauris ac, dictum enim. Nunc id libero pellentesque lectus
          ultrices suscipit."
                imageSrc="/assets/services2.png"
                icon={
                  <TOOLS_ICON
                    className="size-6 md:size-8"
                    strokeColour="#c19d55"
                  />
                }
              />
              <ServiceCard
                header="SERVICE 3"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          bibendum ac mauris a ultrices. Vivamus pulvinar tortor euismod,
          consectetur mauris ac, dictum enim. Nunc id libero pellentesque lectus
          ultrices suscipit."
                imageSrc="/assets/services3.png"
                icon={
                  <CHART_ICON
                    className="size-6 md:size-8"
                    strokeColour="#c19d55"
                  />
                }
              />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
      </section>
      <div className="w-full h-2 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />
      <section className="flex justify-center w-full">
        <div className="flex w-full max-w-7xl items-center my-10 lg:my-0 px-4 md:px-8 gap-12">
          <div className="hidden lg:flex relative flex-1 md:h-96">
            <Image
              src="/assets/logo.png"
              alt="temp"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-4 flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col px-0 lg:px-10">
              <h4 className="text-2xl md:text-4xl font-semibold">
                Local insight. Trusted relationships. Stronger communities.
              </h4>
              <p className="mt-2 text-gray-600">
                We're more than a lender - we're a partner invested in the
                places we call home.
              </p>
            </div>
            <div className="w-4xs md:w-xs">
              <Button label="Contact" href="/contact" primary arrow />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
