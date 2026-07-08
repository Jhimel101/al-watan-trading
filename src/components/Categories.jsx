// export default function Categories() {
//   const items = [
//     "Building Materials",
//     "Electrical Supplies",
//     "Plumbing Materials",
//     "Water Pumps",
//     "Hand Tools",
//     "Power Tools",
//     "Industrial Equipment",
//     "Hardware & Accessories",
//     "Safety Products",
//   ];

//   return (
//     <section className="py-28">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="text-center">
//           <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
//             Product Categories
//           </span>

//           <h2 className="mt-4 text-4xl font-bold text-slate-900">
//             Everything You Need for Your Projects
//           </h2>
//         </div>

//         <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {items.map((item) => (
//             <div
//               key={item}
//               className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
//             >
//               <h3 className="font-semibold text-slate-900">{item}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Categories() {
  const items = [
    "Building Materials",
    "Electrical Supplies",
    "Plumbing Materials",
    "Water Pumps",
    "Hand Tools",
    "Power Tools",
    "Industrial Equipment",
    "Hardware & Accessories",
    "Safety Products",
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-600 sm:text-sm">
            Product Categories
          </span>

          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl md:mt-4 md:text-4xl">
            Everything You Need for Your Projects
          </h2>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 md:mt-16 lg:grid-cols-4 lg:gap-6">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl sm:p-6 md:rounded-3xl md:p-8"
            >
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base md:text-lg">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
