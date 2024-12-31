"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Head from "next/head";
import Layout from "./components/layout";
import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";
import Slider3 from "./components/Slider3";
import Slider4 from "./components/Slider4";
import Slider5 from "./components/Slider5";
import Slider6 from "./components/Slider6";
import Slider7 from "./components/Slider7";
import Slider8 from "./components/Slider8";
import Slider9 from "./components/Slider9";
import Slider10 from "./components/Slider10";
import Slider11 from "./components/Slider11";
import { motion } from "framer-motion";

const Home = () => {
  const [audioStarted, setAudioStarted] = useState(false);
  const [audio, setAudio] = useState(null);
  const [playAudio, setPlayAudio] = useState(null); // Estado para manejar la elección del audio
  const [showOptions, setShowOptions] = useState(true); // Estado para mostrar las opciones

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };
  // Iniciar el audio solo en el lado del cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const newAudio = new Audio("/assets/images/manuelmedrano.mp3");
      newAudio.volume = 0.5; // URL del audio
      setAudio(newAudio);
    }
  }, []);

  // Función para iniciar la canción cuando el usuario interactúe
  const startAudio = () => {
    if (audio) {
      audio
        .play()
        .then(() => {
          setAudioStarted(true);
          setPlayAudio(true); // Cuando el usuario decide reproducir la canción
        })
        .catch((error) => {
          console.error("No se pudo reproducir la música:", error);
        });
    }
  };

  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<div class="${className} h-6 w-6 bg-transparent"><img src="/assets/images/heart-wb.png"></div>`;
    },
  };

  // Manejar la selección de audio
  const handleOptionSelect = (play) => {
    setPlayAudio(play);
    setShowOptions(false); // Ocultar las opciones una vez que el usuario selecciona
    if (play) {
      startAudio(); // Iniciar audio si el usuario selecciona reproducir
    } else {
      setAudioStarted(true); // Ir a la siguiente pantalla sin audio
    }
  };

  return (
    <div>
      <Head>
        <meta name="description" content="Nuestro 2024 juntos" key="desc" />
        <meta charset="utf-8" />
        <meta
          property="og:image"
          content="/assets/images/heart-minimalist.png"
        />
      </Head>

      {/* Pantalla inicial con opciones para reproducir o no reproducir */}
      {showOptions && (
        <motion.div
          className="flex justify-center items-center w-full h-screen bg-[#faebeb]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center">
            <h1 className="mr-3 font-new_september text-4xl mb-6">
              Si puedes reproduce esta canción cielo 🌸
            </h1>
            <div className="flex justify-center space-x-6">
              {/* Opción para reproducir la canción */}
              <motion.button
                onClick={() => handleOptionSelect(true)}
                className="flex items-center justify-center w-20 h-20 bg-red-50 text-rose-500 font-semibold shadow-lg transform transition duration-300 ease-in-out rounded-full hover:bg-red-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="/assets/images/play.png" alt="imageplay"></img>
              </motion.button>
              {/* Opción para no reproducir la canción */}
              <motion.button
                onClick={() => handleOptionSelect(false)}
                className="w-20 h-20 bg-gray-300 text-3xl text-slate-700 font-new_september font-extrabold shadow-lg transform transition duration-300 ease-in-out 
             rounded-full hover:bg-gray-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                X
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Mostrar el Swiper independientemente de si la canción se reproduce o no */}
      {(audioStarted || !showOptions) && (
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Layout>
              <Slider1 />
            </Layout>
          </SwiperSlide>
          <SwiperSlide>
            <Layout>
              <Slider2 />
            </Layout>
          </SwiperSlide>
          <SwiperSlide>
            <Layout>
              <Slider3 />
            </Layout>
          </SwiperSlide>
          <SwiperSlide>
            <Layout>
              <Slider4 />
            </Layout>
          </SwiperSlide>
          <SwiperSlide>
            <Layout>
              <Slider5 />
            </Layout>
          </SwiperSlide>
          <SwiperSlide>
            <Layout>
              <Slider6 />
            </Layout>
          </SwiperSlide>
          <SwiperSlide>
            <Layout>
              <Slider7 />
            </Layout>
          </SwiperSlide>
          <SwiperSlide>
            <Layout>
              <Slider8 />
            </Layout>
          </SwiperSlide>
          <SwiperSlide>
            <Layout>
              <Slider10 />
            </Layout>
          </SwiperSlide>
          <SwiperSlide>
            <Layout>
              <Slider11 />
            </Layout>
          </SwiperSlide>
          <SwiperSlide>
            <Layout>
              <Slider9 />
            </Layout>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};

export default Home;
