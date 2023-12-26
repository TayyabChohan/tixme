import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
