import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-4xl font-bold text-4xl tracking-tight sm:text-6xl">
          We’re changing the way people shop.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          dolorem temporibus suscipit molestias sunt rerum a consectetur
          quisquam perspiciatis voluptas eligendi enim, in vitae? Minus ducimus
          explicabo ut rem minima!
        </p>
        <Button
          asChild
          size="lg"
          className="mt-10">
          <Link to="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
