import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import ScrollStory from "../components/scrollStory/ScrollStory";
import ProductViewer from "../components/productViewer/ProductViewer";
import Gallery from "../components/gallery/Gallery";
import Specs from "../components/specs/Specs";
import PageTransition from "../components/layout/PageTransition";
import AddToCart from "../components/cart/AddToCart";

const Home = () => {
  return (
    <div className="pt-15">
      <PageTransition>
        <Hero />
        <Features />
        <ScrollStory />
        <ProductViewer />
        <Gallery />
        <Specs/>
        <AddToCart/>
      </PageTransition>
    </div>
  );
};

export default Home;
