import "./index.css";
import MainNav from "./Components/MainNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Herosection from "./Components/Herosection";
import Signup from "./Components/Signup";
import SignIn


function App() {
  return (
    <>
     <BrowserRouter>
     <MainNav/>
     <Routes>

       <Route path="/" element={<Herosection />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/signup" element={<Signup />} />
       
     </Routes>

     </BrowserRouter>
    </>
  );
}
export default App;


