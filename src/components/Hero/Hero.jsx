import HeroPng from "../../assets/coffee2.png";
import BgPng from "../../assets/website/coffee-beans-bg.png";

const Hero = () => {
  return (
    <>
      <div 
        style={{
          backgroundImage: `url(${BgPng})`, 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "100%"
        }} 
        className="min-h-[550px] sm:min-h-[600px] flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-2">
              <p
                data-aos="fade-up"
                data-aos-once="true"
                className="sm:text-6xl lg:text-4xl font-bold font-cursive2 text-gray-300"
              >
               Facilitez la vie de vos clients avec notre solution tout-en-un pour les coffee shops. Abonnez-vous et bénéficiez d'une page web personnalisée pour votre café, accessible via un simple QR code, où toutes les informations essentielles sont à portée de main.
              </p>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="bg-gradient-to-r w-80 from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-gray-300 font-bold py-2 px-4 rounded-full font-cursive2">
                  Coffee And Code
                </button>
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-1 "
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="biryani img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin "
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
              >
                {/* <h1 className="text-white">Hey Coder</h1> */}
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
              >
                {/* <h1 className="text-white">Best Coffee</h1> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
