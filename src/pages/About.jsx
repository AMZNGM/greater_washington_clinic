import LoadingScreen from "../components/LoadingScreen.jsx";
import Navbar from "../components/Navbar.jsx";
import SectionHeroBG from "../components/SectionHeroBG.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import WhyUs from "../components/WhyUs.jsx";
import BookNow from "../components/BookNow.jsx";
import ClientsTestimonials from "../components/ClientsTestimonials.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

function About() {
  return (
    <main className="overflow-x-hidden">
      <LoadingScreen />

      <Navbar liTextColor="text-black" />

      <SectionHeroBG title={`About us`} />

      <Hero />

      <Features />

      <WhyUs />

      <BookNow />

      <ClientsTestimonials />

      <Footer />

      <ScrollToTop />
    </main>
  );
}

export default About;
