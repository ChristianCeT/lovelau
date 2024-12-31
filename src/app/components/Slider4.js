import React from "react";
import Image from "next/image";

const Slider4 = () => {
  return (
    <div className="h-screen w-full font-lazy_dog flex flex-col justify-center bg-red-50 text-3xl">
      <div>
        <div className="text-center text-4xl mb-11 mx-12">
          Se que tienes mas obras mi hermosa Lau pero en este tiempo, me
          gustaron estas foto 🍕
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-evenly md:flex-row flex-col mx-10">
            <div className="flex w-full items-center mb-4 mr-6">
              <Image
                className="object-cover rounded-t-lg rounded-bl-3xl"
                alt="art2"
                src={"/assets/images/art/2.jpg"}
                width={230}
                height={200}
              ></Image>
              <p className="ml-6">
                Aqui el retrato de la Misha creado por ti bebe, disculpame usar
                tus imagenes pero son tan increibles que deseo ponerlas aqui
                tambien 🧡.
              </p>
            </div>
            <div className="flex w-full items-center mb-4">
              <Image
                className="object-cover rounded-t-lg rounded-bl-3xl"
                alt="art"
                src={"/assets/images/art/3.jpg"}
                width={230}
                height={200}
              ></Image>
              <p className="ml-6">
                Tus retratos siempre emmarcados y siempre yo viendote y
                observando cada paso que das adelante durante todo este tiempo,
                estoy orgulloso de ti 🧡.
              </p>
            </div>
          </div>
          <div className="flex w-[40%] bg-gray-100 items-center mb-4">
            <div className="w-full rounded-md">
              <Image
                className="object-cover rounded-t-lg rounded-bl-3xl max-w-40 max-h-72"
                alt="art3"
                src={"/assets/images/art/1.jpg"}
                width={400}
                height={200}
              ></Image>
            </div>
            <p className="ml-6">
              Y por ultimo, me puse muy feliz cuando estabas entregando tus
              obras de arte en Cogua, fue fantástico poder verte y que seas
              parte de ese proyecto, tienes un gran talento y tú lo sabes 🤍.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider4;
