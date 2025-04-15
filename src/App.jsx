import Home from "./components/views/Home/Home";
import Collections from "./components/views/Collections/Collections";
import Gallery from "./components/views/Gallery/Gallery";
import Contact from "./components/views/Contact/Contact";
import Catalog from "./components/views/Catalog/Catalog";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/gallery/:galleryId" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
