import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";
import Privacy from "./pages/Privacy";
import Help from "./pages/Help";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsConditions" element={<TermsConditions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
