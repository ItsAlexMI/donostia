import { useEffect } from "react";
import Carrousel from "../components/Carrousel";
import DonostiaCards from "../components/DonostiaCards";
import DonostiaEvents from "../components/DonostiaEvents";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    if (!window.location.search.includes("reloaded=true")) {
      window.location.href = `${window.location.pathname}?reloaded=true`;
    }
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <Carrousel />
      <div className="bg-gray-50 h-auto md:h-[750px]">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 container mx-auto md:mx-[450px] px-4 py-6 text-center md:text-left">
          Donostia Highlights
        </h2>
        <div className="container w-full md:w-[1200px] mx-auto md:mx-[450px] px-4 py-6 flex justify-center">
          <DonostiaCards />
        </div>
      </div>
      <div className="bg-white">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 container mx-auto md:mx-[450px] px-4 py-6 text-center md:text-left">
          Donostia Events
        </h2>
        <DonostiaEvents className="mb-10" />
        
      </div>
      
      <div className="mt-15"></div>
      <Footer />
    </div>
  );
};

export default Home;
