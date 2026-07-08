// export default function Industries() {
//   const industries = [
//     "Construction Companies",
//     "MEP Contractors",
//     "Industrial Facilities",
//     "Government Projects",
//     "Real Estate Developers",
//     "Maintenance Companies",
//   ];

//   return (
//     <section id="about" className="py-28 bg-slate-50">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="text-center">
//           <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
//             Industries We Serve
//           </span>

//           <h2 className="mt-4 text-4xl font-bold text-slate-900">
//             Supporting Projects Across Qatar
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-slate-600">
//             We supply materials and equipment to contractors, commercial
//             projects, industries and government organizations with dependable
//             sourcing and timely delivery.
//           </p>
//         </div>

//         <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {industries.map((item) => (
//             <div
//               key={item}
//               className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
//             >
//               <h3 className="font-semibold text-slate-900">{item}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Industries() {
  const industries = [
    "Construction Companies",
    "Building Contractors",
    "MEP Contractors",
    "Villa Construction & Renovation",
    "Residential Apartment Maintenance",
    "Commercial Buildings",
    "Hotels & Hospitality",
    "Factories & Warehouses",
    "Facility Management Companies",
    "Government & Infrastructure Projects",
  ];

  return (
    <section id="about" className="py-16 bg-slate-50 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-600 sm:text-sm">
            Industries We Serve
          </span>

          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl md:mt-4 md:text-4xl">
            Supporting Projects Across Qatar
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-600 sm:mt-4 sm:text-base md:mt-6">
            We supply materials and equipment to contractors, commercial
            projects, industries and government organizations with dependable
            sourcing and timely delivery.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 md:mt-16 lg:grid-cols-3 lg:gap-6">
          {industries.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-6 md:p-8"
            >
              <h3 className="text-center text-sm font-semibold text-slate-900 sm:text-base">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
