"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useGlobalContext } from "@/helpers/Global";


export const HeroSection = () => {
  const { language } = useGlobalContext()

  const mainText = {

    es: `Bienvenido a Cuba

Un conjunto de playas, cenotes, arte y religión conforman toda una cultura por conocer y disfrutar en el archipiélago constituido por la isla mayor de las Antillas llamada Cuba, la Isla de la Juventud (antes Isla de Pinos), y 4,195 cayos, islotes e islas.
Entre la salsa que contagia con su ritmo cadente, hermosos autos "americanos", tabacos, mojitos ... ¡ven y disfruta de la atmósfera cubana! Desde La Habana, en auto clásico de alquiler, descubrirá esta hermosa isla.
Ciudades con arquitectura colonial, parques naturales y playas paradisíacas lo están esperando. Los encuentros con las calles de las ciudades coloniales son una oportunidad para despertar todos sus sentidos: olor a tabaco flotando en las calles, café, notas de ron y rumba compartidas son un tiempo maravilloso para el disfrute.
En este viaje a la tierra más linda que "ojos humanos hayan visto" los toures son solo una de las opciones que ofrecemos .
Podemos diseñar alojamientos y servicios de tranfer desde aeropuertos hasta donde deseen trasladarse. Somos un equipo con guías especializados en siete idiomas y chóferes locales. 
Cuba atrae a los viajeros por sus ciudades coloniales, por su música, por sus plantaciones de tabaco y sus playas naturales.
Un viaje por Cuba es una mezcla de cultura e historia rodeados de exuberante exotismo. La isla da la bienvenida con la alegría y el ritmo que caracterizan a los cubanos.`,
    en: `Welcome to Cuba
A set of beaches, cenotes, art and religion make up an entire culture to know and enjoy in the archipelago made up of the largest island of the Antilles called Cuba, the Isle of Youth (formerly the Isle of Pines), and 4,195 keys, islets and islands.
Between the salsa that infects with its lilting rhythm, beautiful "American" cars, cigars, mojitos... come and enjoy the Cuban atmosphere! From Havana, by rental classic car, you will discover this beautiful island.
Cities with colonial architecture, natural parks and paradisiacal beaches are waiting for you. Encounters with the streets of colonial cities are an opportunity to awaken all your senses: the smell of tobacco floating in the streets, coffee, notes of rum and rumba shared are a wonderful time to enjoy.`
  }

  const typeText = {
    es: [
      `"Cuba es una melodía que `,
      3000,
      `resuena y se siente en cada rincón`,
      3000,
      ` de la isla."`,
      1500,
      `Únase a nosotros para descubrirlo.`,
    ],
    en: [
      `"Cuba is a melody that `,
      3000,
      `resonates and is felt in every corner`,
      3000,
      ` of the island."`,
      1500,
      `Join us to discover it.`,
    ],
  };

  return (
    <section className="lg:py-16 ml-4 mb-4 ">
      <div className="pt-4">

        <h1 className="dark:text-white text-center  text-black mb-4  lg:leading-normal font-extrabold">
          <span className="text-transparent text-xl md:text-2xl bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-800 dark:from-primary-400 dark:to-secondary-600">
            {language == 'es' ? "Explora los Tesoros de la Isla" : 'Explore the Treasures of the Island'}{" "}
          </span><br></br>
          <span className="bg-gradient-to-r text-center justify-center text-3xl md:text-4xl lg:text-6xl  from-blue-800 to-cyan-500 bg-clip-text text-transparent animate-gradient">WONDERFULLTIME</span>
          <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg mb-6 lg:text-xl">
            {language == 'es' ? `“Viaja con nosotros, crea recuerdos para siempre.”` : `“Travel with us, create memories forever.”`}
          </p>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-12 text-center mx-auto container mt-6 md:mt-0">

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <p className="dark:text-slate-200 text-slate-800 ">
            <TypeAnimation
              sequence={typeText[language]}
              className="text-2xl sm:text-3xl lg:text-5xl"
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>

          <TextDisplay language={language} mainText={mainText} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div>
            <div className="">
              <Image
                src="/assets/wft/logo X en png.png"
                alt="hero image"
                className="rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative"
                width={300}
                height={300}
              />
            </div>
            <Link
              href="/about"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 mr-4"
            >
              <span className="block bg-white text-black hover:dark:text-gray-800 font-bold hover:bg-slate-300 rounded-full px-5 py-2">
                {language == 'es' ? 'Nosotros' : ' About us'}
              </span>
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-black text-grey-300 font-bold hover:bg-gray-800 hover:text-white rounded-full px-5 py-2">
                {language == 'es' ? 'Revistas' : 'Magazine'}
              </span>
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const TextDisplay = ({ language, mainText }) => {
  const [showFullText, setShowFullText] = useState(false);

  const text = language === "es" ? mainText.es : mainText.en;
  const displayText = showFullText ? text : text.slice(0, 300) + (text.length > 300 ? '...' : '');

  return (

    <div className="text-justify mr-4 mt-4 text-slate-500 dark:text-white font-semibold">
      <p>{displayText}</p>
      {text.length > 200 && (
        <button className="text-blue-500 hover:text-blue-700" onClick={() => setShowFullText(!showFullText)}>

          {showFullText ? 'Leer menos' : 'Leer más'}
        </button>
      )}
    </div>
  );
};

export default HeroSection;