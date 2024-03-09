import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Tournaments from "./pages/Tournaments";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tournaments" element={<Tournaments />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
