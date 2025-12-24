import Link from "next/link";

type NavKey = "work" | "about" | "lab";

type Props = {
  active: NavKey;
};

export default function Navigation({ active }: Props) {
  const base =
    "px-5 py-2 rounded-xl text-xs transition-colors cursor-pointer select-none";
  const on = "text-white bg-white/10";
  const off = "text-gray-500 hover:text-white";

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 glass-nav px-2 py-2 rounded-2xl flex gap-2">
      <Link href="/" className={`${base} ${active === "work" ? on : off}`}>
        Work
      </Link>

      <Link href="/about" className={`${base} ${active === "about" ? on : off}`}>
        About
      </Link>

      <Link href="/lab" className={`${base} ${active === "lab" ? on : off}`}>
        Lab
      </Link>
    </nav>
  );
}
