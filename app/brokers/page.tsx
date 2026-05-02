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
      <section className="relative flex w-full h-[50vh] shadow-xl">
        <div className="absolute z-10 [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] w-[55.1%] h-[99.9%] bg-accent" />
        <div className="absolute z-10 [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] w-[59%] h-full bg-white/20" />
        <div className="absolute z-20 [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] flex flex-col justify-center w-[55%] h-full px-16 bg-white">
          <h1 className="text-6xl text-primary font-heading font-bold">
            Local Expertise.
          </h1>
          <h1 className="text-6xl text-primary font-heading font-bold">
            Lasting Impact.
          </h1>
          <div className="w-1/10 h-2 my-6 bg-accent" />
          <div className="flex flex-col gap-1 text-xl">
            <p className="w-2/3 max-w-3xl">
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
          <div className="w-1/5 mt-10">
            <Button label="CONTACT" primary />
          </div>
        </div>
        <div className="absolute right-0 w-[55%] h-full">
          <Image
            src="/assets/brokers-hero.png"
            alt="temp"
            fill
            className="object-cover  [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)]"
          />
        </div>
      </section>
      <section className="flex justify-center w-full mx-auto px-12 py-24">
        <div className="flex flex-col gap-4 items-center w-full max-w-7xl">
          <div className="flex justify-center items-center gap-4 w-full">
            <span className="w-1/10 h-1 bg-accent" />
            <h3 className="text-lg text-accent font-bold">BUILT FOR BROKERS</h3>
            <span className="w-1/10 h-1 bg-accent" />
          </div>
          <h4 className="text-4xl text-primary font-heading font-semibold">
            SUPPORT. SOLUTIONS. SUCCESS.
          </h4>
          <div className="grid grid-cols-3 gap-12 w-full mt-8 px-4">
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
      <section className="flex w-full bg-primary h-[50vh]">
        <div className="flex-1 relative">
          <Image
            src={"/assets/brokers-bottom.png"}
            alt="Generic Photo"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-center text-white px-24 py-12">
          <h3 className="text-2xl text-accent font-semibold">OUR MISSION</h3>
          <h4 className="text-4xl font-heading font-semibold">
            Rooted in our community.
          </h4>
          <h4 className="text-4xl font-heading font-semibold">
            Invested in your future.
          </h4>
          <div className="w-10 h-1 bg-accent" />
          <p className="max-w-2xl text-xl">
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
