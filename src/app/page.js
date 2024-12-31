"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";

import Layout from "./components/layout";
import Slider3 from "./components/Slider3";
import Slider4 from "./components/Slider4";
import Slider5 from "./components/Slider5";
import Slider6 from "./components/Slider6";
import Slider7 from "./components/Slider7";
import Slider8 from "./components/Slider8";
import Slider9 from "./components/Slider9";
import Slider10 from "./components/Slider10";
import Slider11 from "./components/Slider11";

const Home = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<div class="${className} h-6 w-6 bg-transparent"><img src="/assets/images/heart-wb.png"></div>`;
    },
  };

  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Nuestro 2024 juntos"
          key="desc"
        ></meta>
        <meta charset="utf-8" />
        <meta
          property="og:image"
          content="/assets/images/heart-minimalist.png"
        />
      </Head>
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
    </div>
  );
};

export default Home;
