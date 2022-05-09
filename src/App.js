import Navbar from "./components/Navbar";
import Home from './components/home/Home'
import React from "react";
import {Routes,Route} from "react-router-dom";
import Footer from "./components/Footer";
import Recipes from './components/recipes/Recipes'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/recipes" element={<Recipes />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
