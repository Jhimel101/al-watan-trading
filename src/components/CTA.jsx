// export default function CTA() {
//   return (
//     <section id="contact" className="py-28">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="rounded-[40px] bg-slate-950 px-8 py-20 text-center md:px-20">
//           <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">
//             Request a Quotation
//           </span>

//           <h2 className="mt-6 text-4xl font-bold text-white">
//             Looking for a Reliable Supply Partner in Qatar?
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-slate-300">
//             Contact Al Watan Al Arabian Trading Est. for competitive pricing,
//             bulk quotations and dependable supply solutions.
//           </p>

//           <div className="mt-10 flex flex-wrap justify-center gap-4">
//             <a
//               href="https://wa.me/97455499056"
//               className="rounded-2xl bg-yellow-500 px-8 py-4 font-semibold text-slate-900"
//             >
//               WhatsApp Us
//             </a>

//             <a
//               href="tel:+97455499056"
//               className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white"
//             >
//               Call Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function CTA() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-4xl bg-slate-950 px-6 py-12 text-center sm:rounded-[40px] sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-400 sm:text-sm">
            Request a Quotation
          </span>

          <h2 className="mt-4 text-2xl font-bold text-white sm:mt-5 sm:text-3xl md:mt-6 md:text-4xl lg:text-5xl">
            Looking for a Reliable Supply Partner in Qatar?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-300 sm:mt-5 sm:text-base md:mt-6 md:text-lg">
            Contact Al Watan Al Arabian Trading Est. for competitive pricing,
            bulk quotations and dependable supply solutions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <a
              href="https://wa.me/97455499056"
              className="inline-flex items-center justify-center rounded-2xl bg-yellow-500 px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 sm:px-8 sm:py-4 sm:text-base"
            >
              WhatsApp Us
            </a>

            <a
              href="tel:+97455499056"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/5 sm:px-8 sm:py-4 sm:text-base"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
