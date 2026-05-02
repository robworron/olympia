import Image from "next/image";
import ContactForm from "../components/ContactForm";
import { CLOCK_ICON, EMAIL_ICON, PHONE_ICON, PIN_ICON } from "@/utils/icons";
import Button from "../components/Button";

export const metadata = {
  title: "Contact",
  description:
    "Contact Olympia Mortgage Group in Niagara for private lending solutions, mortgage inquiries, or investment opportunities. Speak directly with our team for fast, reliable support.",
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center w-full">
      <section className="relative flex w-full h-[70vh] mx-12">
        <div className="z-10 absolute inset-0 w-4/5 bg-gradient-to-br from-white from-40% to-transparent to-50% [clip-path:polygon(0_0,100%_0,60%_100%,0_100%)]" />
        <div className="z-10 absolute inset-0 w-4/5 bg-gradient-to-r from-white from-50% to-transparent to-60% [clip-path:polygon(0_0,100%_0,60%_100%,0_100%)]" />
        <div className="z-20 flex-1 flex justify-end items-center max-w-4xl px-12">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="text-3xl text-accent font-heading font-semibold">
              Contact Us
            </h1>
            <h2 className="text-6xl text-primary font-heading font-bold">
              Let's Work Together.
            </h2>
            <span className="w-1/8 h-1 bg-accent" />
            <p className="text-2xl text-primary">
              We're here to help you navigate any of your financial needs. Reach
              out today and let's build together.
            </p>
          </div>
        </div>
        <div className="relative flex-2 h-full">
          <Image
            src="/assets/contact-hero.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
      <section className="relative z-20 flex w-full h-[60vh] bg-transparent -mt-8">
        <div className="flex-1 flex justify-center bg-white px-8 py-16 rounded-4xl border-2 border-gray-200 shadow-2xl">
          <div className="flex flex-col gap-8 justify-center w-full max-w-3xl">
            <h3 className="w-full text-4xl text-primary font-heading font-semibold">
              Send Us a Message
            </h3>
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="relative flex-1 bg-gray-200 p-8 rounded-4xl border-2 border-gray-200 shadow-2xl">
          <div className="absolute bottom-1/5 right-1/5 w-72 h-72">
            <Image
              src="/assets/graphic.png"
              alt="temp"
              fill
              className="object-cover opacity-5"
            />
          </div>
          <div className="flex flex-col gap-8 px-8 py-16">
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl text-primary font-heading font-semibold">
                We're Local.
              </h3>
              <h3 className="text-4xl text-primary font-heading font-semibold">
                We're Here for You.
              </h3>
            </div>
            <span className="w-1/6 h-1 bg-accent" />
            <p className="w-1/2 min-w-lg text-xl">
              As local home professionals, we understand our community and the
              homes that make it special.
            </p>
            <ul className="flex flex-col gap-4 text-xl">
              <li className="flex gap-4">
                <PIN_ICON strokeColour="#c19d55" />
                <div className="flex flex-col">
                  <p>123 Olympia Pl.</p>
                  <p>Niagara Falls, ON</p>
                  <p>A1A 1A1</p>
                </div>
              </li>
              <li className="flex gap-4">
                <PHONE_ICON strokeColour="#c19d55" />
                <p>(905) 123-4567</p>
              </li>
              <li className="flex gap-4">
                <EMAIL_ICON strokeColour="#c19d55" />
                <p>olympia@olympia.ca</p>
              </li>
              <li className="flex gap-4">
                <CLOCK_ICON strokeColour="#c19d55" />
                <div>
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-48 h-48">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full text-primary"
          >
            <path
              d="M50 0 Q75 50 100 50 Q75 50 50 100 Q25 50 0 50 Q25 50 50 0 Z"
              fill="currentColor"
            />
          </svg>
          <div className="relative flex justify-center items-center w-full h-full">
            <div className="relative w-20 h-20">
              <Image
                src="/assets/graphic-white.png"
                alt="temp"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full h-[50vh]">
        <div className="flex-2 flex justify-center items-center py-8 bg-primary">
          <div className="flex flex-col gap-8 w-3/4 max-w-3xl text-white">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-heading font-semibold">
                Your Home.
              </h3>
              <h3 className="text-3xl text-accent font-heading font-semibold">
                Our Community.
              </h3>
            </div>
            <div className="w-1/8 h-1 bg-accent" />
            <p className="w-full max-w-md text-xl">
              We specialize in helping families across Niagara acheive their
              real estate goals with local expertise and personalized service.
            </p>
            <div className="w-full max-w-72 min-w-48">
              <Button label="Learn More About Us" href="/about" arrow />
            </div>
          </div>
        </div>
        <div className="relative flex-3 flex items-center h-full bg-primary">
          <Image
            src="/assets/contact-bottom.png"
            alt="temp"
            fill
            className="object-cover rounded-l-[10rem]"
          />
        </div>
      </section>
      <div className="w-full h-2 bg-accent" />
    </div>
  );
}
