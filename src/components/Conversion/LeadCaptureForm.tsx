import { useMemo, useState } from 'react';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
};

export default function LeadCaptureForm() {
  const [data, setData] = useState<FormData>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailValid = useMemo(() => /^(?:[a-zA-Z0-9_'^&\/+\-])+(?:\.(?:[a-zA-Z0-9_'^&\/+\-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/i.test(data.email), [data.email]);

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) next.name = 'Please enter your name';
    if (!data.email.trim() || !emailValid) next.email = 'Enter a valid email address';
    if (data.phone && data.phone.length < 7) next.phone = 'Phone seems too short';
    if (data.message && data.message.length < 5) next.message = 'Please add a little more detail';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      console.log('Lead capture submission:', data);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
        Thank you — we’ll be in touch shortly.
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={submit} aria-label="Lead capture form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            className="w-full border rounded px-3 py-2 bg-white/90 text-black"
            placeholder="Full name"
            aria-invalid={!!errors.name}
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            className="w-full border rounded px-3 py-2 bg-white/90 text-black"
            placeholder="Email"
            aria-invalid={!!errors.email}
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">Phone</label>
        <input
          id="phone"
          className="w-full border rounded px-3 py-2 bg-white/90 text-black"
          placeholder="Phone (optional)"
          aria-invalid={!!errors.phone}
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500" role="alert">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          className="w-full border rounded px-3 py-2 bg-white/90 text-black"
          placeholder="Project details (optional)"
          rows={4}
          aria-invalid={!!errors.message}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500" role="alert">{errors.message}</p>}
      </div>
      <button
        disabled={loading}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white rounded px-5 py-2 disabled:opacity-60"
        type="submit"
        aria-busy={loading}
      >
        {loading ? 'Submitting…' : 'Request Proposal'}
      </button>
    </form>
  );
}
