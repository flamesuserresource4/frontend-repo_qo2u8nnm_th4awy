import { Award, Star, ThumbsUp } from "lucide-react";

export default function Coach() {
  return (
    <section id="coach" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop"
              alt="Coach profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-lg bg-white p-3 shadow-lg sm:flex sm:flex-col">
            <span className="text-xs text-slate-500">Experience</span>
            <span className="text-sm font-semibold">10+ years | BCCI Level-1</span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meet the Coach</h2>
          <p className="mt-3 text-slate-600">
            Passionate about developing Mumbai's cricketing talent, Coach works with players across age groups focusing on technique, mindset, and fitness. He has mentored district-level players and organized multiple city tournaments.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-emerald-100 bg-white p-4 text-center">
              <Award className="mx-auto h-6 w-6 text-emerald-700" />
              <p className="mt-2 text-sm font-semibold">BCCI Certified</p>
              <p className="text-xs text-slate-600">Level-1 Coaching</p>
            </div>
            <div className="rounded-lg border border-emerald-100 bg-white p-4 text-center">
              <Star className="mx-auto h-6 w-6 text-emerald-700" />
              <p className="mt-2 text-sm font-semibold">Player Pathways</p>
              <p className="text-xs text-slate-600">School to State</p>
            </div>
            <div className="rounded-lg border border-emerald-100 bg-white p-4 text-center">
              <ThumbsUp className="mx-auto h-6 w-6 text-emerald-700" />
              <p className="mt-2 text-sm font-semibold">Holistic Training</p>
              <p className="text-xs text-slate-600">Skills + Fitness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
