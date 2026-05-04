import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Button from "../components/Button";
import ContactInfo from "../components/ContactInfo";

export const metadata = {
  title: "Contact",
  description:
    "Contact Olympia Mortgage Group in Niagara for private lending solutions, mortgage inquiries, or investment opportunities. Speak directly with our team for fast, reliable support.",
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* HERO SECTION */}
      <section className="relative flex w-full h-[30vh] md:h-[50vh] xl:h-[70vh] mx-12">
        <div className="hidden lg:flex z-10 absolute inset-0 w-4/5 bg-gradient-to-br from-white from-40% to-transparent to-50% [clip-path:polygon(0_0,100%_0,60%_100%,0_100%)]" />
        <div className="hidden lg:flex z-10 absolute inset-0 w-4/5 bg-gradient-to-r from-white from-50% to-transparent to-60% [clip-path:polygon(0_0,100%_0,60%_100%,0_100%)]" />
        <div className="z-20 flex-1 flex justify-end items-center max-w-4xl px-4 md:px-8 lg:px-12">
          <div className="flex flex-col gap-2 md:gap-4 max-w-2xl">
            <h1 className="text-xl lg:text-2xl xl:text-3xl text-accent font-heading font-semibold">
              Contact Us
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-primary font-heading font-bold">
              Let's Work Together.
            </h2>
            <span className="w-1/2 md:w-1/8 h-1 bg-accent" />
            <p className="md:text-lg lg:text-xl xl:text-2xl text-primary">
              We're here to help you navigate any of your financial needs. Reach
              out today and let's build together.
            </p>
          </div>
        </div>
        <div className="z-10 absolute w-full h-full" />
        <div className="lg:relative lg:flex-2 h-full">
          <Image
            src="/assets/contact-hero.png"
            alt=""
            fill
            className="object-cover opacity-30 lg:opacity-100"
            priority
          />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative z-20 flex flex-col lg:flex-row w-full lg:min-h-[60vh] bg-transparent -mt-8">
        <div className="flex-1 flex justify-center bg-white px-4 md:px-8 py-8 md:py-16 rounded-4xl border-2 border-gray-200 shadow-2xl">
          <div className="flex flex-col gap-8 justify-center w-full max-w-3xl">
            <h3 className="w-full text-2xl md:text-3xl lg:text-4xl text-primary font-heading font-semibold">
              Send Us a Message
            </h3>
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="relative flex-1 bg-gray-200 px-2 py-8 md:p-8 rounded-4xl border-2 border-gray-200 shadow-2xl">
          <div className="absolute bottom-1/5 right-1/5 w-36 md:w-72 h-36 md:h-72">
            <Image
              src="/assets/graphic.png"
              alt="temp"
              fill
              className="object-cover opacity-5"
            />
          </div>
          <ContactInfo />
        </div>
        <div className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-48 h-48">
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

      {/* BOTTOM SECTION */}
      <section className="flex flex-col-reverse lg:flex-row w-full h-[60vh] md:h-[50vh]">
        <div className="flex-2 flex justify-center items-center py-8 bg-primary">
          <div className="flex flex-col gap-4 lg:gap-8 w-3/4 max-w-3xl text-white">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold">
                Your Home.
              </h3>
              <h3 className="text-2xl md:text-3xl text-accent font-heading font-semibold">
                Our Community.
              </h3>
            </div>
            <div className="w-1/3 md:w-1/8 h-1 bg-accent" />
            <p className="w-full max-w-md text-lg lg:text-xl">
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
            className="object-cover lg:rounded-l-[10rem]"
          />
        </div>
      </section>
      <div className="w-full h-2 bg-accent" />
    </div>
  );
}
