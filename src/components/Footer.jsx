export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Coach Mumbai Cricket • Mumbai, India</p>
        <p className="mt-2">
          <a href="#contact" className="text-emerald-700 hover:underline">Contact</a> ·
          <a href="#programs" className="text-emerald-700 hover:underline ml-2">Programs</a> ·
          <a href="#camps" className="text-emerald-700 hover:underline ml-2">Camps</a>
        </p>
      </div>
    </footer>
  );
}
