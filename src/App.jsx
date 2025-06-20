import "./index.css";
import HomePage from "./Components/HomePage";
// import MainNav from "./Components/MainNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";




function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/footer" element={<Footer />}/>

     </Routes>
     
     </BrowserRouter>
    </>
  );
}
export default App;


