import Image from "next/image";
import FounderCard from "../components/FounderCard";
import { HOME_ICON, TROPHY_ICON, USERS_ICON } from "@/utils/icons";

export const metadata = {
  title: "About",
  description:
    "Learn more about Niagara's most trusted financial lending service, Olympia Mortgage Group specializes in residential financing offering competitive rates.",
};

export default function About() {
  return (
    <div>
      <section className="relative flex justify-center w-full h-[70vh] min-h-200 md:min-h-0 md:h-[60vh] mb-8 md:mb-0 overflow-hidden">
        <div className="relative flex flex-col-reverse md:flex-row w-full h-full">
          <div className="z-20 flex flex-col justify-center gap-4 w-full md:w-2/5 h-full p-4 xl:p-12 xl:pl-24">
            <div className="w-full">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl text-primary font-heading font-bold">
                About Olympia
              </h1>
              <h4 className="text-lg md:text-xl xl:text-2xl text-accent font-heading font-semibold opacity-70">
                Credibility Through Experience
              </h4>
            </div>
            <p className="text-base md:text-lg">
              Olympia Mortgage Group combines mortgage expertise with decades of
              real-world construction and lending experience. Co-founder Justin
              Domanico is a licensed Level 2 Mortgage Agent who has assisted
              hundreds of Niagara families with mortgage financing and has
              experience across a wide range of residential, private, and
              investment transactions. Co-founder George Bahdi brings over 30
              years of homebuilding and private lending experience in Niagara
              through Niagara Olympia Homes, an award-winning building company
              known for quality residential and multi-unit projects. Together,
              they bring a practical, disciplined approach to private mortgage
              lending.
            </p>
          </div>
          <div className="relative w-full md:w-3/5 h-full">
            <Image
              src="/assets/about.png"
              alt="About image"
              fill
              className="object-fill md:object-cover p-4 md:p-0"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute inset-0 z-10 bg-linear-to-r from-white from-40% to-white/20 to-70%" />
      </section>
      <div className="w-full h-2 bg-linear-to-r from-accent/20 via-accent to-accent/20" />
      <section className="flex flex-col items-center w-full my-12 md:my-24 px-4 md:px-8">
        <div className="flex flex-col gap-2 items-center w-full lg:w-4xl mb-12 text-center">
          <h4 className="text-xl lg:text-2xl text-accent font-heading">
            Our Founders
          </h4>
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            The People Behind Olympia
          </h2>
          <p className="mb-4 text-lg lg:text-xl">
            With a shared passion for helping clients achieve homeownership, our
            founders bring expertise, integrity, and personal touch to every
            mortgage journey.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-8 justify-center w-full">
          <div className="w-full xl:w-1/2 max-w-250 h-full border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
            <FounderCard
              name="Justin Domanico"
              jobTitle="Mortgage Broker"
              description="Justin Domanico is a licensed Level 2 Mortgage Agent in Ontario with experience across residential, private, and investment mortgage transactions. Through his mortgage career, Justin has assisted hundreds of Niagara families and developed a strong understanding of borrower needs, broker expectations, deal structuring, and underwriting. He is also a real estate investor, giving him a practical perspective on financing, property value, and long-term investment strategy. Within Olympia, Justin focuses on deal sourcing, underwriting, broker relationships, administration, and overall operational management."
              quickFacts={["50+ Lenders", "Top 10% Mortgage Volume Nationwide"]}
              quickIcons={[
                <USERS_ICON
                  key="users"
                  className="size-6 md:size-8 lg:size-6"
                />,
                <TROPHY_ICON
                  key="trophy"
                  className="size-6 md:size-8 lg:size-6"
                />,
              ]}
              imgSrc="/assets/about-headshot-r.png"
              imgAlt="Image of Justin Domanico"
            />
          </div>
          <div className="w-full xl:w-1/2 max-w-250 h-full border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
            <FounderCard
              name="George Bahdi"
              jobTitle="Homebuilder"
              description="George Bahdi brings over 30 years of experience in homebuilding, real estate development, and private lending in the Niagara Region. As the founder of Niagara Olympia Homes, an award-winning homebuilding company, George has been involved in a wide range of projects, from single-family residential homes to multi-unit developments. His hands-on construction experience allows Olympia to assess renovation, construction, and development files with a level of practical insight that many lenders cannot offer. Within Olympia, George provides strategic guidance, capital relationships, investor insight, and project-level expertise."
              quickFacts={["30+ Years Experience", "Award Winning Homebuilder"]}
              quickIcons={[
                <HOME_ICON key="home" className="size-6 md:size-8 lg:size-6" />,
                <TROPHY_ICON
                  key="trophy"
                  className="size-6 md:size-8 lg:size-6"
                />,
              ]}
              imgSrc="/assets/about-headshot.png"
              imgAlt="Image of George Bahdi"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
