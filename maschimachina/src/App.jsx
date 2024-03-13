import Home from "./components/Home";
import Collections from "./components/Collections";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import { galleryDescriptions } from "./components/galleryDescriptions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/iMaschination" element={<Gallery />} />
        <Route path="/onetimeonly" element={<Gallery />} />
        <Route
          path="/theworldawake"
          element={
            <Gallery
              galleryName={galleryDescriptions[0].name}
              galleryText={galleryDescriptions[0].description}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
