import Image from "next/image";
import FounderCard from "../components/FounderCard";

export const metadata = {
  title: "About",
  description:
    "Learn more about Niagara's most trusted financial lending service, Olympia Mortgage Group specializes in residential financing offering competitive rates.",
};

const HOME = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

const TROPHY = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
    />
  </svg>
);

const USERS = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    />
  </svg>
);

export default function About() {
  return (
    <div>
      <section className="relative flex justify-center w-full h-[60vh] overflow-hidden">
        <div className="relative flex w-full h-full">
          <div className="z-20 flex flex-col justify-center gap-4 w-2/5 h-full p-12 pl-24">
            <div className="w-full">
              <h1 className="text-5xl text-primary font-heading font-bold">
                About Olympia
              </h1>
              <h4 className="text-2xl text-accent font-heading font-semibold opacity-70">
                Credibility Through Experience
              </h4>
            </div>
            <p className="text-lg">
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
          <div className="relative w-3/5 h-full">
            <Image
              src="/assets/about.png"
              alt="About image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-white from-40% to-white/20 to-70%" />
      </section>
      <section className="flex flex-col items-center w-full mt-24 px-8">
        <div className="flex flex-col gap-2 items-center w-1/3 min-w-[1000px] mb-12 text-center">
          <h4 className="text-2xl text-accent font-heading">Our Founders</h4>
          <h2 className="mb-4 text-5xl font-heading font-bold">
            The People Behind Olympia
          </h2>
          <p className="mb-4 text-xl">
            With a shared passion for helping clients achieve homeownership, out
            founders bring expertise, integrity, and personal touch to every
            mortgage journey.
          </p>
        </div>
        <div className="flex gap-8 justify-center w-full">
          <div className="w-1/2 max-w-[1000px] h-full border-1 border-gray-200 rounded-3xl shadow-xl overflow-hidden">
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
              quickIcons={[HOME, TROPHY, USERS]}
              contact="hello@hello.com"
              imgSrc="/assets/about-headshot-r.png"
              imgAlt="Image of Justin Domanico"
            />
          </div>
          <div className="w-1/2 max-w-[1000px] h-full border-1 border-gray-200 rounded-3xl shadow-xl overflow-hidden">
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
              quickIcons={[HOME, TROPHY, USERS]}
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
