import Image from "next/image";
import Button from "../components/Button";
import InvestorBadge from "../components/InvestorBadge";
import InvestorProcess from "../components/InvestorProcess";
import { CHART_ICON, HOME_ICON, NEWS_ICON, USERS_ICON } from "@/utils/icons";

export const metadata = {
  title: "Investors",
  description:
    "Invest with Olympia Mortgage Group, a Niagara-based private lender offering secure, asset-backed opportunities in residential real estate with consistent returns and experienced management.",
};

export default function Investors() {
  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col gap-8 w-3/5 max-w-7xl mt-32 mx-auto">
        <h1 className="text-5xl text-primary font-heading font-semibold">
          Investors
        </h1>
        <span className="w-1/8 h-1 bg-accent" />
        <p className="w-4/5 text-xl">
          75-100 words about your business goes here. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nunc fermentum lacinia sem, vitae
          auctor urna pellentesque eget. Integer maximus sem feugiat hendrerit
          finibus. Aliquam commodo, mi nec condimentum pharetra, justo purus
          gravida enim, efficitur imperdiet orci ipsum vitae tortor. Aenean sit
          amet dui at orci vestibulum fringilla et at neque. Mauris quis justo
          faucibus, blandit lectus ut, imperdiet dolor. Nunc lobortis lorem et
          eros bibendum cursus. Sed arcu urna, bibendum in mauris ut, egestas
          rutrum nunc. Mauris ac porttitor ipsum. Maecenas vel quam eget turpis
          dapibus sodales rhoncus sed felis.
        </p>
        <div className="w-48">
          <Button label="Get Started" href="/contact" primary />
        </div>
      </section>
      <section className="flex justify-center w-full bg-primary mt-32 py-16">
        <div className="grid grid-cols-3 gap-12 w-4/5 max-w-7xl">
          <InvestorBadge
            icon={<CHART_ICON strokeColour="#c19d55" className="size-20" />}
            header="REASON 1"
            text={"Delivering more than a decade of reliable returns."}
          />
          <InvestorBadge
            icon={<HOME_ICON strokeColour="#c19d55" className="size-20" />}
            header="REASON 2"
            text={
              "Hundreds of contacts through life-long residence in Niagara."
            }
          />
          <InvestorBadge
            icon={<USERS_ICON strokeColour="#c19d55" className="size-20" />}
            header="REASON 3"
            text={
              "Over 40 years of combined experience in residential real estate."
            }
          />
        </div>
      </section>
      <span className="w-full h-2 bg-accent" />
      <section className="relative flex flex-col justify-center items-center w-full min-h-[80vh]">
        <Image
          src="/assets/investor-hero.png"
          alt="Investor Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 from-30% to-primary" />
        <div className="relative flex items-center w-full max-w-7xl h-full mt-16 px-12 py-24">
          <div className="grid grid-cols-5 gap-16">
            <div className="col-span-2 flex flex-col gap-6 w-full">
              <h2 className="text-5xl text-gray-100 font-heading font-bold">
                How It Works
              </h2>
              <span className="w-1/3 h-1 bg-accent" />
              <p className="text-xl text-gray-100 font-semibold">
                Here is where you'd place a step-by-step process in how your
                process works. This paragraph represents a brief description,
                roughly 50 words, to give a simple overview on what that process
                is.
              </p>
            </div>
            <div className="col-span-3 flex flex-col w-full text-lg">
              <ul className="flex flex-col gap-8 ml-auto">
                <li>
                  <InvestorProcess
                    number="1"
                    icon={<NEWS_ICON className="size-16" />}
                    heading="HEADER 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet arcu non mauris laoreet aliquet. Cras et sagittis metus. Nunc elementum lacus sit amet dolor scelerisque, non finibus diam pharetra. Pellentesque tristique turpis risus. Vestibulum porta lacus id tempor scelerisque. Nam vehicula condimentum tellus sed tempus. Lorem ipsum dolor sit."
                  />
                </li>
                <li>
                  <InvestorProcess
                    number="2"
                    icon={<CHART_ICON className="size-16" />}
                    heading="HEADER 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet arcu non mauris laoreet aliquet. Cras et sagittis metus. Nunc elementum lacus sit amet dolor scelerisque, non finibus diam pharetra. Pellentesque tristique turpis risus. Vestibulum porta lacus id tempor scelerisque. Nam vehicula condimentum tellus sed tempus. Lorem ipsum dolor sit."
                  />
                </li>
                <li>
                  <InvestorProcess
                    number="3"
                    icon={<HOME_ICON className="size-16" />}
                    heading="HEADER 3"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet arcu non mauris laoreet aliquet. Cras et sagittis metus. Nunc elementum lacus sit amet dolor scelerisque, non finibus diam pharetra. Pellentesque tristique turpis risus. Vestibulum porta lacus id tempor scelerisque. Nam vehicula condimentum tellus sed tempus. Lorem ipsum dolor sit."
                  />
                </li>
                <li>
                  <InvestorProcess
                    number="4"
                    icon={<USERS_ICON className="size-16" />}
                    heading="HEADER 4"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet arcu non mauris laoreet aliquet. Cras et sagittis metus. Nunc elementum lacus sit amet dolor scelerisque, non finibus diam pharetra. Pellentesque tristique turpis risus. Vestibulum porta lacus id tempor scelerisque. Nam vehicula condimentum tellus sed tempus. Lorem ipsum dolor sit."
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <span className="w-full h-2 bg-accent" />
      <section className="grid grid-cols-2 w-full min-h-[50vh]">
        <div className="relative w-full h-full">
          <Image
            src={"/assets/investor-bottom.png"}
            alt="Generic Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 justify-center w-full max-w-7xl px-16 py-8">
          <div className="flex flex-col gap-2">
            <h5 className="text-xl text-accent font-heading font-semibold">
              Let's Build Together
            </h5>
            <h3 className="text-5xl text-primary font-heading font-semibold">
              A trusted partner for your investment goals.
            </h3>
          </div>
          <span className="w-1/6 h-1 bg-accent" />
          <p className="w-1/2 text-xl">
            Just a quick 50-75 words to encourage people to invest with you. The
            photo, headings, text, will all be changed with content from you
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            laoreet arcu non mauris laoreet aliquet. Cras et sagittis metus.
            Nunc elementum lacus sit amet dolor scelerisque, non finibus diam
            pharetra.
          </p>
          <div className="w-[250px]">
            <Button label="Contact Our Team" href="/contact" primary arrow />
          </div>
        </div>
      </section>
    </div>
  );
}
