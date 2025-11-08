import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get in touch</h2>
            <p className="mt-2 text-slate-600">
              Share your goals and we'll suggest the right program or camp for you.
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-600" /> +91 99999 99999</div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-emerald-600" /> coach@mumbaicricket.in</div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-emerald-600" /> Dadar, Bandra, Andheri, Navi Mumbai</div>
            </div>
          </div>

          <div>
            <form onSubmit={onSubmit} className="rounded-xl border border-emerald-100 bg-emerald-50/30 p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Phone</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Mobile number"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Tell us about your cricket goals"
                  />
                </div>
              </div>

              <button type="submit" className="mt-4 w-full rounded-md bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700">
                Send Enquiry
              </button>

              {sent && (
                <p className="mt-3 text-center text-sm text-emerald-700">
                  Thanks! We'll call you shortly.
                </p>
              )}
            </form>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Coach Mumbai Cricket. All rights reserved.
        </p>
      </div>
    </section>
  );
}
