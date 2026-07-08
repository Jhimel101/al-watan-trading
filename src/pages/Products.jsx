// import WhatsAppButton from "../components/WhatsAppButton";
// import products from "../data/products";
// import { FiArrowRight } from "react-icons/fi";

// export default function Products() {
//   return (
//     <>
//       <main className="min-h-screen bg-slate-50 pt-36 pb-20">
//         <div className="mx-auto max-w-7xl px-6">
//           {/* Hero */}
//           <div className="text-center">
//             <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
//               Product Catalogue
//             </span>

//             <h1 className="mt-4 text-5xl font-bold text-slate-900">
//               Products We Supply
//             </h1>

//             <p className="mx-auto mt-6 max-w-3xl text-slate-600">
//               Al Watan Al Arabian Trading Est. supplies a comprehensive range of
//               building materials, electrical products, plumbing systems, water
//               pumps, hand tools and industrial equipment across Qatar.
//             </p>
//           </div>

//           {/* Products */}
//           <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {products.map((category) => (
//               <div
//                 key={category.category}
//                 className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
//               >
//                 <h2 className="text-2xl font-bold text-slate-900">
//                   {category.category}
//                 </h2>

//                 <ul className="mt-8 space-y-4">
//                   {category.items.map((item) => (
//                     <li
//                       key={item}
//                       className="flex items-center gap-3 text-slate-600"
//                     >
//                       <FiArrowRight className="text-yellow-600 shrink-0" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>

//                 <a
//                   href="https://wa.me/97455499056"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="mt-8 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-800"
//                 >
//                   Request Quotation
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       <WhatsAppButton />
//     </>
//   );
// }

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StickyMobileCTA from "../components/StickyMobileCTA";
import WhatsAppButton from "../components/WhatsAppButton";
import products from "../data/products";
import { FiArrowRight } from "react-icons/fi";

export default function Products() {
  return (
    <>
      <main className="min-h-screen bg-slate-50 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Hero */}
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-yellow-600 sm:text-sm">
              Product Catalogue
            </span>

            <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:mt-4 sm:text-4xl md:text-5xl">
              Products We Supply
            </h1>

            <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-600 sm:mt-4 sm:text-base md:mt-6">
              Al Watan Al Arabian Trading Est. supplies a comprehensive range of
              building materials, electrical products, plumbing systems, water
              pumps, hand tools and industrial equipment across Qatar.
            </p>
          </div>

          {/* Products */}
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:mt-20 lg:grid-cols-3 lg:gap-8">
            {products.map((category) => (
              <div
                key={category.category}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-3xl sm:p-8"
              >
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  {category.category}
                </h2>

                <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600 sm:gap-3 sm:text-base"
                    >
                      <FiArrowRight className="mt-0.5 shrink-0 text-yellow-600 sm:mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/97455499056"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-800 sm:mt-8 sm:w-auto sm:px-5"
                >
                  Request Quotation
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
