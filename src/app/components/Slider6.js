import React from "react";
import Image from "next/image";

const images = [
  { title: "Libros", src: "/assets/images/likes/1.webp", alt: 1 },
  { title: "Ajiaco", src: "/assets/images/likes/2.avif", alt: 2 },
  { title: "Snoopy", src: "/assets/images/likes/3.webp", alt: 3 },
  { title: "Harry Potter", src: "/assets/images/likes/4.avif", alt: 4 },
  { title: "Pizza", src: "/assets/images/likes/5.jpeg", alt: 5 },
  { title: "Animales (misha)", src: "/assets/images/likes/6.jpg", alt: 6 },
  { title: "Fotografía", src: "/assets/images/likes/7.jpg", alt: 7 },
];

const Slider6 = () => {
  return (
    <div className="min-h-screen w-full flex font-lazy_dog bg-violet-50 p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
        <h1 className="mb-8 text-3xl text-center text-gray-800">
          Gustos de mi pequeña Laura 💖☺️
        </h1>
        <div className="grid grid-cols-4 gap-4 w-full">
          {/* Fila 1 con 4 imágenes */}
          {images.slice(0, 4).map((image) => (
            <div key={image.alt} className="flex flex-col items-center">
              <div className="relative w-full max-w-[250px] aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="rounded-s-3xl rounded-e-lg object-cover border-[2.5px] border-[#f8c1c1]"
                />
              </div>
              <p className="mt-2 text-3xl text-center text-indigo-300">
                {image.title}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 w-full mt-4">
          {images.slice(4, 7).map((image) => (
            <div key={image.alt} className="flex flex-col items-center">
              <div className="relative w-full max-w-[250px] aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="rounded-s-3xl rounded-e-lg object-cover border-[2.5px] border-[#f8c1c1]"
                />
              </div>
              <p className="mt-2 text-3xl text-center text-indigo-300">
                {image.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider6;
