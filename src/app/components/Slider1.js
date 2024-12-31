import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Importar framer-motion

const Slider1 = () => {
  const today = new Date();
  const day = today.getDate();
  const monthName = today.toLocaleString("es-ES", { month: "long" });
  const year = today.getFullYear();

  return (
    <div className="h-screen w-full flex items-center justify-center font-lazy_dog text-8xl ">
      {/* Fecha con animación */}
      <motion.div
        className="absolute top-4 left-5 text-black text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="flex">
          <div className="mr-2 text-[#f8c1c1]">{day}</div> de
          <div className="mr-2 ml-2 text-[#f8c1c1]">{monthName}</div>
        </div>
        <div className="flex justify-center">
          del
          <div className="ml-2 text-[#f8c1c1]">{year}</div>
        </div>
      </motion.div>

      {/* Títulos y fotos de Lau y Chris */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <motion.div
          className="flex item items-center"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="mr-3">Nosotros</h1>
          <Image
            src={"/assets/images/heart-minimalist.png"}
            width={60}
            height={60}
            alt="heart-minimalist"
          />
        </motion.div>

        <motion.div
          className="flex items-center"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="mr-2 text-[#f8c1c1] text-6xl">Lau</h1>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={"/assets/images/Lau.jpg"}
              width={80}
              height={80}
              alt="lau"
              className="object-cover border-[2.5px] border-[#f8c1c1] rounded-full w-20 h-20 "
            />
          </motion.div>

          <h1 className="mr-4 ml-3 text-6xl">&</h1>
          <h1 className="mr-2 text-[#7bc191] text-6xl">Chris</h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={"/assets/images/Chris.jpg"}
              width={400}
              height={400} // Mantén el mismo tamaño que el contenedor
              alt="chris"
              className="object-cover border-[2.5px] border-[#7bc191] rounded-full w-20 h-20" // Añadido para asegurar que la imagen sea redonda
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Imagen de línea */}
      <motion.div
        className="absolute mt-80 -right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Image
          src={"/assets/images/line-main.png"}
          width={920}
          height={400}
          alt="heart-minimalist"
        />
      </motion.div>
    </div>
  );
};

export default Slider1;
