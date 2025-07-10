import LoadingScreen from "../components/LoadingScreen.jsx";
import Navbar from "../components/Navbar.jsx";
import SectionHeroBG from "../components/SectionHeroBG.jsx";
import SingleBlogPage from "../components/SingleBlogPage.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import blogsData from "../data/blogsData.js";
import { useParams } from "react-router-dom";

function SingleBlog() {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === Number(id));

  return (
    <main className="overflow-x-hidden">
      <LoadingScreen />

      <Navbar liTextColor="text-black" />

      <SectionHeroBG title={blog ? blog.title : "Blog not found"} />

      <SingleBlogPage blog={blog} />

      <Footer />

      <ScrollToTop />
    </main>
  );
}

export default SingleBlog;
