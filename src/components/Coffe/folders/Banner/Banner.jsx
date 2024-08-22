import  { useEffect, useState } from "react";
import axios from "axios";
import BannerImg from "../../../../assets/coffee-white.png";

import BgImg from "../../../../assets/website/coffee-texture.jpg";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Access the route parameter

  useEffect(() => {
    axios.get(`http://localhost:9090/coffe/coffes/${id}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return null;

  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive"
                >
                  Suivez {data.coffe_name} !
                </h1>
                

                <div className="grid grid-cols-2 gap-6">
      <div className="space-y-5">
        <div data-aos="fade-up" className="flex items-center gap-3">
          <a
            href={data.lien_fb}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            <FaFacebookF className="text-2xl" />
            <span>Facebook</span>
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex items-center gap-3"
        >
          <a
            href={data.lien_ig}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition duration-300"
          >
            <FaInstagram className="text-2xl" />
            <span>Instagram</span>
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex items-center gap-3"
        >
          <a
            href={data.num_tel}
            className="flex items-center gap-3 p-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300"
          >
            <FaPhoneAlt className="text-2xl" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
      <div
        data-aos="slide-left"
        className="border-l-4 border-primary/50 pl-6 space-y-2"
      >
        <h1 className="text-2xl font-semibold font-cursive">
          Restez Connecté !
        </h1>
        <p className="text-sm text-gray-500">
        Suivez-nous sur les réseaux sociaux et contactez-nous pour les dernières mises à jour et offres spéciales.
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

export default Banner;
