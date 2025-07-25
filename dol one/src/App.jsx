// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Index from "./pages/Index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appoinment from "./pages/Appoinment.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Feature from "./pages/Feature.jsx";
import Four from "./pages/Four.jsx";
import Service from "./pages/Service.jsx";
import Team from "./pages/Team.jsx";
import Testimonial from "./pages/Testimonial.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Index/>}/>
          <Route path="/Index" element={<Index />} />
          <Route path="/Appoinment" element={<Appoinment />} />
          <Route path="/Four zero four" element={<Four />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Features" element={<Feature />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </BrowserRouter>
      {/* <Index/> */}
      {/* <About/> */}
    </>
  );
}

export default App;
