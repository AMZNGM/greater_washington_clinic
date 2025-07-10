import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AppWrapper from "./components/AppWrapper.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Consultation from "./pages/Consultation.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import SingleService from "./pages/SingleService.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import SingleTeam from "./pages/SingleTeam.jsx";
import Team from "./pages/Team.jsx";

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/singleService/:serviceId" element={<SingleService />} />
          <Route path="/SingleBlog/:id" element={<SingleBlog />} />
          <Route path="/team/:id" element={<SingleTeam />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
};

export default App;
