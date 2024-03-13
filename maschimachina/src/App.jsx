import Home from "./components/Home";
import Collections from "./components/Collections";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Catalog from "./components/Catalog";
import { Routes, Route } from "react-router-dom";
import { galleryDescriptions } from "./components/galleryDescriptions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route
          path="/iMaschination"
          element={
            <Gallery
              galleryName={galleryDescriptions[0].name}
              galleryText={galleryDescriptions[0].description}
            />
          }
        />
        <Route
          path="/theworldawake"
          element={
            <Gallery
              galleryName={galleryDescriptions[1].name}
              galleryText={galleryDescriptions[1].description}
            />
          }
        />
        <Route
          path="/onetimeonly"
          element={
            <Gallery
              galleryName={galleryDescriptions[2].name}
              galleryText={galleryDescriptions[2].description}
            />
          }
        />
        <Route
          path="/customs"
          element={
            <Gallery
              galleryName={galleryDescriptions[3].name}
              galleryText={galleryDescriptions[3].description}
            />
          }
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
