import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar/Navbar";
import Hero from "./folders/Hero/Hero";
import Services from "./folders/Services/Services";
import Banner from "./folders/Banner/Banner";
import AppStore from "./folders/AppStore/AppStore";

const Coffe = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services/>
      <Banner />
      <AppStore />
    </div>
  );
};

export default Coffe;
