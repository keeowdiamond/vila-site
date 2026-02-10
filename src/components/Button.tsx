export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 ease-out active:translate-y-[1px]";

  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800 hover:-translate-y-[1px] hover:shadow-md"
      : "border border-zinc-300 hover:border-zinc-500 hover:-translate-y-[1px]";

  return (
    <button className={`${base} ${styles}`}>
      {children}
    </button>
  );
}