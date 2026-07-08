const timeline = [
  {
    year: "1995",
    title: "Company Established",
    desc: "Started operations in Qatar.",
  },
  {
    year: "2005",
    title: "Expanded Product Portfolio",
    desc: "Added electrical, plumbing and industrial products.",
  },
  {
    year: "2015",
    title: "Contractor Supply Partner",
    desc: "Became a trusted supplier for construction and maintenance projects.",
  },
  {
    year: "2025",
    title: "30+ Years of Excellence",
    desc: "Continuing to serve businesses across Qatar.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
            Our Journey
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Over Three Decades of Excellence
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-4">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
            >
              <div className="text-3xl font-bold text-yellow-600">
                {item.year}
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
