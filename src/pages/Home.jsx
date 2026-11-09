import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Latest from "../components/Latest";
import SeasonOffer from "../components/SeasonOffer";
import Testimonials from "../components/Testimonials";

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
