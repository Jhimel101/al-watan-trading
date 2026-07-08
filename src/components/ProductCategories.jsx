const categories = [
  {
    title: "Building Materials",
    image: "/images/building-materials.webp",
  },
  {
    title: "Electrical Supplies",
    image: "/images/electrical-supplies.webp",
  },
  {
    title: "Plumbing Materials",
    image: "/images/plumbing-materials.webp",
  },
  {
    title: "Water Pumps",
    image: "/images/water-pumps.webp",
  },
  {
    title: "Hand Tools",
    image: "/images/hardware-hand-tools.webp",
  },
  {
    title: "Power Tools",
    image: "/images/power-tools.webp",
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
            Product Categories
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Complete Supply Solutions
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-4xl bg-white shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
