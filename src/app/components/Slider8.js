import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Slider8 = () => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false); // Para saber si el slider es visible
  const fullText =
    "Y Y podría relatarte más cosas que vivimos juntos como la vez que te disfrazaste o también cuando me hiciste la carta con tu mayor sinceridad posible, así y muchas anécdotas más vivimos este año. Este año que viene será increíble, para los dos. Este es nuestro año y vamos a conocernos, yo lo sé. Te amo muchísimo. Eres con quien iniciaré este año y lo terminaré. Gracias por todos los sentimientos que has generado en mí este año, gracias por ser tú, gracias por ser mi amor. Todo esto lo hago con el amor que te tengo y para que recuerdes nuestras experiencias juntos, nuestros momentos y todo. Te amo, Laura Malaver 💖.";

  const textRef = useRef(null);

  useEffect(() => {
    // Crear el Intersection Observer para detectar cuando el componente entra en la vista
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Cuando el componente entra en la vista
        }
      },
      { threshold: 0.5 } // Se activa cuando el 50% del componente está visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current); // Limpiar el observador
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const interval = setInterval(() => {
        setText((prevText) => prevText + fullText[index]);
        index += 1;
        if (index === fullText.length) {
          clearInterval(interval);
        }
      }, 100); // Velocidad de la máquina de escribir (50ms por carácter)

      return () => clearInterval(interval); // Limpiar el intervalo cuando se desmonte
    }
  }, [isVisible]);

  return (
    <div className="h-screen w-full relative bg-red-200 overflow-hidden">
      <div className="h-full flex items-center justify-center text-[#d36592]">
        <h1
          ref={textRef} // Referencia para el observador
          className="text-center font-new_september text-lg w-[90%] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-3xl leading-relaxed sm:leading-loose"
        >
          {text}
        </h1>
      </div>
      {/* Flor Izquierda Arriba */}
      <div className="absolute -top-16 -left-16 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
        <Image
          src={"/assets/images/floresred1.png"}
          width={600}
          height={600}
          alt="floresred1"
          className="object-cover"
        />
      </div>
      {/* Flor Derecha Arriba */}
      <div className="absolute -top-16 -right-16 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] ">
        <Image
          src={"/assets/images/floresred2.png"}
          width={600}
          height={600}
          alt="floresred2"
          className="object-cover"
        />
      </div>
      {/* Flor Izquierda Abajo */}
      <div className="absolute -bottom-16 -left-16 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] ">
        <Image
          src={"/assets/images/floresred3.png"}
          width={600}
          height={600}
          alt="floresred3"
          className="object-cover"
        />
      </div>
      {/* Flor Derecha Abajo */}
      <div className="absolute -bottom-16 -right-16 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
        <Image
          src={"/assets/images/floresred4.png"}
          width={600}
          height={600}
          alt="floresred4"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider8;
