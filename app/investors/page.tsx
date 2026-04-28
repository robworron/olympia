import Image from "next/image";
import Badge from "../components/Badge";
import Button from "../components/Button";
import InvestorProcess from "../components/InvestorProcess";

export const metadata = {
  title: "Investors",
  description:
    "Invest in Niagara real estate with Olympia Mortgage Group. Access secure residential mortgage opportunities, consistent returns, and trusted local expertise.",
};

const CHART = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke="#c19d55"
    className="w-24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
    />
  </svg>
);

const HOME = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke="#c19d55"
    className="w-24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

const NEWS = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#1d2c48"
    viewBox="-6 -6 36 36"
    strokeWidth={1}
    stroke="white"
    className="w-full bg-primary rounded-full"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
    />
  </svg>
);

const USERS = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke="#c19d55"
    className="w-24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    />
  </svg>
);

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
          <Badge
            icon={CHART}
            header={"Dependable Results"}
            text={"Delivering more than a decade of reliable returns."}
          />
          <Badge
            icon={HOME}
            header={"Local Market Expertise"}
            text={
              "Hundreds of contacts through life-long residence in Niagara."
            }
          />
          <Badge
            icon={USERS}
            header={"Experienced Team"}
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
                    icon={NEWS}
                    heading="HEADER 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet arcu non mauris laoreet aliquet. Cras et sagittis metus. Nunc elementum lacus sit amet dolor scelerisque, non finibus diam pharetra. Pellentesque tristique turpis risus. Vestibulum porta lacus id tempor scelerisque. Nam vehicula condimentum tellus sed tempus. Lorem ipsum dolor sit."
                  />
                </li>
                <li>
                  <InvestorProcess
                    number="2"
                    icon={NEWS}
                    heading="HEADER 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet arcu non mauris laoreet aliquet. Cras et sagittis metus. Nunc elementum lacus sit amet dolor scelerisque, non finibus diam pharetra. Pellentesque tristique turpis risus. Vestibulum porta lacus id tempor scelerisque. Nam vehicula condimentum tellus sed tempus. Lorem ipsum dolor sit."
                  />
                </li>
                <li>
                  <InvestorProcess
                    number="3"
                    icon={NEWS}
                    heading="HEADER 3"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet arcu non mauris laoreet aliquet. Cras et sagittis metus. Nunc elementum lacus sit amet dolor scelerisque, non finibus diam pharetra. Pellentesque tristique turpis risus. Vestibulum porta lacus id tempor scelerisque. Nam vehicula condimentum tellus sed tempus. Lorem ipsum dolor sit."
                  />
                </li>
                <li>
                  <InvestorProcess
                    number="4"
                    icon={NEWS}
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
