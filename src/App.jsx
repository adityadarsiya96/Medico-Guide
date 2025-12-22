import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Mentor from "./pages/Mentor";
import Student from "./pages/Student";

const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      

      <Routes>
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/student" element={<Student />} />
      </Routes>

      
    </>
  );
};

export default App;

