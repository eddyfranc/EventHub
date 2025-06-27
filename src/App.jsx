import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainNav from "./Components/MainNav";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import HomePage from "./Components/HomePage";
import Home from "./Components/Home";
import CreateEvent from "./Components/CreateEvent";
import EventDetails from "./Components/EventDetails";
import Features from "./Components/EnterpriseFeatures";
import AdminDashboard from "./Components/AdminDashboard";
import EnterpriseFeatures from "./Components/EnterpriseFeatures";
import ContactPage from "./Components/Contactpage";
import Exploreevents from "./Components/Exploreevents";
import UserProfilePage from "./Components/UserProfilePage";
import AdminLogin from "./Components/AdminLogin";

// Wrapper component to use useLocation
function AppWrapper() {
  const location = useLocation();
  
  // Hide MainNav on the /admindashboard route
  const hideMainNav = location.pathname === "/admindashboard";

  return (
    <>
      {!hideMainNav && <MainNav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route path="/eventdetails/:id" element={<EventDetails />} />
        <Route path="/features" element={<Features />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/enterprisefeatures" element={<EnterpriseFeatures />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/explore" element={<Exploreevents />} />
        <Route path="/user" element={<UserProfilePage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
