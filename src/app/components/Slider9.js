import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Slider9 = () => {
  const [response, setResponse] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedResponse = localStorage.getItem("response");
    if (savedResponse) {
      setResponse(savedResponse);
    }
  }, []);

  const handleResponse = async (answer) => {
    setIsSubmitting(true);
    try {
      localStorage.setItem("response", answer);
      setResponse(answer);
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-lime-100 text-center font-new_september p-4">
      <h1 className="text-4xl mb-4">Entonces..</h1>
      <h1 className="text-2xl md:text-3xl lg:text-4xl mb-8">
        ¿Aceptas pasar este 2025 a mi lado?, siendo mi compañera, mi mejor
        amiga, mi novia, mi todo
      </h1>
      {!response && (
        <div className="flex gap-4">
          <button
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition text-3xl"
            onClick={() => handleResponse("Sí")}
            disabled={isSubmitting}
          >
            Sí 💖
          </button>
          <button
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition text-3xl"
            onClick={() => handleResponse("Sí")}
            disabled={isSubmitting}
          >
            También sí :) 💛
          </button>
        </div>
      )}
      <div>
        <Image
          className="animate-pulse"
          src={"/assets/images/snoopy2.webp"}
          width={100}
          height={100}
          alt="Snoopy"
        ></Image>
      </div>
      {response === "Sí" && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-3xl text-green-600"
        >
          Este es nuestro año, confio en ello, te amo Lau, amor de mi vida.
          🌻🌺🌸🏵️🌹💕
        </motion.div>
      )}
      {response === "No" && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-3xl text-red-600"
        >
          😢 Está bien, seguiré intentando hacerte feliz.
        </motion.div>
      )}
    </div>
  );
};

export default Slider9;
