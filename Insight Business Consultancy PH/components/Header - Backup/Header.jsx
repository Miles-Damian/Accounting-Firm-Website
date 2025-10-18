import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const [isServicesToggled, setIsServicesToggled] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarToggled(!isSidebarToggled);
  const toggleServices = () => setIsServicesToggled(!isServicesToggled);

  const UnderlinedText = ({ isActive, children }) => (
    <span
      className={`relative after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:bg-[#004524] after:rounded-full after:w-full after:origin-left after:scale-x-0 after:opacity-0 after:transition-all after:duration-300 group-hover:after:scale-x-100 group-hover:after:opacity-100 ${
        isActive ? "after:scale-x-100 after:opacity-100" : ""
      }`}
    >
      <b>{children}</b>
    </span>
  );

  return (
    <header className="sticky top-0 z-50 w-full pt-1.5 pb-1.5 bg-gradient-to-b from-green-100 to-green-200">
      <nav className="flex justify-between items-center relative w-full p-2 h-16 max-w-[1400px] mx-auto">
        <img
          className="w-40 h-auto animate-jump animate-duration-[400ms]"
          src="/images/logo/logo.png"
          alt="Insight Accounting Firm"
        />

        {/* Mobile menu toggle */}
        <button onClick={toggleSidebar} className="flex lg:hidden">
          <i className="fa-solid fa-bars fa-2x"></i>
        </button>

        {/* ---------- DESKTOP NAVIGATION ---------- */}
        <ul className="hidden lg:flex lg:flex-row lg:items-center lg:gap-4">
          {/* HOME */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `group flex items-center gap-2 text-base font-medium font-inter transition-all duration-300 ${
                  isActive ? "text-green-800 font-semibold" : ""
                }`
              }
            >
              <motion.i
                className="fa-solid fa-house text-md transition-transform duration-300 group-hover:scale-125 group-hover:text-[#004524]"
                whileHover={{ rotate: -15, scale: 1.3, color: "#004524" }}
                whileTap={{ scale: 0.9 }}
              />
              <UnderlinedText isActive={location.pathname === "/"}>
                HOME
              </UnderlinedText>
            </NavLink>
          </li>

          {/* ABOUT */}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `group flex items-center gap-2 text-base font-medium font-inter transition-all duration-300 ${
                  isActive ? "text-green-800 font-semibold" : ""
                }`
              }
            >
              <motion.i
                className="fa-solid fa-people-group text-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-125 group-hover:text-[#00b894]"
                whileHover={{ rotate: 10, scale: 1.3, color: "#00b894" }}
                whileTap={{ scale: 0.9 }}
              />
              <UnderlinedText isActive={location.pathname === "/about"}>
                ABOUT&nbsp;US
              </UnderlinedText>
            </NavLink>
          </li>

          {/* SERVICES (Dropdown - desktop) */}
          <li className="relative">
            <div
              className={`group flex items-center gap-[4px] text-base font-medium font-inter transition-all duration-300 ${
                location.pathname.startsWith("/services")
                  ? "text-green-800 font-semibold"
                  : ""
              }`}
            >
              <motion.i
                className="fa-solid fa-universal-access text-md transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:text-[#004524]"
                whileHover={{ rotate: 15, scale: 1.2, color: "#004524" }}
                whileTap={{ scale: 0.95 }}
              />
              <button
                id="services-dropdown-btn"
                onClick={toggleServices}
                onMouseEnter={() => setIsServicesToggled(true)}
                onMouseLeave={() => setIsServicesToggled(false)}
                className={`flex items-center gap-[3px] text-base font-inter transition-all duration-200 ${
                  location.pathname.startsWith("/services")
                    ? "font-semibold text-green-800"
                    : ""
                }`}
              >
                <UnderlinedText
                  isActive={location.pathname.startsWith("/services")}
                >
                  SERVICES
                </UnderlinedText>
                <motion.i
                  className="fa-solid fa-angle-down text-[13px]"
                  animate={{
                    rotate: isServicesToggled ? 180 : 0,
                    color:
                      isServicesToggled ||
                      location.pathname.startsWith("/services")
                        ? "#004524"
                        : "#000000",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </button>
            </div>

            <AnimatePresence>
              {isServicesToggled && (
                <motion.ul
                  className="bg-white rounded-xl absolute left-1/2 -translate-x-1/2 top-full flex flex-col overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.1)]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onMouseEnter={() => setIsServicesToggled(true)}
                  onMouseLeave={() => setIsServicesToggled(false)}
                >
                  {[
                    ["/services/business-registration", "Business Registration Services"],
                    ["/services/bookkeeping-and-accounting", "Accounting & Bookkeeping Services"],
                    ["/services/tax-and-regulatory-compliance", "Tax & Regulatory Compliance"],
                    ["/services/payroll-outsourced", "Payroll Outsourced Services"],
                    ["/services/bir-transactions", "BIR One-Time Transactions"],
                    ["/services/specialized-registration", "Specialized Registrations & Compliance"],
                    ["/services/business-support", "Business Support Services"],
                  ].map(([to, label]) => (
                    <li key={to} className="w-full text-center hover:bg-gray-200">
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          `flex items-center justify-center h-10 px-4 text-base whitespace-nowrap transition-colors ${
                            isActive ? "text-green-700 font-semibold" : ""
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* FAQ */}
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `group flex items-center gap-2 text-base font-medium font-inter transition-all duration-300 ${
                  isActive ? "text-green-800 font-semibold" : ""
                }`
              }
            >
              <motion.i
                className="fa-solid fa-circle-question text-md transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125 group-hover:text-[#00b894]"
                whileHover={{ rotate: -12, scale: 1.2, color: "#00b894" }}
                whileTap={{ scale: 0.9 }}
              />
              <UnderlinedText isActive={location.pathname === "/faq"}>
                FAQ
              </UnderlinedText>
            </NavLink>
          </li>

          {/* CONTACT */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `group flex items-center gap-2 text-base font-medium font-inter transition-all duration-300 ${
                  isActive ? "text-green-800 font-semibold" : ""
                }`
              }
            >
              <motion.i
                className="fa-solid fa-phone text-md transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:text-[#004524]"
                whileHover={{ rotate: 12, scale: 1.2, color: "#004524" }}
                whileTap={{ scale: 0.9 }}
              />
              <UnderlinedText isActive={location.pathname === "/contact"}>
                CONTACT
              </UnderlinedText>
            </NavLink>
          </li>

          {/* CAREERS */}
          <li>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `group flex items-center gap-2 text-base font-medium font-inter transition-all duration-300 ${
                  isActive ? "text-green-800 font-semibold" : ""
                }`
              }
            >
              <motion.i
                className="fa-solid fa-briefcase text-md transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125 group-hover:text-[#00b894]"
                whileHover={{ rotate: -12, scale: 1.2, color: "#00b894" }}
                whileTap={{ scale: 0.9 }}
              />
              <UnderlinedText isActive={location.pathname === "/careers"}>
                CAREERS
              </UnderlinedText>
            </NavLink>
          </li>
        </ul>

        {/* ---------- MOBILE NAV ---------- */}
        <AnimatePresence>
          {isSidebarToggled && (
            <motion.ul
              className="absolute right-0 flex flex-col w-full h-screen gap-4 p-2 bg-white rounded-b-lg top-full lg:hidden"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* HOME */}
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsSidebarToggled(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-2 text-3xl transition-all duration-300 ${
                      isActive ? "text-green-800 font-semibold" : ""
                    }`
                  }
                >
                  <motion.i
                    className="text-2xl fa-solid fa-house transition-transform duration-300 group-hover:scale-125 group-hover:text-[#004524]"
                    whileHover={{ scale: 1.2, color: "#004524" }}
                  />
                  <UnderlinedText isActive={location.pathname === "/"}>
                    HOME
                  </UnderlinedText>
                </NavLink>
              </li>

              {/* ABOUT */}
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsSidebarToggled(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-2 text-3xl transition-all duration-300 ${
                      isActive ? "text-green-800 font-semibold" : ""
                    }`
                  }
                >
                  <motion.i
                    className="text-2xl fa-solid fa-people-group transition-transform duration-300 group-hover:scale-125 group-hover:text-[#00b894]"
                    whileHover={{ scale: 1.2, color: "#00b894" }}
                  />
                  <UnderlinedText isActive={location.pathname === "/about"}>
                    ABOUT&nbsp;US
                  </UnderlinedText>
                </NavLink>
              </li>

              {/* ✅ SERVICES (Between ABOUT US and FAQ) */}
              <li className="relative">
                <div
                  className={`group flex items-center gap-[4px] text-3xl transition-all duration-300 ${
                    location.pathname.startsWith("/services")
                      ? "text-green-800 font-semibold"
                      : ""
                  }`}
                >
                  <motion.i
                    className="text-2xl fa-solid fa-universal-access transition-transform duration-300 group-hover:scale-125 group-hover:text-[#004524]"
                    whileHover={{ scale: 1.2, color: "#004524" }}
                  />
                  <button
                    onClick={() => setIsMobileServicesOpen((v) => !v)}
                    className={`flex items-center gap-[4px] ml-[2px] transition-all duration-200 ${
                      location.pathname.startsWith("/services")
                        ? "font-semibold text-green-800"
                        : "font-normal text-black"
                    }`}
                  >
                    <UnderlinedText
                      isActive={location.pathname.startsWith("/services")}
                    >
                      SERVICES
                    </UnderlinedText>
                    <motion.i
                      className="fa-solid fa-angle-down text-[18px]"
                      animate={{
                        rotate: isMobileServicesOpen ? 180 : 0,
                        color: isMobileServicesOpen ? "#004524" : "#000000",
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.ul
                      className="flex flex-col gap-1 pl-9"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {[
                        ["/services/business-registration", "Business Registration Services"],
                        ["/services/bookkeeping-and-accounting", "Bookkeeping & Accounting Services"],
                        ["/services/tax-and-regulatory-compliance", "Tax & Regulatory Compliance"],
                        ["/services/payroll-outsourced", "Payroll Outsourced Services"],
                        ["/services/bir-transactions", "BIR One-Time Transactions"],
                        ["/services/specialized-registration", "Specialized Registrations & Compliance"],
                        ["/services/business-support", "Business Support Services"],
                      ].map(([to, label]) => (
                        <li key={to}>
                          <NavLink
                            to={to}
                            className="text-xl whitespace-nowrap"
                            onClick={() => {
                              setIsSidebarToggled(false);
                              setIsMobileServicesOpen(false);
                            }}
                          >
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* FAQ */}
              <li>
                <NavLink
                  to="/faq"
                  onClick={() => setIsSidebarToggled(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-2 text-3xl transition-all duration-300 ${
                      isActive ? "text-green-800 font-semibold" : ""
                    }`
                  }
                >
                  <motion.i
                    className="text-2xl fa-solid fa-circle-question transition-transform duration-300 group-hover:scale-125 group-hover:text-[#00b894]"
                    whileHover={{ scale: 1.2, color: "#00b894" }}
                  />
                  <UnderlinedText isActive={location.pathname === "/faq"}>
                    FAQ
                  </UnderlinedText>
                </NavLink>
              </li>

              {/* CONTACT */}
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsSidebarToggled(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-2 text-3xl transition-all duration-300 ${
                      isActive ? "text-green-800 font-semibold" : ""
                    }`
                  }
                >
                  <motion.i
                    className="text-2xl fa-solid fa-phone transition-transform duration-300 group-hover:scale-125 group-hover:text-[#004524]"
                    whileHover={{ scale: 1.2, color: "#004524" }}
                  />
                  <UnderlinedText isActive={location.pathname === "/contact"}>
                    CONTACT
                  </UnderlinedText>
                </NavLink>
              </li>

              {/* CAREERS */}
              <li>
                <NavLink
                  to="/careers"
                  onClick={() => setIsSidebarToggled(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-2 text-3xl transition-all duration-300 ${
                      isActive ? "text-green-800 font-semibold" : ""
                    }`
                  }
                >
                  <motion.i
                    className="text-2xl fa-solid fa-briefcase transition-transform duration-300 group-hover:scale-125 group-hover:text-[#00b894]"
                    whileHover={{ scale: 1.2, color: "#00b894" }}
                  />
                  <UnderlinedText isActive={location.pathname === "/careers"}>
                    CAREERS
                  </UnderlinedText>
                </NavLink>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
