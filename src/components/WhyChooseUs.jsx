// export default function WhyChooseUs() {
//   const reasons = [
//     "Reliable Supply Chain",
//     "Competitive Wholesale Pricing",
//     "Fast Delivery Across Qatar",
//     "Dedicated Customer Support",
//   ];

//   return (
//     <section className="bg-slate-950 py-28">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="text-center">
//           <span className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
//             Why Choose Us
//           </span>

//           <h2 className="mt-4 text-4xl font-bold text-white">
//             Trusted by Contractors & Businesses
//           </h2>
//         </div>

//         <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {reasons.map((item) => (
//             <div
//               key={item}
//               className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
//             >
//               <h3 className="text-lg font-semibold text-white">{item}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function WhyChooseUs() {
//   const reasons = [
//     "Reliable Supply Chain",
//     "Competitive Wholesale Pricing",
//     "Fast Delivery Across Qatar",
//     "Dedicated Customer Support",
//   ];

//   return (
//     <section className="bg-slate-950 py-16 sm:py-20 md:py-28">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6">
//         <div className="text-center">
//           <span className="text-xs font-semibold uppercase tracking-widest text-yellow-400 sm:text-sm">
//             Why Choose Us
//           </span>

//           <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl md:mt-4 md:text-4xl">
//             Trusted by Contractors & Businesses
//           </h2>
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 md:mt-16 lg:grid-cols-4 lg:gap-8">
//           {reasons.map((item) => (
//             <div
//               key={item}
//               className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10 sm:rounded-3xl sm:p-6 md:p-8"
//             >
//               <h3 className="text-center text-sm font-semibold text-white sm:text-base md:text-lg">
//                 {item}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import {
//   FiAward,
//   FiTruck,
//   FiDollarSign,
//   FiShield,
//   FiUsers,
//   FiHeadphones,
// } from "react-icons/fi";

// const reasons = [
//   {
//     icon: FiAward,
//     title: "30+ Years Experience",
//     description:
//       "Serving contractors, businesses and homeowners across Qatar with trusted supply solutions.",
//   },
//   {
//     icon: FiShield,
//     title: "Quality Products",
//     description:
//       "We supply genuine building materials, hardware, electrical and plumbing products from trusted brands.",
//   },
//   {
//     icon: FiTruck,
//     title: "Fast Delivery",
//     description:
//       "Reliable and timely delivery across Doha and throughout Qatar for projects of every size.",
//   },
//   {
//     icon: FiDollarSign,
//     title: "Competitive Pricing",
//     description:
//       "Wholesale rates for contractors, construction companies, maintenance firms and bulk orders.",
//   },
//   {
//     icon: FiUsers,
//     title: "Trusted by Professionals",
//     description:
//       "Preferred supplier for construction projects, villa renovations and commercial developments.",
//   },
//   {
//     icon: FiHeadphones,
//     title: "Dedicated Support",
//     description:
//       "Our experienced team helps you find the right materials for your project quickly and efficiently.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="bg-slate-950 py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
//             Why Choose Us
//           </span>

//           <h2 className="mt-4 text-4xl font-bold text-white">
//             Trusted by Contractors & Businesses Across Qatar
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
//             For more than three decades, Al Watan Al Arabian Trading Est. has
//             been supplying reliable building materials, hardware, electrical,
//             plumbing and industrial products with competitive pricing and
//             dependable customer service.
//           </p>
//         </div>

//         <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {reasons.map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className="group rounded-[28px] border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40 hover:bg-white/10"
//               >
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 text-slate-900 transition group-hover:scale-110">
//                   <Icon size={28} />
//                 </div>

//                 <h3 className="mt-6 text-xl font-bold text-white">
//                   {item.title}
//                 </h3>

//                 <p className="mt-4 leading-7 text-slate-300">
//                   {item.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  FiAward,
  FiTruck,
  FiDollarSign,
  FiShield,
  FiUsers,
  FiHeadphones,
} from "react-icons/fi";

const reasons = [
  {
    icon: FiAward,
    title: "30+ Years Experience",
    description:
      "Serving contractors, businesses and homeowners across Qatar with trusted supply solutions.",
  },
  {
    icon: FiShield,
    title: "Quality Products",
    description:
      "We supply genuine building materials, hardware, electrical and plumbing products from trusted brands.",
  },
  {
    icon: FiTruck,
    title: "Fast Delivery",
    description:
      "Reliable and timely delivery across Doha and throughout Qatar for projects of every size.",
  },
  {
    icon: FiDollarSign,
    title: "Competitive Pricing",
    description:
      "Wholesale rates for contractors, construction companies, maintenance firms and bulk orders.",
  },
  {
    icon: FiUsers,
    title: "Trusted by Professionals",
    description:
      "Preferred supplier for construction projects, villa renovations and commercial developments.",
  },
  {
    icon: FiHeadphones,
    title: "Dedicated Support",
    description:
      "Our experienced team helps you find the right materials for your project quickly and efficiently.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-yellow-400">
            Why Choose Us
          </span>

          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Trusted by Contractors & Businesses Across Qatar
          </h2>

          <p className="mx-auto mt-4 sm:mt-5 md:mt-6 max-w-3xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-slate-300 px-2 sm:px-0">
            For more than three decades, Al Watan Al Arabian Trading Est. has
            been supplying reliable building materials, hardware, electrical,
            plumbing and industrial products with competitive pricing and
            dependable customer service.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl sm:rounded-3xl md:rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-yellow-500 text-slate-900 transition group-hover:scale-110">
                  <Icon size={22} className="sm:size-6.5 md:size-7" />
                </div>

                <h3 className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
