
import React, { useState } from 'react';
import Design from '../Design/Design';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/poert1.png",
    "/port2.png",
    "/port3.png",
    "/poert1.png",
    "/port2.png",
    "/port3.png",
  ];

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col items-center justify-center py-20">
        <h2 className="mb-4 text-4xl font-bold text-[#2c3e50]">PORTFOLIO COMPONENT</h2>
        <Design style={{ backgroundColor: '#2c3e50', color: '#2c3e50' }} />

        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-10 px-5">
          {images.map((imgSrc, index) => (
            <div key={index} className="relative cursor-pointer w-full">
              <img src={imgSrc} alt={`Portfolio ${index}`} className="rounded-md w-full" />
              <div
                className="overlay bg-[#1abc9c] absolute inset-0 rounded-md flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                onClick={() => setSelectedImage(imgSrc)}
              >
                <i className="fa-solid fa-plus text-white text-6xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[80%] rounded-lg transform scale-100 hover:scale-105 transition duration-300"
          />
          <span
            className="absolute top-6 right-8 text-white text-5xl font-bold cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </span>
        </div>
      )}
    </>
  );
}
