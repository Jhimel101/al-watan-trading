// import { FiPhone, FiMenu } from "react-icons/fi";
// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navItems = ["Services", "Products", "Projects", "About", "Contact"];

//   const location = useLocation();

//   const getLink = (item) => {
//     if (item === "Products") return "/products";

//     if (location.pathname === "/") {
//       return `#${item.toLowerCase()}`;
//     }

//     return `/#${item.toLowerCase()}`;
//   };

//   return (
//     <header className="fixed top-0 left-0 z-50 w-full">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="mt-4 rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-lg">
//           <div className="flex h-20 items-center justify-between px-6">
//             <div>
//               <h1 className="text-xl font-bold tracking-wide text-slate-900">
//                 AL WATAN
//               </h1>
//               <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
//                 AL ARABIAN TRADING EST.
//               </p>
//             </div>

//             <nav className="hidden md:flex items-center gap-8">
//               {navItems.map((item) =>
//                 item === "Products" ? (
//                   <Link
//                     key={item}
//                     to="/products"
//                     className="text-sm font-medium text-slate-700 hover:text-blue-900"
//                   >
//                     {item}
//                   </Link>
//                 ) : (
//                   <a
//                     key={item}
//                     href={getLink(item)}
//                     className="text-sm font-medium text-slate-700 hover:text-blue-900"
//                   >
//                     {item}
//                   </a>
//                 )
//               )}
//             </nav>

//             <a
//               href="tel:+97455499056"
//               className="hidden md:flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
//             >
//               <FiPhone />
//               Call Us
//             </a>

//             <button onClick={() => setOpen(!open)} className="md:hidden">
//               <FiMenu size={24} />
//             </button>
//           </div>

//           {open && (
//             <div className="border-t p-6 md:hidden">
//               <div className="flex flex-col gap-4">
//                 {navItems.map((item) =>
//                   item === "Products" ? (
//                     <Link
//                       key={item}
//                       to="/products"
//                       className="text-slate-700"
//                       onClick={() => setOpen(false)}
//                     >
//                       {item}
//                     </Link>
//                   ) : (
//                     <a
//                       key={item}
//                       href={`#${item.toLowerCase()}`}
//                       className="text-slate-700"
//                       onClick={() => setOpen(false)}
//                     >
//                       {item}
//                     </a>
//                   )
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// import { FiPhone, FiMenu } from "react-icons/fi";
// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navItems = [
//     "Home",
//     "Services",
//     "Products",
//     "Projects",
//     "About",
//     "Contact",
//   ];

//   const location = useLocation();

//   const getLink = (item) => {
//     if (item === "Products") return "/products";
//     if (item === "Home") return "/";

//     if (location.pathname === "/") {
//       return `#${item.toLowerCase()}`;
//     }

//     return `/#${item.toLowerCase()}`;
//   };

//   return (
//     <header className="fixed top-0 left-0 z-50 w-full">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="mt-4 rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-lg">
//           <div className="flex h-20 items-center justify-between px-6">
//             {/* Logo - Clickable to Home */}
//             <Link to="/" className="cursor-pointer">
//               <h1 className="text-xl font-bold tracking-wide text-slate-900">
//                 AL WATAN
//               </h1>
//               <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
//                 AL ARABIAN TRADING EST.
//               </p>
//             </Link>

//             <nav className="hidden md:flex items-center gap-8">
//               {navItems.map((item) =>
//                 item === "Products" ? (
//                   <Link
//                     key={item}
//                     to="/products"
//                     className="text-sm font-medium text-slate-700 hover:text-blue-900"
//                   >
//                     {item}
//                   </Link>
//                 ) : item === "Home" ? (
//                   <Link
//                     key={item}
//                     to="/"
//                     className="text-sm font-medium text-slate-700 hover:text-blue-900"
//                   >
//                     {item}
//                   </Link>
//                 ) : (
//                   <a
//                     key={item}
//                     href={getLink(item)}
//                     className="text-sm font-medium text-slate-700 hover:text-blue-900"
//                   >
//                     {item}
//                   </a>
//                 )
//               )}
//             </nav>

//             <a
//               href="tel:+97455499056"
//               className="hidden md:flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
//             >
//               <FiPhone />
//               Call Us
//             </a>

//             <button onClick={() => setOpen(!open)} className="md:hidden">
//               <FiMenu size={24} />
//             </button>
//           </div>

//           {open && (
//             <div className="border-t p-6 md:hidden">
//               <div className="flex flex-col gap-4">
//                 {navItems.map((item) =>
//                   item === "Products" ? (
//                     <Link
//                       key={item}
//                       to="/products"
//                       className="text-slate-700"
//                       onClick={() => setOpen(false)}
//                     >
//                       {item}
//                     </Link>
//                   ) : item === "Home" ? (
//                     <Link
//                       key={item}
//                       to="/"
//                       className="text-slate-700"
//                       onClick={() => setOpen(false)}
//                     >
//                       {item}
//                     </Link>
//                   ) : (
//                     <a
//                       key={item}
//                       href={`#${item.toLowerCase()}`}
//                       className="text-slate-700"
//                       onClick={() => setOpen(false)}
//                     >
//                       {item}
//                     </a>
//                   )
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

import { FiPhone, FiMenu } from "react-icons/fi";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", section: "services" },
    { label: "Products", path: "/products" },
    { label: "Brands", section: "brands" },
    { label: "Industries", section: "industries" },
    { label: "Quote", section: "quote" },
    { label: "Contact", section: "contact" },
  ];

  const getSectionLink = (section) => {
    return location.pathname === "/" ? `#${section}` : `/#${section}`;
  };

  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-lg">
          <div className="flex h-20 items-center justify-between px-6">
            {/* Logo */}
            {/* <Link to="/" className="cursor-pointer">
              <h1 className="text-xl font-bold tracking-wide text-slate-900">
                AL WATAN
              </h1>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                AL ARABIAN TRADING EST.
              </p>
            </Link> */}
            <div
              onClick={handleLogoClick}
              className="cursor-pointer select-none"
            >
              <h1 className="text-xl font-bold tracking-wide text-slate-900">
                AL WATAN
              </h1>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                AL ARABIAN TRADING EST.
              </p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) =>
                item.path ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-sm font-medium text-slate-700 transition hover:text-yellow-600"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={getSectionLink(item.section)}
                    className="text-sm font-medium text-slate-700 transition hover:text-yellow-600"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>

            {/* Call Button */}
            <a
              href="tel:+97455499056"
              className="hidden md:flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-yellow-500 hover:text-slate-900"
            >
              <FiPhone />
              Call Us
            </a>

            {/* Mobile Menu Button */}
            <button onClick={() => setOpen(!open)} className="md:hidden">
              <FiMenu size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="border-t p-6 md:hidden">
              <div className="flex flex-col gap-5">
                {navItems.map((item) =>
                  item.path ? (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="text-slate-700 transition hover:text-yellow-600"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={getSectionLink(item.section)}
                      onClick={() => setOpen(false)}
                      className="text-slate-700 transition hover:text-yellow-600"
                    >
                      {item.label}
                    </a>
                  )
                )}

                <a
                  href="tel:+97455499056"
                  className="mt-4 flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white"
                >
                  <FiPhone className="mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
