import LoadingScreen from "../components/LoadingScreen.jsx";
import Navbar from "../components/Navbar.jsx";
import SectionHeroBG from "../components/SectionHeroBG.jsx";
import SingleTeamMembers from "../components/SingleTeamMembers.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import doctors from "../data/doctorsData.js";
import { useParams } from "react-router-dom";

function SingleTeam() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === Number(id));

  return (
    <main className="overflow-x-hidden">
      <LoadingScreen />

      <Navbar liTextColor="text-black" />

      <SectionHeroBG title={doctor ? doctor.name : "Doctor not found"} />

      <SingleTeamMembers doctor={doctor} />

      <Footer />

      <ScrollToTop />
    </main>
  );
}

export default SingleTeam;
