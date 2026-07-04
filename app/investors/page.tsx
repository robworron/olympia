import Image from "next/image";
import Button from "../components/Button";
import InvestorBadge from "../components/InvestorBadge";
import InvestorProcess from "../components/InvestorProcess";
import {
  CHART_ICON,
  HANDSHAKE_ICON,
  HOME_ICON,
  NEWS_ICON,
  USERS_ICON,
} from "@/utils/icons";

export const metadata = {
  title: "Investors",
  description:
    "Invest with Olympia Mortgage Group, a Niagara-based private lender offering secure, asset-backed opportunities in residential real estate with consistent returns and experienced management.",
};

export default function Investors() {
  return (
    <div className="flex flex-col w-full">
      {/** HERO SECTION */}
      <section className="flex flex-col items-center md:items-start gap-4 md:gap-8 w-full lg:w-4/5 xl:w-3/5 max-w-7xl p-4 lg:p-0 mt-12 lg:mt-24 xl:mt-32 lg:mx-auto">
        <h1 className="text-4xl md:text-5xl text-primary font-heading font-semibold">
          Investors
        </h1>
        <span className="w-1/4 md:w-1/8 h-1 bg-accent" />
        <p className="w-full xl:w-4/5 text-lg md:text-xl text-center md:text-start">
          {
            "Olympia Mortgage Group Inc. is a licensed mortgage administrator that presents private mortgage opportunities to individual investors on a deal-by-deal basis. Investors can review each opportunity and choose whether it fits their goals, risk tolerance, and investment preferences. Olympia administers the mortgage by coordinating payment collection, investor distributions, renewals, and ongoing servicing. Opportunities typically target annual returns in the range of 9% - 15%, depending on the structure and risk profile of the loan. Where available, select opportunities may also include co-investment alongside Olympia's principals."
          }
        </p>
        <div className="w-48">
          <Button label="Get Started" href="/contact" primary />
        </div>
      </section>

      {/** REASONS SECTION */}
      <section className="flex justify-center w-full bg-primary mt-12 md:mt-32 px-4 md:px-0 py-8 md:py-16">
        <div className="grid grid-cols-3 gap-4 md:gap-12 w-full md:w-4/5 max-w-7xl">
          <InvestorBadge
            icon={
              <USERS_ICON
                strokeColour="#c19d55"
                className="size-12 md:size-20"
              />
            }
            header="Deal-by-Deal Transparency"
            text={
              "Investors review individual opportunities and choose whether to participate based on the details of each file."
            }
          />
          <InvestorBadge
            icon={
              <CHART_ICON
                strokeColour="#c19d55"
                className="size-12 md:size-20"
              />
            }
            header="Real Estate-Backed Security"
            text={
              "Opportunities are secured by registered mortgages on real property and reviewed with a focus on loan-to-value, exit strategy, and borrower profile."
            }
          />
          <InvestorBadge
            icon={
              <HOME_ICON
                strokeColour="#c19d55"
                className="size-12 md:size-20"
              />
            }
            header="Construction Expertise"
            text={
              "George Bahdi's 30+ years of building and development experience adds practical insight when reviewing construction, renovation, and development-related files."
            }
          />
        </div>
      </section>
      <span className="w-full h-2 bg-accent" />

      {/** HOW IT WORKS SECTION */}
      <section className="relative flex flex-col justify-center items-center w-full h-[30vh] min-h-87 md:h-auto md:min-h-[80vh]">
        <div className="absolute w-full h-full">
          <Image
            src="/assets/investor-hero.png"
            alt="Investor Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-linear-to-b from-primary/60 from-30% to-primary" />
        <div className="relative flex items-center w-full max-w-7xl h-full md:mt-16 px-4 md:px-12 py-8 md:py-24">
          <div className="grid grid-cols-5 gap-4 lg:gap-16">
            <div className="col-span-5 md:col-span-2 flex flex-col gap-6 w-full">
              <h2 className="text-3xl md:text-5xl text-gray-100 font-heading font-bold">
                How It Works
              </h2>
              <span className="w-1/3 h-1 bg-accent" />
            </div>
            {/** FOR TABLET AND DESKTOP (MD+ SCREENS) */}
            <div className="hidden md:flex flex-col col-span-3 w-full text-lg">
              <ul className="flex flex-col gap-8 ml-auto">
                <li>
                  <InvestorProcess
                    number="1"
                    icon={<HANDSHAKE_ICON className="size-12 lg:size-16" />}
                    heading="Initial Consultation & Onboarding"
                    description="We begin with a conversation to understand your investment goals, preferences, risk tolerance, and desired level of participation. Investors then complete the required onboarding forms so Olympia can present suitable opportunities when available."
                  />
                </li>
                <li>
                  <InvestorProcess
                    number="2"
                    icon={<NEWS_ICON className="size-12 lg:size-16" />}
                    heading="Deal Review"
                    description="Olympia presents carefully reviewed lending opportunities that may align with your stated goals and preferences. Each opportunity includes key information such as loan amount, property details, security position, rate, term, exit strategy, and relevant risk considerations."
                  />
                </li>
                <li>
                  <InvestorProcess
                    number="3"
                    icon={<CHART_ICON className="size-12 lg:size-16" />}
                    heading="Funding & Administration"
                    description="All mortgage transactions are completed through a real estate lawyer and funded through trust. Once the mortgage is registered and funded, Olympia administers the loan, including payment collection, investor distributions, reporting, renewals, and discharge coordination."
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/** FOR MOBILE (SM SCREENS) */}
      <section>
        <div className="md:hidden flex flex-col col-span-3 w-full my-8 px-4 text-lg">
          <ul className="flex flex-col gap-4 ml-auto">
            <li>
              <InvestorProcess
                number="1"
                icon={<HANDSHAKE_ICON className="size-12 lg:size-16" />}
                heading="Initial Consultation & Onboarding"
                description="We begin with a conversation to understand your investment goals, preferences, risk tolerance, and desired level of participation. Investors then complete the required onboarding forms so Olympia can present suitable opportunities when available."
              />
            </li>
            <li>
              <InvestorProcess
                number="2"
                icon={<NEWS_ICON className="size-12 lg:size-16" />}
                heading="Deal Review"
                description="Olympia presents carefully reviewed lending opportunities that may align with your stated goals and preferences. Each opportunity includes key information such as loan amount, property details, security position, rate, term, exit strategy, and relevant risk considerations."
              />
            </li>
            <li>
              <InvestorProcess
                number="3"
                icon={<CHART_ICON className="size-12 lg:size-16" />}
                heading="Funding & Administration"
                description="All mortgage transactions are completed through a real estate lawyer and funded through trust. Once the mortgage is registered and funded, Olympia administers the loan, including payment collection, investor distributions, reporting, renewals, and discharge coordination."
              />
            </li>
          </ul>
        </div>
      </section>
      <span className="w-full h-2 bg-accent" />

      {/** BOTTOM SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[50vh] my-8 md:my-0">
        <div className="relative w-full h-[20vh] md:h-full">
          <Image
            src={"/assets/investor-bottom.png"}
            alt="Generic Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 lg:gap-8 justify-center items-center md:items-start w-full max-w-7xl px-4 md:px-8 lg:px-16 py-4 md:py-8 text-center md:text-start">
          <div className="flex flex-col gap-2">
            <h5 className="text-lg lg:text-xl text-accent font-heading font-semibold">
              {"Let's Build Together"}
            </h5>
            <h3 className="text-3xl lg:text-4xl xl:text-5xl text-primary font-heading font-semibold">
              A trusted partner for your investment goals.
            </h3>
          </div>
          <span className="w-1/4 xl:w-1/8 h-1 bg-accent" />
          <p className="w-full xl:w-1/2 text-lg lg:text-xl">
            {
              "Olympia focuses on private mortgage opportunities targeting annual returns typically in the range of 9% - 15%, depending on the specific deal structure and risk profile. Each opportunity is reviewed with a focus on real estate security, conservative underwriting, and capital preservation. George Bahdi's construction and development experience adds practical insight when assessing project-based lending opportunities."
            }
          </p>
          <div className="w-62">
            <Button label="Contact Our Team" href="/contact" primary arrow />
          </div>
        </div>
      </section>
    </div>
  );
}
