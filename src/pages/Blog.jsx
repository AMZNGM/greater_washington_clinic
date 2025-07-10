import LoadingScreen from "../components/LoadingScreen.jsx";
import Navbar from "../components/Navbar.jsx";
import SectionHeroBG from "../components/SectionHeroBG.jsx";
import Blogs from "../components/Blogs.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

function Blog() {
  return (
    <main className="overflow-x-hidden">
      <LoadingScreen />

      <Navbar liTextColor="text-black" />

      <SectionHeroBG title={`Blog`} />

      <Blogs />

      <Footer />

      <ScrollToTop />
    </main>
  );
}

export default Blog;
