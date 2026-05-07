export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy of Olympia Mortgage Group to understand how we collect, use, and protect personal information in compliance with Canadian privacy regulations.",
};

const SUBSECTION_STYLES = "flex flex-col gap-2";
const LIST_STYLES = "list-disc pl-6";

export default function Privacy() {
  return (
    <div className="flex justify-center w-full">
      <section className="flex flex-col gap-4 w-full max-w-7xl my-12 md:my-24 px-4 md:px-8">
        <div className={SUBSECTION_STYLES}>
          <h1 className="text-3xl md:text-4xl font-heading font-bold">
            Privacy Policy
          </h1>
          <p>
            Olympia Mortgage Group Inc. (“Olympia”, “we”, “our”, or “us”) is
            committed to protecting the privacy and confidentiality of personal
            information in accordance with applicable Canadian privacy laws.
            This Privacy Policy outlines how we collect, use, disclose, and
            safeguard personal information.
          </p>
        </div>
        <div className={SUBSECTION_STYLES}>
          <h3 className="text-xl md:text-2xl font-heading font-semibold">
            Information We Collect
          </h3>
          <p>We may collect personal information including:</p>
          <ul className={LIST_STYLES}>
            <li>Name, email address, and phone number</li>
            <li>Property and mortgage-related information</li>
            <li>
              Financial information provided in connection with loan inquiries
            </li>
            <li>
              Information submitted through website forms, email, or phone
              communication
            </li>
          </ul>
          <p>
            We only collect information that is necessary to provide our
            services and respond to inquiries.
          </p>
        </div>
        <div className={SUBSECTION_STYLES}>
          <h3 className="text-xl md:text-2xl font-heading font-semibold">
            How We Use Information
          </h3>
          <p>We use personal information for the following purposes:</p>
          <ul className={LIST_STYLES}>
            <li>
              To respond to inquiries and communicate with clients, brokers, and
              investors
            </li>
            <li>To assess mortgage and investment opportunities</li>
            <li>To facilitate and administer mortgage transactions</li>
            <li>To comply with legal and regulatory requirements</li>
            <p>
              We do not use personal information for unrelated purposes without
              consent.
            </p>
          </ul>
        </div>
        <div className={SUBSECTION_STYLES}>
          <h3 className="text-xl md:text-2xl font-heading font-semibold">
            Disclosure of Information
          </h3>
          <p>
            We may share personal information with third parties where
            necessary, including:
          </p>
          <ul className={LIST_STYLES}>
            <li>Legal professionals (lawyers, notaries)</li>
            <li>Financial institutions</li>
            <li>
              Service providers assisting in the administration of mortgages
            </li>
            <li>Regulatory authorities where required by law</li>
          </ul>
          <p>We do not sell or rent personal information to third parties.</p>
        </div>
        <div className={SUBSECTION_STYLES}>
          <h3 className="text-xl md:text-2xl font-heading font-semibold">
            Data Security
          </h3>
          <p>
            We take reasonable precautions to protect personal information from
            loss, misuse, unauthorized access, disclosure, or alteration. While
            no method of transmission over the internet is completely secure, we
            strive to use commercially acceptable means to protect personal
            information.
          </p>
        </div>
        <div className={SUBSECTION_STYLES}>
          <h3 className="text-xl md:text-2xl font-heading font-semibold">
            Retention of Information
          </h3>
          <p>
            Personal information is retained only as long as necessary to
            fulfill the purposes for which it was collected, or as required by
            law.
          </p>
        </div>
        <div className={SUBSECTION_STYLES}>
          <h3 className="text-xl md:text-2xl font-heading font-semibold">
            Cookies and Website Usage
          </h3>
          <p>
            Our website may use basic cookies or analytics tools to improve user
            experience and understand website usage. This information does not
            typically identify individuals personally.
          </p>
        </div>
        <div className={SUBSECTION_STYLES}>
          <h3 className="text-xl md:text-2xl font-heading font-semibold">
            Third-Party Services
          </h3>
          <p>
            Our website may be hosted or supported by third-party service
            providers. These providers may collect certain technical information
            (such as IP address or browser type) as part of standard website
            operations.
          </p>
        </div>
        <div className={SUBSECTION_STYLES}>
          <h3 className="text-xl md:text-2xl font-heading font-semibold">
            Your Consent
          </h3>
          <p>
            By using our website or providing personal information to Olympia
            Mortgage Group Inc., you consent to the collection, use, and
            disclosure of your information as described in this Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  );
}
