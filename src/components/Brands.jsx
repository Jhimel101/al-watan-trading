// export default function Brands() {
//   const brands = [
//     "Bosch",
//     "Makita",
//     "Stanley",
//     "DeWALT",
//     "Grundfos",
//     "Pedrollo",
//     "ABB",
//     "Schneider Electric",
//     "Legrand",
//     "Jotun",
//     "National Paints",
//     "Geberit",
//   ];

//   return (
//     <section id="brands" className="bg-white py-20">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="text-center">
//           <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
//             Brands We Deal In
//           </span>

//           <h2 className="mt-4 text-4xl font-bold text-slate-900">
//             Trusted Products from Leading Brands
//           </h2>
//         </div>

//         <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
//           {brands.map((brand) => (
//             <div
//               key={brand}
//               className="flex h-28 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center text-lg font-semibold text-slate-700 transition hover:-translate-y-1 hover:shadow-lg"
//             >
//               {brand}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";

const brands = [
  { name: "Bosch", logo: "/brands/bosch.webp" },
  { name: "Makita", logo: "/brands/makita.webp" },
  { name: "Stanley", logo: "/brands/stanley.webp" },
  { name: "DeWALT", logo: "/brands/dewalt.webp" },
  { name: "Grundfos", logo: "/brands/grundfos.webp" },
  { name: "Pedrollo", logo: "/brands/pedrollo.svg" },
  // { name: "ABB", logo: "/brands/abb.webp" },
  // { name: "Schneider Electric", logo: "/brands/schneider.webp" },
  // { name: "Legrand", logo: "/brands/legrand.webp" },
  // { name: "Jotun", logo: "/brands/jotun.webp" },
  // { name: "National Paints", logo: "/brands/national-paints.webp" },
  // { name: "Geberit", logo: "/brands/geberit.webp" },
];

export default function Brands() {
  const [loaded, setLoaded] = useState({});

  return (
    <section id="brands" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
            Brands We Deal In
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Trusted Products from Leading Brands
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            We source genuine products from globally recognized manufacturers,
            ensuring quality, reliability and long-term performance.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative flex h-36 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-xl"
            >
              {!loaded[brand.name] && (
                <div className="absolute h-8 w-28 animate-pulse rounded bg-slate-200" />
              )}

              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                className={`max-h-14 w-auto object-contain transition-all duration-500 group-hover:scale-110 ${
                  loaded[brand.name] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() =>
                  setLoaded((prev) => ({
                    ...prev,
                    [brand.name]: true,
                  }))
                }
                onError={(e) => {
                  e.currentTarget.src = "/brands/placeholder.webp";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
