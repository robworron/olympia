type BurgerProps = {
  isActive: boolean;
  onClick: () => void;
};

export default function Burger({ isActive, onClick }: BurgerProps) {
  return (
    <button
      className="flex flex-col justify-center items-center gap-1 w-12 h-full py-4"
      onClick={onClick}
    >
      <div
        className={`w-6 h-0.5 bg-primary transition-transform ${isActive ? "rotate-45 translate-y-0.75" : ""}`}
      />
      <div
        className={`w-6 h-0.5 bg-primary transition-transform ${isActive ? "hidden" : ""}`}
      />
      <div
        className={`w-6 h-0.5 bg-primary transition-transform ${isActive ? "-rotate-45 -translate-y-0.75" : ""}`}
      />
    </button>
  );
}
