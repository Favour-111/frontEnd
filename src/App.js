import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
// importing my components
import Home from "./components/Home";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Notfound from "./components/Notfound";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* using BrowserRouter to import all my component */}
        <Route path="/Faq" element={<FAQ />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
