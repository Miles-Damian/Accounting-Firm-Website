import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const [isServicesToggled, setIsServicesToggled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => setIsSidebarToggled(!isSidebarToggled);
  const toggleServices = () => setIsServicesToggled(!isServicesToggled);
  const handleSearch = (e) => setSearchQuery(e.target.value);

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
        >
          {isSidebarToggled ? (
            <i className="fa-solid fa-xmark fa-2x"></i> // X icon when open
          ) : (
            <i className="fa-solid fa-bars fa-2x"></i> // Bars when closed
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

          {/* Services */}
          <motion.li className="relative cursor-pointer group" whileHover="hover">
            <div className="flex items-center">
              <motion.i
                className="text-xs fa-solid fa-universal-access"
                variants={{ hover: { scale: 1.3, rotate: -8 } }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <button
                id="services-dropdown-btn"
                onClick={toggleServices}
                className="ml-2 text-base relative inline-block transition-colors duration-300 hover:text-green-800
                           after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-full after:bg-green-700
                           after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                           group-hover:after:scale-x-100"
              >
                <b>SERVICES</b>
              </button>
              <motion.i
                className="ml-1 fa-solid fa-angle-down fa-s"
                animate={{ rotate: isServicesToggled ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <AnimatePresence>
              {isServicesToggled && (
                <motion.ul
                  id="services-dropdown-actions"
                  className="absolute flex flex-col items-center gap-3 p-3 -translate-x-1/2 bg-white shadow rounded-xl center left-1/2 top-full"
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

        {/* ✅ Mobile Sidebar (fixed overlay) */}
        <AnimatePresence>
          {isSidebarToggled && (
            <motion.ul
              id="mobile-nav-actions-container"
              className="fixed top-0 right-0 z-40 flex flex-col w-full h-screen gap-6 p-6 bg-white lg:hidden"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {["HOME", "ABOUT US", "FAQ", "CONTACT", "CAREERS"].map((label, i) => (
                <motion.li
                  key={label}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex items-center gap-2"
                >
                  <i
                    className={`fa-solid ${["fa-house", "fa-people-group", "fa-circle-question", "fa-phone", "fa-briefcase"][i]} text-2xl`}
                  />
                  <a
                    href="#"
                    className="text-3xl transition-colors duration-300 hover:text-green-800"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}

              {/* ✅ Mobile Search */}
              <li>
                <form action="" className="relative">
                  <button type="submit" className="absolute -translate-y-1/2 left-3 top-1/2">
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
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
