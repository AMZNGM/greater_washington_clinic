import LoadingScreen from "../components/LoadingScreen.jsx";
import Navbar from "../components/Navbar.jsx";
import SectionHeroBG from "../components/SectionHeroBG.jsx";
import ContactUs from "../components/ContactUs.jsx";
import Locations from "../components/Locations.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

function Consultation() {
  return (
    <main className="overflow-x-hidden">
      <LoadingScreen />

      <Navbar liTextColor="text-black" />

      <SectionHeroBG title={`Online consultation`} />

      <ContactUs />

      <Locations />

      <Footer />

      <ScrollToTop />
    </main>
  );
}

export default Consultation;
