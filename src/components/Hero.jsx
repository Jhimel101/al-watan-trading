import { useEffect, useState } from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi";

const slides = [
  {
    image: "/images/building-materials.webp",
    badge: "30+ Years of Excellence",
    title: "Premium Building Materials",
    description:
      "Supplying quality construction materials for residential, commercial and infrastructure projects across Qatar.",
  },
  {
    image: "/images/hardware-hand-tools.webp",
    badge: "Professional Hardware",
    title: "Hardware & Hand Tools",
    description:
      "Professional hand tools and hardware trusted by contractors, workshops and maintenance companies.",
  },
  {
    image: "/images/paint-items.webp",
    badge: "Premium Quality Paints",
    title: "Professional Paint & Coating Solutions",
    description:
      "High-quality interior and exterior paints, primers, sealers, and industrial coatings for all your painting needs.",
  },
  {
    image: "/images/electrical-supplies.webp",
    badge: "Electrical Solutions",
    title: "Electrical Materials & Accessories",
    description:
      "Complete electrical products including cables, breakers, switches, lighting and accessories.",
  },
  {
    image: "/images/plumbing-materials.webp",
    badge: "Plumbing Systems",
    title: "Plumbing Materials",
    description:
      "Reliable plumbing products, pipes, fittings, valves and sanitary accessories for every project.",
  },
  {
    image: "/images/water-pumps.webp",
    badge: "Water Pump Solutions",
    title: "Residential & Industrial Water Pumps",
    description:
      "Efficient water pumps and pressure systems for residential, commercial and industrial applications.",
  },
  {
    image: "/images/power-tools.webp",
    badge: "Power Tools",
    title: "Professional Power Tools",
    description:
      "Drills, grinders, saws and heavy-duty equipment built for demanding construction environments.",
  },
  {
    image: "/images/safety-store.webp",
    badge: "One-Stop Safety Shop",
    title: "Complete Safety & Protection Supplies",
    description:
      "Everything you need for workplace safety - helmets, gloves, safety shoes, goggles, ear protection, and industrial safety accessories.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative h-screen min-h-190 overflow-hidden"
      style={{ paddingTop: "calc(env(safe-area-inset-top) + 8rem)" }}
    >
      {/* Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />

          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-900/30" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl animate-[fadeIn_.8s_ease]">
          <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400 backdrop-blur">
            {slides[current].badge}
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
            {slides[current].title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {slides[current].description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl bg-yellow-500 px-8 py-4 font-semibold text-slate-900 transition hover:-translate-y-1"
            >
              Request a Quotation
              <FiArrowRight className="ml-2" />
            </a>

            <a
              href="tel:+97455499056"
              className="inline-flex items-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <FiPhone className="mr-2 text-yellow-400" />
              +974 5549 9056
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "30+ Years Experience",
              "Bulk Orders",
              "Fast Delivery",
              "Trusted by Contractors",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-12 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index ? "w-10 bg-yellow-500" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
