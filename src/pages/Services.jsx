import LoadingScreen from "../components/LoadingScreen.jsx";
import Navbar from "../components/Navbar.jsx";
import SectionHeroBG from "../components/SectionHeroBG.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

function Services() {
  return (
    <main className="overflow-x-hidden">
      <LoadingScreen />

      <Navbar liTextColor="text-black" />

      <SectionHeroBG title={`Services`} />

      <ServiceCard />

      <Footer />

      <ScrollToTop />
    </main>
  );
}

export default Services;
