import Image from "next/image";

type FounderCardProps = {
  name: string;
  jobTitle: string;
  description: string;
  quickFacts: string[];
  quickIcons: React.ReactNode[];
  contact?: string;
  imgSrc: string;
  imgAlt?: string;
};

export default function FounderCard({
  name,
  jobTitle,
  description,
  quickFacts,
  quickIcons,
  contact,
  imgSrc,
  imgAlt = "Founder Image",
}: FounderCardProps) {
  return (
    <article className="flex w-full">
      <div className="relative w-1/2 aspect-[2/3]">
        <Image src={imgSrc} alt={imgAlt} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-2 justify-center w-1/2 px-12">
        <h2 className="text-4xl text-primary font-heading font-bold">{name}</h2>
        <h4 className="text-2xl text-accent">{jobTitle}</h4>
        <span className="w-1/4 h-1 my-2 bg-accent" />
        <p className="text-lg">{description}</p>
        <span className="w-4/5 h-[0.5] mx-auto my-4 bg-gray-200" />
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2">
            <div>{quickIcons[0]}</div>
            <p>{quickFacts[0]}</p>
          </li>
          <li className="flex gap-2">
            <div>{quickIcons[1]}</div>
            <p>{quickFacts[1]}</p>
          </li>
          <li className="flex gap-2">
            <div>{quickIcons[2]}</div>
            <p>{quickFacts[2]}</p>
          </li>
        </ul>
      </div>
    </article>
  );
}
