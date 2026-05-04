import { CLOCK_ICON, EMAIL_ICON, PHONE_ICON, PIN_ICON } from "@/utils/icons";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-heading font-bold md:font-semibold">
          We're Local.
        </h3>
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-heading font-bold md:font-semibold">
          We're Here for You.
        </h3>
      </div>
      <span className="w-1/3 md:w-1/6 h-1 bg-accent" />
      <p className="w-full w-1/2 md:min-w-lg text-lg lg:text-xl">
        As local home professionals, we understand our community and the homes
        that make it special.
      </p>
      <ul className="flex flex-col gap-4 text-lg lg:text-xl">
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
  );
}
