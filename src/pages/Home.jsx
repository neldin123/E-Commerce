import Categories from "../components/Categories/Categories";
import Hero from "../components/home/Hero";
import Latest from "../components/home/Latest";
import SeasonOffer from "../components/home/SeasonOffer";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Latest />
      <SeasonOffer />
      <Testimonials />
    </>
  );
};

export default Home;
