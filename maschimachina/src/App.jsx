import Home from "./components/Home";
import Collections from "./components/Collections";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </>
  );
}

export default App;
