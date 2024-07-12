import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Home from "./Pages/Homepage/Homepage";
import Service from "./Pages/_Service/Service";
import Product from "./Pages/Product/Product";
import Blog from "./Pages/Blog/Blog";
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service/>
      <Product/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
