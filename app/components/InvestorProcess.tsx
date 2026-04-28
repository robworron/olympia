type InvestorProcessProps = {
  number?: string;
  icon?: React.ReactNode;
  heading?: string;
  subheading?: string;
  description?: string;
};

export default function InvestorProcess({
  number,
  icon,
  heading,
  subheading,
  description,
}: InvestorProcessProps) {
  return (
    <article className="grid grid-cols-8 grid-rows-3 gap-2 items-center w-full min-h-[300px] p-8 border-2 border-gray-300 bg-gray-200 rounded-xl shadow-xl">
      <div className="text-8xl text-accent font-heading font-bold opacity-60">
        {number}
      </div>
      <h2 className="col-span-6 mx-2 text-4xl text-primary font-heading">
        {heading}
      </h2>
      <div className="col-span-1">{icon}</div>
      <span className="col-span-1 row-span-2" />
      <div className="col-span-7 row-span-2">{description}</div>
    </article>
  );
}
