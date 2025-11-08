export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1600&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Gallery</h2>
        <p className="mt-2 text-slate-600">Training highlights, match days, and academy moments.</p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {images.map((src, i) => (
          <div key={i} className="group relative overflow-hidden rounded-lg border border-emerald-100">
            <img src={src} alt="Cricket academy" className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48 md:h-56" />
          </div>
        ))}
      </div>
    </section>
  );
}
