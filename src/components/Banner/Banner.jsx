import React from "react";
import BannerImg from "../../assets/coffee-white.png"; // This could be changed to a relevant image for the service
import { FaWifi } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { IoQrCodeOutline } from "react-icons/io5";
import BgImg from "../../assets/website/coffee-texture.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Benner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="Coffee shop service"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive text-amber-950"
                >
                  Facilitez la gestion de votre café
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5 font-cursive2"
                >
                  Simplifiez l'expérience de vos clients avec nos services
                  innovants. Offrez-leur un accès facile à toutes les
                  informations de votre café grâce à nos solutions digitales
                  personnalisées.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <FaWifi className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                      <span className="font-cursive2 text-gray-500">QR Code pour le Wi-Fi</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <IoQrCodeOutline className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                      <span className="font-cursive2 text-gray-500">QR Code pour la page web</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <MdWeb className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span className="font-cursive2 text-gray-500">Page web personnalisée</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive text-amber-950">
                      Optimisez votre service
                    </h1>
                    <p className="text-sm text-gray-500 font-cursive2">
                      Avec nos services, vous pouvez offrir une expérience
                      client améliorée, simplifiant la vie de vos clients tout
                      en mettant en valeur votre café de manière unique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benner;
