import { CheckCircle2, Dumbbell, Target, Users } from "lucide-react";

const programs = [
  {
    title: "Foundation (U10-U14)",
    desc: "Basics of batting, bowling and fielding with focus on coordination and fun drills.",
    icon: Users,
    highlights: ["Footwork & balance", "Safe technique", "Mini matches"],
  },
  {
    title: "Development (U15-U19)",
    desc: "Position-specific skill building, fitness and match awareness.",
    icon: Target,
    highlights: ["Shot selection", "Bowling consistency", "Field placements"],
  },
  {
    title: "High Performance",
    desc: "Advanced technical analysis, strength & conditioning, and mental prep.",
    icon: Dumbbell,
    highlights: ["Video analysis", "Power & agility", "Tournament exposure"],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Coaching Programs
        </h2>
        <p className="mt-2 text-slate-600">
          Structured pathways for all ages and skill levels with small-group attention.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map(({ title, desc, icon: Icon, highlights }) => (
          <div key={title} className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10">
                <Icon className="h-5 w-5 text-emerald-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600">{desc}</p>
            <ul className="mt-4 space-y-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> {h}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-5 inline-flex items-center justify-center rounded-md border border-emerald-200 px-4 py-2 text-emerald-700 hover:bg-emerald-50">
              Enquire Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
