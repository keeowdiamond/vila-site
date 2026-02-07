export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "rounded-xl px-6 py-3 text-sm font-semibold transition";

  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800"
      : "border border-zinc-300 hover:border-zinc-500";

  return (
    <button className={`${base} ${styles}`}>
      {children}
    </button>
  );
}