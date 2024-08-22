import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Grâce à cette solution, mes clients n'ont plus à demander le mot de passe Wi-Fi ! Tout est si simple et accessible.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sabir ali",
    text: "La page web de mon café est magnifique et contient toutes les infos dont mes clients ont besoin. Un vrai gain de temps !",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dipankar kumar",
    text: "J'ai vu une nette amélioration de l'engagement client depuis que j'utilise cette solution. Mes clients adorent la simplicité des QR codes.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Satya Narayan",
    text: "Les QR codes sont un atout pour mon café. Mes clients apprécient de pouvoir accéder rapidement à notre menu et à notre Wi-Fi.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
