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
    <header className="bg-gradient-to-b from-green-100 to-green-200 w-full sticky z-50 top-0">
      <nav className="flex justify-between items-center relative w-full p-2 h-16">
        {/* Logo */}
        <img
          className="w-52 h-auto animate-jump animate-duration-[400ms]"
          src="/public/images/logo/logo.png"
          alt="Insight Accounting Firm"
        />

        {/* Mobile menu button */}
        <button
          onClick={toggleSidebar}
          className="flex lg:hidden z-50 relative"
          id="header-menu-btn"
        >
          <i className="fa-solid fa-bars fa-2x"></i>
        </button>

        {/* Desktop navigation */}
        <ul
          id="nav-actions-container"
          className="hidden lg:flex lg:flex-row lg:items-center lg:gap-4"
        >
          {/* Home */}
          <motion.li
            className="flex items-center gap-2 relative group cursor-pointer"
            whileHover="hover"
          >
            <motion.i
              className="fa-solid fa-house text-xs"
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
              Home
            </a>
          </motion.li>

          {/* About Us */}
          <motion.li
            className="flex items-center gap-2 relative group cursor-pointer"
            whileHover="hover"
          >
            <motion.i
              className="fa-solid fa-people-group text-xs"
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
              About Us
            </a>
          </motion.li>

          {/* Services */}
          <motion.li className="relative group cursor-pointer" whileHover="hover">
            <div className="flex items-center">
              <motion.i
                className="fa-solid fa-universal-access text-xs"
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
                Services
              </button>
              <motion.i
                className="fa-solid fa-angle-down fa-s ml-1"
                animate={{ rotate: isServicesToggled ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <AnimatePresence>
              {isServicesToggled && (
                <motion.ul
                  id="services-dropdown-actions"
                  className="bg-white p-3 rounded-xl center items-center gap-3 absolute left-1/2 -translate-x-1/2 top-full flex flex-col shadow"
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
            className="flex items-center gap-2 relative group cursor-pointer"
            whileHover="hover"
          >
            <motion.i
              className="fa-solid fa-circle-question text-xs"
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
              FAQ
            </a>
          </motion.li>

          {/* Contact */}
          <motion.li
            className="flex items-center gap-2 relative group cursor-pointer"
            whileHover="hover"
          >
            <motion.i
              className="fa-solid fa-phone text-xs"
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
              Contact
            </a>
          </motion.li>

          {/* Careers */}
          <motion.li
            className="flex items-center gap-2 relative group cursor-pointer"
            whileHover="hover"
          >
            <motion.i
              className="fa-solid fa-briefcase text-xs"
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
              Careers
            </a>
          </motion.li>

          {/* Desktop Search */}
          <li>
            <form action="" className="relative">
              <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2">
                <i className="fa-solid fa-magnifying-glass text-xs"></i>
              </button>
              <input
                value={searchQuery}
                onChange={handleSearch}
                type="text"
                className="border border-black rounded-full w-full py-1 pl-8 pr-5 text-base bg-white focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Search"
              />
            </form>
          </li>
        </ul>

        {/* ✅ Mobile Sidebar */}
        <AnimatePresence>
          {isSidebarToggled && (
            <motion.ul
              id="mobile-nav-actions-container"
              className="bg-white absolute right-0 top-full w-full p-4 flex flex-col gap-6 rounded-b-lg h-screen lg:hidden z-40"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {["Home", "About Us", "FAQ", "Contact", "Careers"].map((label, i) => (
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
                    className="text-3xl hover:text-green-800 transition-colors duration-300"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}

              {/* ✅ Mobile Search */}
              <li>
                <form action="" className="relative">
                  <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2">
                    <i className="fa-solid fa-magnifying-glass text-2xl"></i>
                  </button>
                  <input
                    value={searchQuery}
                    onChange={handleSearch}
                    type="text"
                    className="border border-black rounded-full w-full py-2 pl-12 pr-5 text-2xl focus:outline-none focus:ring-2 focus:ring-green-700"
                    placeholder="Search"
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
