import React from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider5 = () => {
  return (
    <div className="h-screen w-full font-lazy_dog flex flex-col">
      <h1 className="text-center pt-16 text-4xl">Un poco de nosotros 🥰</h1>
      <Carousel responsive={responsive} className="w-full h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <Image
            className="object-fill w-full h-[350px]"
            src={"/assets/images/discord/1.jpg"}
            width={700}
            height={700}
            alt="discord1"
            quality={100}
          />
          <div className="text-center mt-3 text-xl">
            <p className="text-red-500">4 de Noviembre 9:32 pm</p>
            <p>Tu concentradita haciendo tus cosas y yo mirandote 🧡</p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            className="object-fill  w-full h-[350px]"
            src={"/assets/images/discord/2.jpg"}
            width={700}
            height={700}
            alt="discord2"
            quality={100}
          />
          <div className="text-center mt-3 text-xl">
            <p className="text-red-500">7 de Noviembre 10:10 pm</p>
            <p>Nosotros sonriendo y yo mirandote de nuevo, eres hermosa 💖</p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            className="object-fill w-[1000px] h-[350px]"
            src={"/assets/images/discord/3.jpg"}
            width={700}
            height={700}
            alt="discord3"
          />
          <div className="text-center mt-3 text-xl">
            <p className="text-red-500">12 de Noviembre 10:50 pm</p>
            <p>Tus lindos ojitos en frente de mi pantalla, es hermoso 💛</p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            className="object-fill w-[1000px] h-[350px]"
            src={"/assets/images/discord/4.jpg"}
            width={700}
            height={700}
            alt="discord4"
          />
          <div className="text-center mt-3 text-xl">
            <p className="text-red-500">13 de Noviembre 11:12 pm</p>
            <p>
              Tus linda sonrisa en frente de mi pantalla, es hermoso también 💛
            </p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            className="object-fill w-[1000px] h-[350px]"
            src={"/assets/images/discord/5.jpg"}
            width={700}
            height={700}
            alt="discord5"
          />
          <div className="text-center mt-3 text-xl">
            <p className="text-red-500">14 de Noviembre 10:57 pm</p>
            <p>
              Tus linda carita en frente de mi, otra vez, sigues siendo hermosa
              💛
            </p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            className="object-fill w-[1000px] h-[350px]"
            src={"/assets/images/discord/6.jpg"}
            width={700}
            height={700}
            alt="discord5"
          />
          <div className="text-center mt-3 text-xl">
            <p className="text-red-500">16 de Noviembre 10:57 pm</p>
            <p>
              Nosotros los más sonrientes, eres la primera mujer que me hace
              sonreir en camara 💜
            </p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            className="object-fill w-[1000px] h-[350px]"
            src={"/assets/images/discord/7.jpg"}
            width={700}
            height={700}
            alt="discord7"
          />
          <div className="text-center mt-3 text-xl">
            <p className="text-red-500">21 de Noviembre 9:45 pm</p>
            <p>
              Tú siendo productiva y yo mirándote, como siempre, eres a quien
              amo mirar💜
            </p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            className="object-fill w-[1000px] h-[350px]"
            src={"/assets/images/discord/8.jpg"}
            width={700}
            height={700}
            alt="discord8"
          />
          <div className="text-center mt-3 text-xl">
            <p className="text-red-500">21 de Noviembre 12:09 pm</p>
            <p>
              Fuaaa esa fotito tan seria, te contagié mi seriedad, pero sigues
              hermosa 💙
            </p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            className="object-fill w-[1000px] h-[350px]"
            src={"/assets/images/discord/9.jpg"}
            width={700}
            height={700}
            alt="discord9"
          />
          <div className="text-center mt-3 text-xl">
            <p className="text-red-500">2 de Diciembre 8:44 pm</p>
            <p>Papi soy tu vaquera, dimelo papi 👌☺️</p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            className="object-fill w-[1000px] h-[350px]"
            src={"/assets/images/discord/10.jpg"}
            width={700}
            height={700}
            alt="discord10"
          />
          <div className="text-center mt-3 text-xl">
            <p className="text-red-500">5 de Diciembre 11:02 pm</p>
            <p>
              Que bonita vista, VALENTINA MALAVER, así me dejaste mirando tu
              camarote 😒
            </p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            className="object-fill w-[1000px] h-[350px]"
            src={"/assets/images/discord/11.jpg"}
            width={700}
            height={700}
            alt="discord11"
          />
          <div className="text-center mt-3 text-xl">
            <p className="text-red-500">16 de Diciembre 9:09 pm</p>
            <p>
              Y ya una de las últimas con tu gorrito de navidad, mama noela 💓
            </p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            className="object-fill w-[1000px] h-[350px]"
            src={"/assets/images/discord/12.jpg"}
            width={700}
            height={700}
            alt="discord11"
          />
          <div className="text-center mt-3 text-xl">
            <p className="text-red-500">25 de Diciembre 5:54 pm</p>
            <p>
              Nosotros antes del juego del calamar que hicimos maratón y todo ❣️
            </p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            className="object-fill w-[1000px] h-[350px]"
            src={"/assets/images/discord/13.jpg"}
            width={700}
            height={700}
            alt="discord11"
          />
          <div className="text-center mt-3 text-xl">
            <p className="text-red-500">30 de Diciembre 7:49 pm</p>
            <p>
              Y esta vez antes de llegar el 31, sé que no estamos en el mejor
              momento pero igual juntos💖
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider5;
