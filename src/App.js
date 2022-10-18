import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Views/Home/Home";
import Footer from "./components/Footer";
import Recipes from "./Views/Recipes/Recipes";
import Blog from "./Views/Blog/Blog";
import ScrollToTop from "./utils/ScrollToTop";
import Guide from "./Views/Guide/Guide";
import Contact from "./Views/Contact/Contact";
import CategorieRoute from "./Views/Categories/CategorieRoute";
import RecipeRoute from "./Views/Recipe/RecipeRoute";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/guide" element={<Guide />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/categories/:category"
            element={<CategorieRoute />}
          ></Route>
          <Route path="/recipe/:recipe" element={<RecipeRoute />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
