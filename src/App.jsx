import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

