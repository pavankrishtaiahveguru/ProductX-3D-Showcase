import { motion } from "framer-motion";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Specs", path: "/specs" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* logo */}
        <Link to="/" className="text-xl font-semibold tracking-tight">
          ProductX
        </Link>

        {/* desktop menu */}
        <div className="hidden md:flex gap-10">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition ${
                  isActive
                    ? "text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-0.5 w-full bg-neutral-900"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-neutral-900"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-neutral-600 hover:text-neutral-900"
            >
              {link.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;