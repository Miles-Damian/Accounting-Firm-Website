import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => setIsSidebarToggled((v) => !v);
  const toggleDesktopServices = () =>
    setIsDesktopServicesOpen((v) => !v);
  const toggleMobileServices = () =>
    setIsMobileServicesOpen((v) => !v);
  const handleSearch = (e) => setSearchQuery(e.target.value);

  // Lock page scroll when mobile menu is open
  useEffect(() => {
    if (isSidebarToggled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isSidebarToggled]);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-green-100 to-green-200 font-montserrat">
      <nav className="relative flex items-center justify-between h-16 px-4 sm:px-6 lg:px-10 max-w-[1600px] mx-auto">
        {/* Logo */}
        <img
          className="w-40 md:w-44 lg:w-48 h-auto animate-jump animate-duration-[400ms]"
          src="/public/images/logo/logo.png"
          alt="Insight Accounting Firm"
        />

        {/* Mobile menu button (Hamburger / X) */}
        <button
          onClick={toggleSidebar}
          className="relative z-50 flex lg:hidden"
          id="header-menu-btn"
          aria-label="Toggle menu"
        >
          {isSidebarToggled ? (
            <i className="fa-solid fa-xmark fa-2x"></i>
          ) : (
            <i className="fa-solid fa-bars fa-2x"></i>
          )}
        </button>

        {/* Desktop navigation */}
        <ul
          id="nav-actions-container"
          className="flex-row items-center hidden gap-6 ml-16 lg:flex"
        >
          {/* Home */}
          <motion.li
            className="relative flex items-center gap-2 cursor-pointer group"
            whileHover="hover"
          >
            <motion.i
              className="text-xs fa-solid fa-house"
              variants={{ hover: { scale: 1.3, rotate: -10 } }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <a
              href="#"
              className="text-base relative inline-block transition-colors duration-300 hover:text-green-800
                         after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-full after:bg-green-700
                         after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                         group-hover:after:scale-x-100"
            >
              <b>HOME</b>
            </a>
          </motion.li>

          {/* About Us */}
          <motion.li
            className="relative flex items-center gap-2 cursor-pointer group"
            whileHover="hover"
          >
            <motion.i
              className="text-xs fa-solid fa-people-group"
              variants={{ hover: { scale: 1.3, rotate: 10 } }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <a
              href="#"
              className="text-base relative inline-block transition-colors duration-300 hover:text-green-800
                         after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-full after:bg-green-700
                         after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                         group-hover:after:scale-x-100"
            >
              <b>ABOUT US</b>
            </a>
          </motion.li>

          {/* Services (desktop) */}
          <motion.li className="relative cursor-pointer group" whileHover="hover">
            <div className="flex items-center">
              <motion.i
                className="text-xs fa-solid fa-universal-access"
                variants={{ hover: { scale: 1.3, rotate: -8 } }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <button
                id="services-dropdown-btn"
                onClick={toggleDesktopServices}
                className="ml-2 text-base relative inline-block transition-colors duration-300 hover:text-green-800
                           after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-full after:bg-green-700
                           after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                           group-hover:after:scale-x-100"
              >
                <b>SERVICES</b>
              </button>
              <motion.i
                className="ml-1 fa-solid fa-angle-down fa-s"
                animate={{ rotate: isDesktopServicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <AnimatePresence>
              {isDesktopServicesOpen && (
                <motion.ul
                  id="services-dropdown-actions"
                  className="absolute flex flex-col items-center gap-3 p-3 -translate-x-1/2 bg-white shadow left-1/2 top-full rounded-xl"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {[
                    "Business Registration Services",
                    "Accounting & Bookkeeping Services",
                    "Tax & Regulatory Compliance",
                    "Payroll Outsourced Services",
                    "BIR One-Time Transactions",
                    "Specialized Registrations & Compliance",
                    "Business Support Services",
                  ].map((service) => (
                    <li key={service} className="relative">
                      <a
                        href="#"
                        className="text-base whitespace-nowrap relative inline-block transition-colors duration-300 hover:text-green-800
                                   after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-full after:bg-green-700
                                   after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                                   hover:after:scale-x-100"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>

          {/* FAQ */}
          <motion.li
            className="relative flex items-center gap-2 cursor-pointer group"
            whileHover="hover"
          >
            <motion.i
              className="text-xs fa-solid fa-circle-question"
              variants={{ hover: { scale: 1.3, rotate: 8 } }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <a
              href="#"
              className="text-base relative inline-block transition-colors duration-300 hover:text-green-800
                         after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-full after:bg-green-700
                         after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                         group-hover:after:scale-x-100"
            >
              <b>FAQ</b>
            </a>
          </motion.li>

          {/* Contact */}
          <motion.li
            className="relative flex items-center gap-2 cursor-pointer group"
            whileHover="hover"
          >
            <motion.i
              className="text-xs fa-solid fa-phone"
              variants={{ hover: { scale: 1.3, rotate: -12 } }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <a
              href="#"
              className="text-base relative inline-block transition-colors duration-300 hover:text-green-800
                         after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-full after:bg-green-700
                         after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                         group-hover:after:scale-x-100"
            >
              <b>CONTACT</b>
            </a>
          </motion.li>

          {/* Careers */}
          <motion.li
            className="relative flex items-center gap-2 cursor-pointer group"
            whileHover="hover"
          >
            <motion.i
              className="text-xs fa-solid fa-briefcase"
              variants={{ hover: { scale: 1.3, rotate: 12 } }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <a
              href="#"
              className="text-base relative inline-block transition-colors duration-300 hover:text-green-800
                         after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-full after:bg-green-700
                         after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                         group-hover:after:scale-x-100"
            >
              <b>CAREERS</b>
            </a>
          </motion.li>

          {/* Desktop Search */}
          <li>
            <form action="" className="relative">
              <button type="submit" className="absolute -translate-y-1/2 left-3 top-1/2">
                <i className="text-xs fa-solid fa-magnifying-glass"></i>
              </button>
              <input
                value={searchQuery}
                onChange={handleSearch}
                type="text"
                className="w-full py-1 pl-8 pr-5 text-base bg-white border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="SEARCH"
              />
            </form>
          </li>
        </ul>

        {/* Mobile Sidebar (includes Services) */}
        <AnimatePresence>
          {isSidebarToggled && (
            <motion.div
              className="fixed inset-0 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop to close */}
              <div
                className="absolute inset-0 bg-black/30"
                onClick={() => setIsSidebarToggled(false)}
              />
              {/* Drawer */}
              <motion.ul
                id="mobile-nav-actions-container"
                className="absolute right-0 top-0 h-full w-full max-w-[420px] bg-white p-6 flex flex-col gap-6 overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {[
                  { label: "HOME", icon: "fa-house" },
                  { label: "ABOUT US", icon: "fa-people-group" },
                  { label: "SERVICES", icon: "fa-universal-access" },
                  { label: "FAQ", icon: "fa-circle-question" },
                  { label: "CONTACT", icon: "fa-phone" },
                  { label: "CAREERS", icon: "fa-briefcase" },
                ].map(({ label, icon }) => (
                  <li key={label} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <i className={`fa-solid ${icon} text-2xl`} />
                      {label === "SERVICES" ? (
                        <button
                          onClick={toggleMobileServices}
                          className="flex items-center gap-2 text-3xl transition-colors duration-300 hover:text-green-800"
                        >
                          {label}
                          <i
                            className={`fa-solid fa-angle-down text-xl transition-transform ${
                              isMobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <a
                          href="#"
                          className="text-3xl transition-colors duration-300 hover:text-green-800"
                          onClick={() => setIsSidebarToggled(false)}
                        >
                          {label}
                        </a>
                      )}
                    </div>

                    {/* Mobile Services submenu */}
                    {label === "SERVICES" && isMobileServicesOpen && (
                      <ul className="flex flex-col gap-3 mt-1 ml-9">
                        {[
                          "Business Registration Services",
                          "Accounting & Bookkeeping Services",
                          "Tax & Regulatory Compliance",
                          "Payroll Outsourced Services",
                          "BIR One-Time Transactions",
                          "Specialized Registrations & Compliance",
                          "Business Support Services",
                        ].map((service) => (
                          <li key={service}>
                            <a
                              href="#"
                              className="text-xl transition hover:text-green-800"
                              onClick={() => setIsSidebarToggled(false)}
                            >
                              {service}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                {/* Mobile Search */}
                <li className="mt-2">
                  <form action="" className="relative">
                    <button
                      type="submit"
                      className="absolute -translate-y-1/2 left-3 top-1/2"
                    >
                      <i className="text-2xl fa-solid fa-magnifying-glass"></i>
                    </button>
                    <input
                      value={searchQuery}
                      onChange={handleSearch}
                      type="text"
                      className="w-full py-2 pl-12 pr-5 text-2xl border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-green-700"
                      placeholder="SEARCH"
                    />
                  </form>
                </li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
