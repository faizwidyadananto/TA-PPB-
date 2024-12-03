import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Random from "./pages/Random";
import Category from "./pages/Category";
import ProductDetail from "./pages/Detail";
import IntroScreen from "./pages/IntroScreen";

// Components
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<IntroScreen />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/about" element={<About />} />
          {/* Rute untuk Random sudah tepat */}
          <Route exact path="/random" element={<Random />} />
          <Route path="/item/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
