import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/assets/images/spend/1.jpg",
    alt: "1",
    message: "Viendo la serie El juego del calamar 🦑",
  },
  {
    src: "/assets/images/spend/2.jpg",
    alt: "2",
    message: "Viendo la serie 🦑, pronto estaremos en persona 💖",
  },
  {
    src: "/assets/images/spend/3.jpg",
    alt: "3",
    message: "Las llamadas en el bus 🚌",
  },
  {
    src: "/assets/images/spend/4.jpg",
    alt: "4",
    message: "O cuando estás modo fotografa 📸",
  },
  {
    src: "/assets/images/spend/5.jpg",
    alt: "5",
    message: "O las llamadas en discord o whatssap por horas 📞",
  },
  {
    src: "/assets/images/spend/6.jpg",
    alt: "6",
    message: "O cuando trabajas toda bonita 💼",
  },
  {
    src: "/assets/images/spend/7.jpg",
    alt: "7",
    message: "Y lo último, la misha y la serie 🐱 ❣️",
  },
];

const Slider7 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center font-lazy_dog text-8xl bg-orange-200">
      <h1 className="mb-2 text-5xl text-center">
        I always enjoy being with you dear 💖☺️
      </h1>
      <div className="flex gap-4 mb-3">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-200 rounded-lg shadow text-2xl"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-200 rounded-lg shadow text-2xl"
        >
          Next
        </button>
      </div>
      <div className="relative h-[600px] md:w-[49%] w-full">
        <AnimatePresence>
          {images.map(
            (image, index) =>
              index === currentIndex && (
                <motion.div
                  key={image.alt}
                  className="absolute h-full w-full flex flex-col items-center"
                >
                  <motion.img
                    src={image.src}
                    alt={image.title}
                    className="h-[80%] w-full md:object-cover object-contain rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 3 }}
                  />
                  <motion.p
                    className="mt-3 text-3xl text-center text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 3 }}
                  >
                    {image.message}
                  </motion.p>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slider7;
