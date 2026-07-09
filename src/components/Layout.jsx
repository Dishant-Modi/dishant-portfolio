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
      {/* Home and the work detail pages build their own closing sections
          (CTA/big footer, next-project + footer row), so the compact shared
          footer only applies to the remaining routes. */}
      {location.pathname !== "/" && !location.pathname.startsWith("/works/") && <Footer />}
    </>
  );
}
