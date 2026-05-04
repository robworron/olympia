type BrokerBadgeProps = {
  icon: React.ReactNode;
  header: string;
  text: string;
};

export default function BrokerBadge({ icon, header, text }: BrokerBadgeProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div>{icon}</div>
      <h3 className="text-xl md:text-3xl text-primary font-heading font-semibold">
        {header}
      </h3>
      <p className="md:text-lg text-center text-gray-500">{text}</p>
    </div>
  );
}
