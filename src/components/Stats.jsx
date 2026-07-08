// export default function Stats() {
//   const stats = [
//     ["30+", "Years Experience"],
//     ["3000+", "Products"],
//     ["500+", "Business Clients"],
//     ["Across Qatar", "Supply Coverage"],
//   ];

//   return (
//     <section className="-mt-16 relative z-10">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="grid gap-6 md:grid-cols-4">
//           {stats.map(([number, title]) => (
//             <div
//               key={title}
//               className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
//             >
//               <h3 className="text-4xl font-bold text-slate-900">{number}</h3>

//               <p className="mt-2 text-slate-600">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function Stats() {
//   const stats = [
//     ["30+", "Years Experience"],
//     ["3000+", "Products"],
//     ["500+", "Business Clients"],
//     ["Across Qatar", "Supply Coverage"],
//   ];

//   return (
//     <section className="-mt-12 relative z-10 sm:-mt-16">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6">
//         <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-6">
//           {stats.map(([number, title]) => (
//             <div
//               key={title}
//               className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl sm:rounded-3xl sm:p-6 md:p-8"
//             >
//               <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
//                 {number}
//               </h3>

//               <p className="mt-1 text-xs text-slate-600 sm:mt-2 sm:text-sm md:text-base">
//                 {title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Stats() {
  return (
    <section className="-mt-12 relative z-10 sm:-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:rounded-3xl sm:p-8 md:p-10">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:flex-wrap sm:gap-6 md:gap-8">
            <span className="flex items-center gap-2 text-sm font-medium text-slate-700 sm:text-base">
              <span className="text-yellow-600 text-lg">✓</span>
              30+ Years Experience
            </span>

            <span className="hidden sm:block text-slate-300">|</span>

            <span className="flex items-center gap-2 text-sm font-medium text-slate-700 sm:text-base">
              <span className="text-yellow-600 text-lg">✓</span>
              Bulk Supply Solutions
            </span>

            <span className="hidden sm:block text-slate-300">|</span>

            <span className="flex items-center gap-2 text-sm font-medium text-slate-700 sm:text-base">
              <span className="text-yellow-600 text-lg">✓</span>
              Trusted by Contractors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
