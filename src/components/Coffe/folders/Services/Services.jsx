import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import menu from "../../../../assets/menu.jpg";
import { useParams } from "react-router-dom";

// Set up the app element for accessibility
Modal.setAppElement('#root');

const Services = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [servicesData, setServicesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Access the route parameter

  useEffect(() => {
    axios.get(`http://localhost:9090/coffe/coffes/${id}`)
    .then(response => {
        setServicesData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  },[id]); 

  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return null;

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-14 md:gap-5 place-items-center">
              <div
                key={servicesData.id}
                data-aos="fade-up"
                data-aos-delay={100}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group w-full max-w-full overflow-hidden"
              >
                <div className="relative w-full h-0 pb-[56.25%]">
                                {/*src={servicesData.menu} */}

                  <img
                    src={menu}
                    alt="Coffee Menu"
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer transform duration-300 group-hover:scale-105"
                    onClick={() => openModal(servicesData.menu)}
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{"Voir Menu"}</h1>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          &times;
        </button>
        <img
          src={selectedImg}
          alt="Full screen view"
          className="max-w-full max-h-screen object-contain"
        />
      </Modal>
    </>
  );
};

export default Services;
