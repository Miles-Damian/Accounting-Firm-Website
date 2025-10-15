import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.jsx";
import App from "./App.jsx";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <App />
      <Outlet /> {/* 👈 This renders the child pages */}
    </>
  );
};

export default Layout;
