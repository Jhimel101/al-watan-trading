// import {
//   FiTool,
//   FiHome,
//   FiBox,
//   FiTruck,
//   FiShield,
//   FiSettings,
// } from "react-icons/fi";

// export default function Services() {
//   const services = [
//     {
//       icon: <FiHome size={28} />,
//       title: "Building Materials",
//       desc: "Cement, blocks, aggregates, construction materials and site supplies.",
//     },
//     {
//       icon: <FiTool size={28} />,
//       title: "Hardware & Hand Tools",
//       desc: "Hammers, hacksaws, wrenches, screwdrivers and professional hand tools.",
//     },
//     {
//       icon: <FiSettings size={28} />,
//       title: "Power Tools & Equipment",
//       desc: "Drills, grinders, cutting machines and industrial equipment.",
//     },
//     {
//       icon: <FiBox size={28} />,
//       title: "Electrical Materials",
//       desc: "Cables, switches, breakers, lighting and electrical accessories.",
//     },
//     {
//       icon: <FiTruck size={28} />,
//       title: "Plumbing & Water Systems",
//       desc: "Pipes, fittings, valves, sanitary products and water pumps.",
//     },
//     {
//       icon: <FiShield size={28} />,
//       title: "Industrial & Bulk Supply",
//       desc: "End-to-end procurement solutions for contractors and businesses.",
//     },
//   ];

//   return (
//     <section id="services" className="py-28 bg-slate-50">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="max-w-3xl">
//           <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
//             Our Services
//           </span>

//           <h2 className="mt-4 text-4xl font-bold text-slate-900">
//             Complete Supply Solutions for Construction & Industry
//           </h2>

//           <p className="mt-6 text-slate-600">
//             We provide reliable sourcing and delivery of premium materials,
//             hardware and industrial products across Qatar.
//           </p>
//         </div>

//         <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {services.map((service) => (
//             <div
//               key={service.title}
//               className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
//             >
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-yellow-400">
//                 {service.icon}
//               </div>

//               <h3 className="mt-6 text-xl font-bold text-slate-900">
//                 {service.title}
//               </h3>

//               <p className="mt-4 text-slate-600">{service.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  FiTool,
  FiHome,
  FiBox,
  FiTruck,
  FiShield,
  FiSettings,
} from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiHome size={28} />,
      title: "Building Materials",
      desc: "Cement, blocks, aggregates, construction materials and site supplies.",
    },
    {
      icon: <FiTool size={28} />,
      title: "Hardware & Hand Tools",
      desc: "Hammers, hacksaws, wrenches, screwdrivers and professional hand tools.",
    },
    {
      icon: <FiSettings size={28} />,
      title: "Power Tools & Equipment",
      desc: "Drills, grinders, cutting machines and industrial equipment.",
    },
    {
      icon: <FiBox size={28} />,
      title: "Electrical Materials",
      desc: "Cables, switches, breakers, lighting and electrical accessories.",
    },
    {
      icon: <FiTruck size={28} />,
      title: "Plumbing & Water Systems",
      desc: "Pipes, fittings, valves, sanitary products and water pumps.",
    },
    {
      icon: <FiShield size={28} />,
      title: "Industrial & Bulk Supply",
      desc: "End-to-end procurement solutions for contractors and businesses.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-slate-50 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-600 sm:text-sm">
            Our Services
          </span>

          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl md:mt-4 md:text-4xl">
            Complete Supply Solutions for Construction & Industry
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:mt-4 sm:text-base md:mt-6">
            We provide reliable sourcing and delivery of premium materials,
            hardware and industrial products across Qatar.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:mt-16 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-3xl sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-yellow-400 sm:h-14 sm:w-14">
                {service.icon}
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900 sm:mt-6 sm:text-xl">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 sm:mt-4 sm:text-base">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
