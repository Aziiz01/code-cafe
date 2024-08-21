import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroPng from "../../../../assets/logo.jpg"; // Default image in case API fails
import { useParams } from "react-router-dom";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:9090/coffe/coffes/${id}`)
      .then(response => {
        setHeroData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
  <h1
    data-aos="fade-up"
    data-aos-once="true"
    className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-white leading-tight"
  >
    {heroData.coffe_name}
  </h1>
  <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mt-4">
    {heroData.description}
  </p>
  
</div>

            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
            >
              {/*src={heroData.logo || HeroPng} */}
              <img
                data-aos-once="true"
                src={HeroPng} 
                alt={heroData.title || "logo"}
                className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 mx-auto spin rounded-full object-cover"
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
              >
                <h1 className="text-white">☕</h1>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
              >
              <h1 className="text-white">Meilleur café</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
