import React from "react";
import Image from "next/image";

const Slider2 = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center font-lazy_dog">
      <div className="w-[50%] bg-red-50 h-full">
        <div className="flex items-center ml-12 h-full">
          <Image
            className="object-cover border-[2.5px] border-[#e5a0a0] rounded-full w-64 h-64"
            src={"/assets/images/Lau2.jpg"}
            width={400}
            height={400}
            alt="lau"
          ></Image>
          <div className="text-2xl">
            <h1 className="text-3xl font-semibold text-[#e5a0a0] text-center">
              Laura Valentina Malaver Castiblanco
            </h1>
            <div className="flex items-center flex-col">
              <p className="font-semibold">Frases comunes:</p>
              <p>PUES PAILA</p>
              <p>Christian Alexander</p>
              <p>Qué dijiste...</p>
              <p>Niño</p>
              <p>Muchacho</p>
              <p>Sofiaaaaaaaaaa</p>
              <p>Es que estás bien gordito</p>
              <p>Aguepanela</p>
              <p>Profe</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-20">
        <Image
          src={"/assets/images/ballon-heart.png"}
          width={190}
          height={190}
          alt="lau"
        ></Image>
      </div>
      <div className="w-[2px] bg-black h-full mb-20"></div>
      <div className="w-[50%] bg-blue-50 h-full">
        <div className="flex items-center justify-end mr-12 h-full">
          <div className="text-2xl">
            <h1 className="text-3xl font-semibold text-[#88b8da] text-center">
              Christian Alvaro Cervantes Tanta
            </h1>
            <div className="flex items-center flex-col">
              <p className="font-semibold">Frases comunes:</p>
              <p>Haiga..</p>
              <p>Amoooor (voz femenina o de niño)</p>
              <p>Valentina Malaver</p>
              <p>Que hermosa estás</p>
              <p>Bebé</p>
              <p>Estudiante..</p>
              <p>Qué haces?</p>
              <p>Cevicheeee</p>
            </div>
          </div>
          <Image
            className="object-cover border-[2.5px] border-[#88b8da] rounded-full w-64 h-64"
            src={"/assets/images/Chris2.jpg"}
            width={400}
            height={400}
            alt="lau"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
