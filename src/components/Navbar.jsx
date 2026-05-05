// import { useState, useEffect, useRef } from "react";
// import Button from "./Button";
// import logo from "../assets/logo.svg";

// const NAV_LINKS = ["Home", "Divisions", "About", "Contact"];

// const Navbar = ({ onRegister }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);

//   const lastScrollY = useRef(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // always show at top
//       if (currentScrollY < 80) {
//         setShowNavbar(true);
//         lastScrollY.current = currentScrollY;
//         return;
//       }

//       // ignore tiny scrolls
//       if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

//       if (currentScrollY > lastScrollY.current) {
//         setShowNavbar(false); // scrolling down
//       } else {
//         setShowNavbar(true); // scrolling up
//       }

//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-[200]
//         flex items-center justify-between px-12 h-[68px]
//         bg-[rgba(7,11,18,0.9)] backdrop-blur-lg
//         border-b border-[rgba(26,110,245,0.18)]
//         transform transition-transform duration-300
//         ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
//       >
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-10 w-auto object-contain"
//           />
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex gap-8">
//           {NAV_LINKS.map((link) => (
//             <a
//               key={link}
//               href="#"
//               className="text-ink-muted text-[0.95rem] font-semibold tracking-wider no-underline transition-colors duration-200 hover:text-brand-cyan"
//             >
//               {link}
//             </a>
//           ))}
//         </div>

//         {/* CTA — hidden on mobile */}
//         {/* <div className="hidden md:block">
//           <Button onClick={onRegister}>Register Now</Button>
//         </div> */}

//         {/* Hamburger */}
//         <button
//           onClick={() => setMenuOpen((o) => !o)}
//           className="md:hidden flex flex-col gap-[5px] bg-transparent border-0 p-1.5 cursor-pointer"
//           aria-label="Toggle menu"
//         >
//           {[0, 1, 2].map((i) => (
//             <span
//               key={i}
//               className="block w-6 h-[2px] bg-ink rounded-sm transition-all duration-300"
//             />
//           ))}
//         </button>
//       </nav>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <div className="fixed top-[68px] left-0 right-0 z-[190] flex flex-col bg-[rgba(7,11,18,0.97)] backdrop-blur-lg border-b border-[rgba(26,110,245,0.18)]">
//           {NAV_LINKS.map((link) => (
//             <a
//               key={link}
//               href="#"
//               onClick={() => setMenuOpen(false)}
//               className="text-ink text-[1.1rem] font-semibold py-[18px] text-center border-b border-[rgba(26,110,245,0.18)] no-underline hover:text-brand-cyan hover:bg-[rgba(0,200,255,0.04)] transition-colors duration-200"
//             >
//               {link}
//             </a>
//           ))}

//           <a
//             href="#"
//             onClick={(e) => {
//               e.preventDefault();
//               setMenuOpen(false);
//               onRegister();
//             }}
//             className="text-brand-cyan font-bold text-[1.1rem] py-[18px] text-center no-underline"
//           >
//             Register Now →
//           </a>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;