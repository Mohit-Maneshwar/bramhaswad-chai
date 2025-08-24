import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-extrabold tracking-wide cursor-pointer"
        >
          Rajvadi Kadak Chai
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `relative text-lg font-medium transition-colors duration-300 ${
                  isActive ? "text-yellow-400" : "text-white hover:text-yellow-300"
                }`
              }
            >
              {item.name}
              {/* underline animation */}
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-yellow-400 hidden group-hover:block"
              />
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-green-800"
        >
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? "text-yellow-400" : "text-white hover:text-yellow-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;
