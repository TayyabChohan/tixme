import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import Faqs from "./components/faqs";
import Contact from "./components/contact";
import About from "./components/about";
import Policy from "./components/policy";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/policy" element={<Policy />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
