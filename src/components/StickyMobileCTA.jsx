import { FiPhone, FiMessageCircle, FiFileText } from "react-icons/fi";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-100 md:hidden">
      <div className="grid grid-cols-3 overflow-hidden rounded-2xl bg-slate-950 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
        <a
          href="tel:+97455499056"
          className="flex flex-col items-center justify-center gap-1 border-r border-white/10 py-3 text-white transition hover:bg-slate-800"
        >
          <FiPhone size={20} />
          <span className="text-xs font-medium">Call</span>
        </a>

        <a
          href="https://wa.me/97455499056"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 border-r border-white/10 bg-green-600 py-3 text-white transition hover:bg-green-700"
        >
          <FiMessageCircle size={20} />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>

        <a
          href="#quote"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white transition hover:bg-slate-800"
        >
          <FiFileText size={20} />
          <span className="text-xs font-medium">Quote</span>
        </a>
      </div>
    </div>
  );
}
