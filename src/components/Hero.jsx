import { MapPin, Phone, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-8 pb-20">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
              C
            </div>
            <span className="text-lg font-semibold text-emerald-700">Coach Mumbai Cricket</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#programs" className="hover:text-emerald-600">Programs</a>
            <a href="#camps" className="hover:text-emerald-600">Camps & Tournaments</a>
            <a href="#coach" className="hover:text-emerald-600">About Coach</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
          </div>
        </div>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              <Trophy className="h-4 w-4" />
              Elite Cricket Coaching in Mumbai
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Transform your game with expert coaching and competitive camps
            </h1>
            <p className="mt-4 text-slate-600">
              Personalized training for all age groups — from beginners to pros. Join our seasonal camps and city-wide tournaments to take your skills to the next level.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                Book a Free Trial
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-md border border-emerald-200 bg-white px-5 py-3 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50"
              >
                Explore Programs
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-600" />
                Mumbai, India
              </div>
              <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-emerald-700">
                <Phone className="h-4 w-4 text-emerald-600" />
                +91 99999 99999
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-2">
                <div className="rounded-lg bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2MDI3MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="rounded-lg bg-[url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center col-span-2" />
                <div className="rounded-lg bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2MDI3MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center col-span-2" />
                <div className="rounded-lg bg-[url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="rounded-lg bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2MDI3MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="rounded-lg bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2MDI3MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center col-span-2" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-lg bg-white p-3 shadow-lg sm:flex sm:flex-col">
              <span className="text-xs text-slate-500">City Coverage</span>
              <span className="text-sm font-semibold">South, Central & Suburban Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
