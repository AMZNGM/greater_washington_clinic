import LoadingScreen from "../components/LoadingScreen.jsx";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import HeroBG from "../components/HeroBG.jsx";
import Services from "../components/Services.jsx";
import Offer from "../components/Offer.jsx";
import Consulation from "../components/Consulation.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Locations from "../components/Locations.jsx";
import Blogs from "../components/Blogs.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <LoadingScreen />

      <Navbar liTextColor="text-white" />

      <HeroBG />

      <Hero />

      <Services />

      <Offer />

      <Consulation />

      <Testimonials />

      <Locations />

      <Blogs limit={3} />

      <Footer />

      <ScrollToTop />
    </main>
  );
};

export default Home;
