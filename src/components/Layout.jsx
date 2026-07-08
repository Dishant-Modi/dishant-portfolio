import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar.jsx";
import PageTransition from "./PageTransition.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>
      {/* Home builds its own closing section (CTA + big footer), so the
          compact shared footer only applies to the other routes. */}
      {location.pathname !== "/" && <Footer />}
    </>
  );
}
