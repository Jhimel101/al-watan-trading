// import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

// export default function Footer() {
//   return (
//     <footer className="bg-slate-950 text-white">
//       <div className="mx-auto max-w-7xl px-6 py-20">
//         <div className="grid gap-12 lg:grid-cols-2">
//           <div>
//             <h2 className="text-3xl font-bold">AL WATAN</h2>

//             <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">
//               AL ARABIAN TRADING EST.
//             </p>

//             <p className="mt-6 max-w-lg text-slate-400">
//               For more than 30 years, Al Watan Al Arabian Trading Est. has been
//               supplying hardware, building materials, electrical products,
//               plumbing materials, water pumps and industrial equipment across
//               Qatar.
//             </p>
//           </div>

//           <div className="grid gap-6">
//             <div className="flex gap-4">
//               <FiMapPin className="mt-1 text-yellow-400" />
//               <div>
//                 <h4 className="font-semibold">Address</h4>
//                 <p className="text-slate-400">
//                   6FX2+MPF, Al Aziziyah Complex, Doha, Qatar
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <FiPhone className="mt-1 text-yellow-400" />
//               <div>
//                 <h4 className="font-semibold">Phone & WhatsApp</h4>
//                 <a
//                   href="https://wa.me/97455499056"
//                   className="text-slate-400 hover:text-white"
//                 >
//                   +974 5549 9056
//                 </a>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <FiMail className="mt-1 text-yellow-400" />
//               <div>
//                 <h4 className="font-semibold">Email</h4>
//                 <p className="text-slate-400">info@alwatantrading.qa</p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <FiClock className="mt-1 text-yellow-400" />
//               <div>
//                 <h4 className="font-semibold">Experience</h4>
//                 <p className="text-slate-400">30+ Years Serving Qatar</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">
//           © {new Date().getFullYear()} Al Watan Al Arabian Trading Est. All
//           Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">AL WATAN</h2>

            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400 sm:text-sm">
              AL ARABIAN TRADING EST.
            </p>

            <p className="mt-4 max-w-lg text-sm text-slate-400 sm:mt-6 sm:text-base">
              For more than 30 years, Al Watan Al Arabian Trading Est. has been
              supplying hardware, building materials, electrical products,
              plumbing materials, water pumps and industrial equipment across
              Qatar.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6">
            <div className="flex gap-3 sm:gap-4">
              <FiMapPin className="mt-1 shrink-0 text-yellow-400" size={20} />
              <div>
                <h4 className="text-sm font-semibold sm:text-base">Address</h4>
                <p className="text-sm text-slate-400 sm:text-base">
                  6FX2+MPF, Al Aziziyah Complex, Doha, Qatar
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <FiPhone className="mt-1 shrink-0 text-yellow-400" size={20} />
              <div>
                <h4 className="text-sm font-semibold sm:text-base">
                  Phone & WhatsApp
                </h4>
                <a
                  href="https://wa.me/97455499056"
                  className="text-sm text-slate-400 transition hover:text-white sm:text-base"
                >
                  +974 5549 9056
                </a>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <FiMail className="mt-1 shrink-0 text-yellow-400" size={20} />
              <div>
                <h4 className="text-sm font-semibold sm:text-base">Email</h4>
                <p className="text-sm text-slate-400 sm:text-base">
                  info@alwatantrading.qa
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <FiClock className="mt-1 shrink-0 text-yellow-400" size={20} />
              <div>
                <h4 className="text-sm font-semibold sm:text-base">
                  Experience
                </h4>
                <p className="text-sm text-slate-400 sm:text-base">
                  30+ Years Serving Qatar
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:mt-16 sm:pt-8 sm:text-sm">
          © {new Date().getFullYear()} Al Watan Al Arabian Trading Est. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
