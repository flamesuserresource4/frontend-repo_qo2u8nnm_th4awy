import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav, U14",
    quote: "My batting improved in just 3 months. The drills are fun and match-like.",
    rating: 5,
  },
  {
    name: "Parent of Riya",
    quote: "Safe, professional environment. The coach focuses on discipline and joy.",
    rating: 5,
  },
  {
    name: "Karan, Club Player",
    quote: "Loved the video analysis and strength sessions. Helped me make the playing XI.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-emerald-50/40 to-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What players say</h2>
          <p className="mt-2 text-slate-600">Real stories from students and parents across Mumbai.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-3 text-slate-700">“{t.quote}”</p>
              <p className="mt-4 text-sm font-medium text-slate-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
