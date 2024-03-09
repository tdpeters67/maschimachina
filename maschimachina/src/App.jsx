import Home from "./components/Home";
import Collections from "./components/Collections";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

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
              galleryName="The World Awake"
              galleryText="All four mountings reflect modern architecture, evidenced in calibrated contours, defined edges,
and understated ornament. To breathe life into the muted surfaces and pointed construction, I
selected contrasting, verdant stones and pearls. These precious materials offer associations of
prosperity and protection, with hues emphasizing the new.
"
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
