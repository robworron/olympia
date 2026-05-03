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
      <section className="relative flex justify-center w-full h-[70vh] md:h-[60vh] mb-8 md:mb-0 overflow-hidden">
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
              75-100 words about your business goes here. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nunc fermentum lacinia sem,
              vitae auctor urna pellentesque eget. Integer maximus sem feugiat
              hendrerit finibus. Aliquam commodo, mi nec condimentum pharetra,
              justo purus gravida enim, efficitur imperdiet orci ipsum vitae
              tortor. Aenean sit amet dui at orci vestibulum fringilla et at
              neque. Mauris quis justo faucibus, blandit lectus ut, imperdiet
              dolor. Nunc lobortis lorem et eros bibendum cursus. Sed arcu urna,
              bibendum in mauris ut, egestas rutrum nunc. Mauris ac porttitor
              ipsum. Maecenas vel quam eget turpis dapibus sodales rhoncus sed
              felis.
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
        <div className="hidden md:flex absolute inset-0 z-10 bg-gradient-to-r from-white from-40% to-white/20 to-70%" />
      </section>
      <div className="w-full h-2 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />
      <section className="flex flex-col items-center w-full my-12 md:my-24 px-4 md:px-8">
        <div className="flex flex-col gap-2 items-center w-full lg:w-4xl mb-12 text-center">
          <h4 className="text-xl lg:text-2xl text-accent font-heading">
            Our Founders
          </h4>
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            The People Behind Olympia
          </h2>
          <p className="mb-4 text-lg lg:text-xl">
            With a shared passion for helping clients achieve homeownership, out
            founders bring expertise, integrity, and personal touch to every
            mortgage journey.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-8 justify-center w-full">
          <div className="w-full xl:w-1/2 max-w-[1000px] h-full border-1 border-gray-200 rounded-3xl shadow-xl overflow-hidden">
            <FounderCard
              name="Justin Domanico"
              jobTitle="Mortgage Broker"
              description="75-150 words on who you are, what you do, your specializations,
            credentials, and experience. I can add social media links, add contact info, and/or modify the bottom section of this card however you please. I just chose arbitrary numbers and job titles for filler - again changed to your wants. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Curabitur placerat ultrices
            massa, et tempor eros rutrum tristique. Praesent feugiat egestas
            ultrices. Quisque ut feugiat urna. Nam volutpat, est a ultrices
            varius, augue felis gravida lectus, vitae auctor lectus elit a
            massa. Quisque posuere diam sit amet pulvinar rutrum."
              quickFacts={[
                "10+ Years Experience",
                "50+ Lenders",
                "300+ Families Helped",
              ]}
              quickIcons={[
                <HOME_ICON className="size-6 md:size-8 lg:size-6" />,
                <TROPHY_ICON className="size-6 md:size-8 lg:size-6" />,
                <USERS_ICON className="size-6 md:size-8 lg:size-6" />,
              ]}
              contact="hello@hello.com"
              imgSrc="/assets/about-headshot-r.png"
              imgAlt="Image of Justin Domanico"
            />
          </div>
          <div className="w-full xl:w-1/2 max-w-[1000px] h-full border-1 border-gray-200 rounded-3xl shadow-xl overflow-hidden">
            <FounderCard
              name="George Bahdi"
              jobTitle="Realtor"
              description="75-150 words on who you are, what you do, your specializations,
            credentials, and experience. I can add social media links, add contact info, and/or modify the bottom section of this card however you please. I just chose arbitrary numbers and job titles for filler - again changed to your wants. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Curabitur placerat ultrices
            massa, et tempor eros rutrum tristique. Praesent feugiat egestas
            ultrices. Quisque ut feugiat urna. Nam volutpat, est a ultrices
            varius, augue felis gravida lectus, vitae auctor lectus elit a
            massa. Quisque posuere diam sit amet pulvinar rutrum."
              quickFacts={[
                "35+ Years Experience",
                "300+ Homes Built",
                "Hundreds of Contracting Contacts",
              ]}
              quickIcons={[
                <HOME_ICON className="size-6 md:size-8 lg:size-6" />,
                <TROPHY_ICON className="size-6 md:size-8 lg:size-6" />,
                <USERS_ICON className="size-6 md:size-8 lg:size-6" />,
              ]}
              contact="hello@hello.com"
              imgSrc="/assets/about-headshot.png"
              imgAlt="Image of Justin Domanico"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
