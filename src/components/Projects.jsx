// export default function Projects() {
//   const projects = [
//     "Commercial Buildings",
//     "Residential Projects",
//     "Industrial Facilities",
//     "Infrastructure Developments",
//   ];

//   return (
//     <section id="projects" className="py-28">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="text-center">
//           <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
//             Projects
//           </span>

//           <h2 className="mt-4 text-4xl font-bold text-slate-900">
//             Supplying Materials for Diverse Projects
//           </h2>
//         </div>

//         <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {projects.map((project) => (
//             <div
//               key={project}
//               className="rounded-3xl bg-slate-900 p-10 text-white shadow-xl"
//             >
//               <h3 className="text-xl font-bold">{project}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Projects() {
  const projects = [
    "Commercial Buildings",
    "Residential Projects",
    "Industrial Facilities",
    "Infrastructure Developments",
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-600 sm:text-sm">
            Projects
          </span>

          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl md:mt-4 md:text-4xl">
            Supplying Materials for Diverse Projects
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 md:mt-16 lg:grid-cols-4 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project}
              className="rounded-2xl bg-slate-900 p-6 text-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl sm:rounded-3xl sm:p-8 md:p-10"
            >
              <h3 className="text-center text-base font-bold sm:text-lg md:text-xl">
                {project}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
