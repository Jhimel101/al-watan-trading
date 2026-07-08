import { useState } from "react";

export default function QuoteSection() {
  const [form, setForm] = useState({
    company: "",
    person: "",
    phone: "",
    products: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();

    const text =
      `Quotation Request\n\n` +
      `Company: ${form.company}\n` +
      `Contact Person: ${form.person}\n` +
      `Phone: ${form.phone}\n` +
      `Products Needed: ${form.products}\n` +
      `Message: ${form.message}`;

    window.open(
      `https://wa.me/97455499056?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="quote" className="bg-slate-50 py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-[40px] bg-white p-10 shadow-xl">
          <h2 className="text-center text-4xl font-bold text-slate-900">
            Request a Quotation
          </h2>

          <form onSubmit={submit} className="mt-10 space-y-6">
            <input
              placeholder="Company Name"
              className="w-full rounded-2xl border p-4"
              onChange={(e) =>
                setForm({
                  ...form,
                  company: e.target.value,
                })
              }
            />

            <input
              placeholder="Contact Person"
              className="w-full rounded-2xl border p-4"
              onChange={(e) =>
                setForm({
                  ...form,
                  person: e.target.value,
                })
              }
            />

            <input
              placeholder="Phone Number"
              className="w-full rounded-2xl border p-4"
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
            />

            <textarea
              rows={4}
              placeholder="Products Required"
              className="w-full rounded-2xl border p-4"
              onChange={(e) =>
                setForm({
                  ...form,
                  products: e.target.value,
                })
              }
            />

            <textarea
              rows={4}
              placeholder="Additional Message"
              className="w-full rounded-2xl border p-4"
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
            />

            <button className="w-full rounded-2xl bg-yellow-500 py-4 font-semibold text-slate-900">
              Request via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
