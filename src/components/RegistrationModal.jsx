import { X, CreditCard, User, Phone, Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function RegistrationModal({ open, onClose, camp }) {
  const [form, setForm] = useState({ name: "", phone: "", program: "Full Camp", payment: "UPI" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
    }
  }, [open]);

  if (!open || !camp) return null;

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h3 className="text-lg font-semibold text-slate-900">Register for {camp.name}</h3>
          <button onClick={onClose} aria-label="Close" className="rounded-md p-1 hover:bg-slate-100">
            <X className="h-5 w-5 text-slate-600" />
          </button>
        </div>

        <div className="px-5 py-4">
          <div className="mb-4 grid gap-3 rounded-lg bg-emerald-50/60 p-3 text-sm text-slate-700">
            <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-emerald-600" /> {camp.time}</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-600" /> {camp.location}</div>
          </div>

          <form onSubmit={submit} className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Full Name</label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input required value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} className="w-full rounded-md border border-emerald-200 bg-white px-9 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name" />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Mobile Number</label>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input required value={form.phone} onChange={(e)=>setForm({ ...form, phone: e.target.value })} className="w-full rounded-md border border-emerald-200 bg-white px-9 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="+91" />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Package</label>
              <select value={form.program} onChange={(e)=>setForm({ ...form, program: e.target.value })} className="rounded-md border border-emerald-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Full Camp</option>
                <option>Week 1 Only</option>
                <option>Weekend Sessions</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Payment Method</label>
              <div className="grid gap-2 sm:grid-cols-3">
                {[
                  { key: "UPI", label: "UPI" },
                  { key: "Card", label: "Card" },
                  { key: "Cash", label: "Cash" },
                ].map((p) => (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => setForm({ ...form, payment: p.key })}
                    className={`flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm ${form.payment === p.key ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-emerald-200 text-slate-700 hover:bg-emerald-50/40"}`}
                  >
                    <CreditCard className="h-4 w-4" /> {p.label}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="mt-2 w-full rounded-md bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700">
              Confirm Registration
            </button>
            {submitted && (
              <p className="text-center text-sm text-emerald-700">Registration received! We'll contact you shortly.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
