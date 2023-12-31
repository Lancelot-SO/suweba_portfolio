import React, { useState } from "react";

const ProjectDetails = ({ item }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handlePopupClick = (e) => {
    // Close the popup when clicking outside of it
    if (e.target.classList.contains("popup-overlay")) {
      closePopup();
    }
  };

  return (
    <div key={item.id}>
      <div className="shadow-md shadow-gray-600 rounded-lg">
        <a href={item.href}>
          <img
            src={item.src}
            alt=""
            className="rounded-md duration-200 hover:scale-105 cursor-pointer"
          />
        </a>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full py-3">
            <a
              onClick={openPopup}
              className="cursor-pointer hover:underline   text-text-color w-1/2 px-6 py-3 m-4 text-center "
            >
              {item.title}
            </a>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 popup-overlay"
          onClick={handlePopupClick}
        >
          <div className="bg-white p-4 rounded-md max-w-screen-md w-full h-full md:mx-auto md:my-auto overflow-y-auto">
            <button
              className="absolute top-2 right-2 px-2 py-1 bg-text-color text-white hover:text-gray-900 rounded-full"
              onClick={closePopup}
            >
              X
            </button>
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <div className="mt-2 rounded-md max-w-full">
              <img src={item.src} alt={item.title} className="w-full h-auto" />
              <img src={item.src1} alt={item.title} className="w-full h-auto" />
              <img src={item.src2} alt={item.title} className="w-full h-auto" />
              <img src={item.src3} alt={item.title} className="w-full h-auto" />
              <img src={item.src4} alt={item.title} className="w-full h-auto" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
