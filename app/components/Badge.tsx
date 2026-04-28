type BadgeProps = {
  icon: React.ReactNode;
  header: string;
  text: string;
};

export default function Badge({ icon, header, text }: BadgeProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div>{icon}</div>
      <h3 className="text-3xl text-white font-heading font-semibold">
        {header}
      </h3>
      <span className="w-1/8 h-1 bg-accent" />
      <p className="text-lg text-center text-gray-300">{text}</p>
    </div>
  );
}
