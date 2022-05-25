import Navbar from "./components/Navbar";
import Home from './components/home/Home'
import React from "react";
import {Routes,Route} from "react-router-dom";
import Footer from "./components/Footer";
import Recipes from './components/recipes/Recipes'
import Blog from "./components/blog/Blog";
import ScrollToTop from "./utils/ScrollToTop";
import Guide from "./components/guide/Guide";
import Contact from "./components/contactUs/Contact";


function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/guide" element={<Guide />}></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
