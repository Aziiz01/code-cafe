import Img2 from "../../assets/coffee2.png";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Création de page web personnalisée",
    description:
      "Offrez à vos clients une page dédiée avec le nom, le logo, la description, le menu, le mot de passe Wi-Fi, et les réseaux sociaux de votre café.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Génération de QR codes",
    description:
      "Facilitez l'accès à vos services avec deux QR codes : un pour le Wi-Fi et un pour la page web de votre café.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Connexion simplifiée",
    description:
      "Vos clients peuvent facilement se connecter à votre Wi-Fi et découvrir toutes les informations sur votre café directement depuis leur smartphone.",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Nos Services 
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[400px] h-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold font-cursive2">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high font-cursive2 text-sm line-clamp-2 h-[200px]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
