import React from "react";
import BgPng from "../../../../assets/website/coffee-beans-bg.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {


  return (
    <>
      <div className="py-16" style={backgroundStyle}>
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-2xl mx-auto"
            >
              {/* Text section */}
              <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight text-center lg:text-left">
                Vous voulez ajouter votre café à Code Café ?
              </h1>
              <h2 className="text-xl font-semibold text-white text-center lg:text-left mt-4">
                Contactez-nous via :
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 p-4 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
                >
                  <FaPhoneAlt className="text-3xl" />
                  <span className="text-lg font-medium">92265519</span>
                </a>
                <a
                  href="mailto:contact@yourdomain.com"
                  className="flex items-center gap-4 p-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  <FaEnvelope className="text-3xl" />
                  <span className="text-lg font-medium">aziznacibben@gmail.com</span>
                </a>
              </div>
            </div>
            {/* Placeholder div */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
