import Navbar from "./components/Navbar";
import Home from './components/home/Home'
import React from "react";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
