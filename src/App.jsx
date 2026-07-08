import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Works from "./pages/Works.jsx";
import WorkDetail from "./pages/WorkDetail.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="works/:slug" element={<WorkDetail />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
