import Image from "next/image";
import BrokerBadge from "../components/BrokerBadge";
import Button from "../components/Button";
import { HANDSHAKE_ICON, PIN_ICON, USERS_ICON } from "@/utils/icons";

export const metadata = {
  title: "Brokers",
  description:
    "Niagara mortgage brokers trust Olympia Mortgage Group for fast approvals, flexible private lending solutions, and dependable funding for residential real estate and construction projects.",
};

export default function Brokers() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* HERO SECTION*/}
      <section className="relative flex w-full h-[50vh] shadow-xl">
        <div className="absolute z-10 [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] w-[55.1%] h-[99.9%] md:bg-accent" />
        <div className="absolute z-10 [clip-path:polygon(0_0,100%_10%,20%_100%,0_100%)] md:[clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] w-[59%] h-full bg-white/20" />
        <div className="absolute z-20 md:[clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] flex flex-col justify-center w-full md:w-[55%] h-full px-4 md:px-16 md:bg-white">
          <h1 className="text-3xl lg:text-4xl xl:text-6xl text-primary font-heading font-bold">
            Local Expertise.
          </h1>
          <h1 className="text-3xl lg:text-4xl xl:text-6xl text-primary font-heading font-bold">
            Lasting Impact.
          </h1>
          <div className="w-1/4 lg:w-1/10 h-2 my-6 bg-accent" />
          <div className="flex flex-col gap-1 lg:text-lg xl:text-xl">
            <p className="w-full md:w-7/8 xl:w-3/4 max-w-3xl">
              50-75 words on what you want your brokers to know and how you will
              help them. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Mauris fringilla libero mauris, eu feugiat felis auctor sit
              amet. Quisque rhoncus facilisis imperdiet. Donec sollicitudin
              felis sed turpis pharetra, et pharetra ex malesuada. Sed eleifend
              sit amet tellus et hendrerit. In interdum, magna quis ullamcorper
              mollis, orci urna viverra erat, at pretium neque odio in leo. Duis
              nunc arcu, mollis varius ipsum vitae, bibendum sodales turpis.
            </p>
          </div>
          <div className="w-1/2 lg:w-1/3 xl:w-1/5 mt-10">
            <Button label="CONTACT" primary />
          </div>
        </div>
        <div className="absolute right-0 w-full lg:w-[55%] h-full">
          <Image
            src="/assets/brokers-hero.png"
            alt="temp"
            fill
            className="object-cover md:[clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)] opacity-40 md:opacity-100"
          />
        </div>
      </section>

      {/* BADGE SECTION*/}
      <section className="flex justify-center w-full mx-auto px-4 md:px-12 py-8 md:py-24 my-12 md:my-0">
        <div className="flex flex-col gap-4 items-center w-full max-w-7xl">
          <div className="flex justify-center items-center gap-4 w-full">
            <span className="w-1/8 md:w-1/10 h-1 bg-accent" />
            <h3 className="text-lg text-accent font-bold">BUILT FOR BROKERS</h3>
            <span className="w-1/8 md:w-1/10 h-1 bg-accent" />
          </div>
          <h4 className="text-2xl md:text-4xl text-primary text-center md:text-left font-heading font-semibold">
            SUPPORT. SOLUTIONS. SUCCESS.
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 w-full mt-4 md:mt-8 px-4">
            <BrokerBadge
              icon={<PIN_ICON className="size-12" />}
              header="ADVANTAGE 1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet arcu non mauris laoreet aliquet. Cras et sagittis metus."
            />
            <BrokerBadge
              icon={<HANDSHAKE_ICON className="size-12" />}
              header="ADVANTAGE 2"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet arcu non mauris laoreet aliquet. Cras et sagittis metus."
            />
            <BrokerBadge
              icon={<USERS_ICON className="size-12" />}
              header="ADVANTAGE 3"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet arcu non mauris laoreet aliquet. Cras et sagittis metus."
            />
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION*/}
      <section className="flex flex-col md:flex-row w-full bg-primary h-[70vh] md:h-[50vh]">
        <div className="relative flex-1 h-full">
          <Image
            src={"/assets/brokers-bottom.png"}
            alt="Generic Photo"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 md:gap-4 justify-center text-white px-4 md:px-8 xl:px-24 py-12">
          <h3 className="text-lg md:text-2xl text-accent font-semibold">
            OUR MISSION
          </h3>
          <h4 className="text-xl md:text-4xl font-heading font-semibold">
            Rooted in our community.
          </h4>
          <h4 className="text-xl md:text-4xl font-heading font-semibold">
            Invested in your future.
          </h4>
          <div className="w-10 h-1 bg-accent" />
          <p className="max-w-2xl md:text-xl">
            Olympia Mortgage Group is a proud partner to brokers across the
            region, delivering local service, innovative solutions, and lasting
            relationships.
          </p>
          <div className="relative w-24 h-24">
            <Image
              src="/assets/graphic-white.png"
              alt="temp"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <div className="w-full h-2 bg-accent" />
      <section className="flex w-full justify-center"></section>
    </div>
  );
}
