import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Camps from "./components/Camps";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Schedule from "./components/Schedule";
import Coach from "./components/Coach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import RegistrationModal from "./components/RegistrationModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState(null);

  const handleRegisterClick = (camp) => {
    setSelectedCamp(camp);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Programs />
      <CampsWithActions onRegister={handleRegisterClick} />
      <Gallery />
      <Testimonials />
      <Schedule />
      <Coach />
      <Contact />
      <Footer />
      <RegistrationModal open={modalOpen} onClose={() => setModalOpen(false)} camp={selectedCamp} />
    </div>
  );
}

function CampsWithActions({ onRegister }) {
  // Reuse the same data as in Camps by importing, but we need camp data here.
  // We'll inline the same camps array to ensure buttons work as requested.
  const camps = [
    {
      name: "Summer Cricket Camp",
      time: "May 10 - June 5",
      location: "Dadar, Mumbai",
      detail: "Intensive 4-week program covering batting, bowling, and match temperament.",
    },
    {
      name: "Monsoon Fitness Bootcamp",
      time: "July 1 - July 21",
      location: "Bandra, Mumbai",
      detail: "Strength & conditioning with indoor nets and agility circuits.",
    },
    {
      name: "Mumbai U-17 Invitational",
      time: "August 15 - 18",
      location: "Wankhede Practice, Churchgate",
      detail: "Knockout tournament with city clubs and academy teams.",
    },
  ];

  return (
    <section id="camps" className="bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Camps & Tournaments
          </h2>
          <p className="mt-2 text-slate-600">
            Seasonal camps and competitive events to test and showcase your skills.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {camps.map((c) => (
            <div key={c.name} className="flex h-full flex-col rounded-xl border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{c.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{c.detail}</p>
                </div>
                <span className="rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">Popular</span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-700">
                <div className="flex items-center gap-2">🗓️ {c.time}</div>
                <div className="flex items-center gap-2">📍 {c.location}</div>
              </div>
              <div className="mt-5 flex gap-3">
                <button onClick={() => onRegister(c)} className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Register</button>
                <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-emerald-200 px-4 py-2 text-emerald-700 hover:bg-emerald-50">Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
