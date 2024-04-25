import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Product from "./Pages/Product";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" name="Login Page" element={<Homepage />} />
          <Route exact path="/about" name="About us" element={<About />} />
          <Route exact path="/services" name="Layanan" element={<Service/>} />
          <Route exact path="/products" name="Product" element={<Product />} />
          <Route exact path="/blog" name="Our Blog" element={<Blog />} />
          <Route exact path="/contact" name="Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
