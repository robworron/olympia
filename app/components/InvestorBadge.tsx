type InvestorBadgeProps = {
  icon: React.ReactNode;
  header: string;
  text: string;
};

export default function InvestorBadge({
  icon,
  header,
  text,
}: InvestorBadgeProps) {
  return (
    <div className="flex flex-col gap-4 items-center text-center md:text-start">
      <div>{icon}</div>
      <h3 className="text-lg md:text-3xl text-white font-heading font-semibold">
        {header}
      </h3>
      <span className="w-1/2 md:w-1/8 h-1 bg-accent" />
      <p className="text-sm md:text-lg text-center text-gray-300">{text}</p>
    </div>
  );
}
