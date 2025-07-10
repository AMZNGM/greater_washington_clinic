import LoadingScreen from "../components/LoadingScreen.jsx";
import Navbar from "../components/Navbar.jsx";
import SectionHeroBG from "../components/SectionHeroBG.jsx";
import ServiceHero from "../components/ServiceHero.jsx";
import SuccessfulCases from "../components/SuccessfulCases.jsx";
import FormBG from "../components/FormBG.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { useParams } from "react-router-dom";
import { services } from "../data/servicesData";

function SingleService() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === parseInt(serviceId));
  const title = service ? service.title : "Services";

  const modifiedService = service
    ? {
        ...service,
        icon: service.serviceBG,
      }
    : null;

  return (
    <main className="overflow-x-hidden">
      <LoadingScreen />

      <Navbar liTextColor="text-black" />

      <SectionHeroBG title={title} />

      <ServiceHero service={modifiedService} />

      <SuccessfulCases />

      <FormBG />

      <Footer />

      <ScrollToTop />
    </main>
  );
}

export default SingleService;
