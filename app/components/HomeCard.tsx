import Image from "next/image";
import Button from "./Button";

type HomeCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
};

export default function HomeCard({
  title,
  description,
  imageSrc,
  href,
}: HomeCardProps) {
  return (
    <div className="relative md:flex-1 max-w-lg h-124 rounded-lg md:overflow-hidden transition-transform duration-300 hover:scale-105">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-20% to-primary to-70% rounded-lg" />
      <div className="absolute bottom-0 z-10 p-6 flex flex-col gap-4 text-white">
        <h2 className="text-2xl md:text-3xl font-bold font-heading">{title}</h2>
        <p className="text-base md:text-lg text-gray-200">{description}</p>
        <div className="w-32 mx-auto">
          <Button href={href} label="Learn More" />
        </div>
      </div>
    </div>
  );
}
