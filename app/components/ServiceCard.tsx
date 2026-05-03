import Image from "next/image";

type ServiceCardProps = {
  header?: string;
  text?: string;
  imageSrc?: string;
  icon?: React.ReactNode;
};

export default function ServiceCard({
  header,
  text,
  imageSrc = "/assets/services1.png",
  icon,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-8 md:gap-16 w-full">
      <div className="relative w-full h-48 md:h-52 lg:h-72">
        <Image src={imageSrc} alt="temp" fill className="object-fill" />
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-12 md:w-16 h-12 md:h-16 bg-primary border-2 border-accent rounded-full">
          <div className="flex justify-center items-center w-full h-full">
            {icon}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center w-full">
        <h3 className="text-2xl text-primary text-center font-heading font-semibold">
          {header}
        </h3>
        <div className="w-1/6 h-1 bg-accent" />
        <p className="text-lg text-gray-600 text-center">{text}</p>
      </div>
    </div>
  );
}
