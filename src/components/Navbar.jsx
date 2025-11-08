import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#camps", label: "Camps" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#schedule", label: "Schedule" },
  { href: "#coach", label: "Coach" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">C</div>
          <span className="text-base font-semibold text-emerald-700">Coach Mumbai Cricket</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-emerald-700">{l.label}</a>
          ))}
          <a href="#contact" className="rounded-md bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-700">Book Trial</a>
        </nav>
        <button className="md:hidden rounded-md p-2 hover:bg-slate-100" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="mx-auto max-w-7xl px-6 py-3 grid gap-2 text-sm">
            {links.map(l => (
              <a key={l.href} href={l.href} className="py-2 text-slate-700 hover:text-emerald-700">{l.label}</a>
            ))}
            <a href="#contact" className="rounded-md bg-emerald-600 px-3 py-2 text-white text-center">Book Trial</a>
          </nav>
        </div>
      )}
    </header>
  );
}
