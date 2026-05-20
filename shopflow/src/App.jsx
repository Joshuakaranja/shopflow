import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Product from "./routes/Product.jsx";
import Contact from "./routes/Contact.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
         
      </div>
    </>
  );
}
export default App;
