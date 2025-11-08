import { MapPin, Clock } from "lucide-react";

const locations = [
  { ground: "Shivaji Park Nets", area: "Dadar", days: "Mon, Wed, Fri", time: "6:00 AM - 8:00 AM" },
  { ground: "Bandra Kurla Complex", area: "Bandra", days: "Tue, Thu", time: "5:00 PM - 7:00 PM" },
  { ground: "Azad Maidan", area: "Churchgate", days: "Sat", time: "7:00 AM - 10:00 AM" },
  { ground: "Andheri Sports Complex", area: "Andheri", days: "Sun", time: "4:00 PM - 6:30 PM" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Weekly Schedule</h2>
        <p className="mt-2 text-slate-600">Training across Mumbai — pick a slot that suits you.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {locations.map((l) => (
          <div key={l.ground} className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{l.ground}</h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-700"><MapPin className="h-4 w-4 text-emerald-600" /> {l.area}</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">{l.days}</span>
            </div>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-700"><Clock className="h-4 w-4 text-emerald-600" /> {l.time}</p>
            <div className="mt-4 flex gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-emerald-200 px-4 py-2 text-emerald-700 hover:bg-emerald-50">Enquire Slot</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Book Trial</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
