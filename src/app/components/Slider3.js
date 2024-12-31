"use client";
import React from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import { motion } from "framer-motion"; // Importamos Framer Motion
import "react-photo-album/rows.css";

const photos = [
  {
    key: 1,
    src: "/assets/images/flowers/1.jpg",
    width: 2,
    height: 1,
  },
  {
    key: 2,
    src: "/assets/images/flowers/2.jpg",
    width: 5,
    height: 4,
  },
  {
    key: 3,
    src: "/assets/images/flowers/3.jpg",
    width: 3,
    height: 2,
  },
  {
    key: 4,
    src: "/assets/images/flowers/4.jpg",
    width: 4,
    height: 3,
  },
  {
    key: 5,
    src: "/assets/images/flowers/5.jpg",
    width: 4,
    height: 3,
  },
  {
    key: 6,
    src: "/assets/images/flowers/6.jpg",
    width: 4,
    height: 3,
  },
  {
    key: 7,
    src: "/assets/images/flowers/7.jpg",
    width: 4,
    height: 3,
  },
  {
    key: 8,
    src: "/assets/images/flowers/8.jpg",
    width: 4,
    height: 3,
  },
  {
    key: 9,
    src: "/assets/images/flowers/9.jpg",
    width: 4,
    height: 4,
  },
  {
    key: 10,
    src: "/assets/images/flowers/10.jpg",
    width: 4,
    height: 3,
  },
];

const Slider3 = () => {
  return (
    <motion.div
      className="h-screen w-full font-lazy_dog flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Animación de desvanecimiento del contenedor
    >
      <div className="flex md:flex-row flex-col">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }} // Animación de subida con desvanecimiento
        >
          <h1 className="text-center text-3xl md:text-5xl mb-4">
            Juntos cuando estabas ocupadita y amo tus flores 🌸
          </h1>
          <div className="text-2xl text-center px-11">
            <p>
              Aquí hay algunas cosas que nosotros hemos vivido durante todo este
              tiempo, quiero agradecerte por permitirme estar contigo cuando
              tenías manualidades,
            </p>
            <p className="font-bold text-red-400">
              SI YA SE QUE LA CAGUE POR QUE TE LO ENVIE EN WHATSSAP PERO IGUAAAL
              AAAAAA 😥, SOY IMBECIL
            </p>
            pero igual te amo 💖
          </div>
        </motion.div>

        <motion.div
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }} // Retraso en la aparición de las imágenes
        >
          <div className="md:max-w-[2000px] h-auto px-10">
            <RowsPhotoAlbum
              photos={photos}
              spacing={8}
              defaultContainerWidth={1200}
              sizes={[
                { viewport: "(max-width: 768px)", size: "calc(100vw - 16px)" },
                { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
                { viewport: "(min-width: 1200px)", size: "calc(100vw - 32px)" },
              ]}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Slider3;
