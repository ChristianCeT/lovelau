import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Slider10 = () => {
  const [flowerPositions, setFlowerPositions] = useState([]);
  const [keyUpdate, setKeyUpdate] = useState(0); // Nuevo estado para forzar la actualización de las flores

  useEffect(() => {
    const generateRandomPositions = () => {
      // Generar posiciones aleatorias para las flores
      const positions = Array.from({ length: 15 }).map(() => ({
        top: `${Math.random() * 100}vh`, // Posición aleatoria en la altura de la ventana
        left: `${Math.random() * 100}vw`, // Posición aleatoria en el ancho de la ventana
        rotation: `${Math.random() * 360}deg`, // Rotación aleatoria
      }));
      setFlowerPositions(positions);
    };

    // Generar posiciones iniciales
    generateRandomPositions();

    const interval = setInterval(() => {
      generateRandomPositions(); // Cambiar las posiciones aleatorias cada 3 segundos
      setKeyUpdate((prevKey) => prevKey + 1); // Forzar la actualización del key
    }, 5000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-lime-100 text-center font-new_september p-4 relative overflow-hidden">
      <h1 className="text-5xl bg-gradient-to-r from-orange-400 to-lime-100 rounded-e-3xl mb-8">
        I know we've been through a lot but I just want to tell you
      </h1>

      <AnimatePresence>
        {flowerPositions.map((position, index) => (
          <motion.div
            key={`${index}-${keyUpdate}`} // Cambiar la key cada vez que se actualiza el estado
            className="absolute"
            style={{
              top: position.top,
              left: position.left,
              transform: `rotate(${position.rotation})`,
            }}
            initial={{ opacity: 0, scale: 0.5 }} // Comienza con baja opacidad y tamaño pequeño
            animate={{
              opacity: 0.5, // Opacidad final
              scale: 1, // Tamaño final
            }}
            exit={{ opacity: 0, scale: 0.5 }} // Sale con opacidad 0 y tamaño pequeño
            transition={{
              opacity: { duration: 3, ease: "easeInOut" }, // Suaviza la opacidad
              scale: { duration: 3, ease: "easeInOut" }, // Suaviza el cambio de tamaño
              delay: index * 0.5, // Retraso entre flores
            }}
          >
            <Image
              src={
                index % 2 === 0
                  ? "/assets/images/flowerblue.webp"
                  : "/assets/images/flowerrose.webp"
              }
              width={100}
              height={100}
              alt={index % 2 === 0 ? "floweblue" : "flowerrose"}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Slider10;
