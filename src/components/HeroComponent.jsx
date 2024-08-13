"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useGlobalContext } from "@/helpers/Global";

export const HeroSection = () => {
  const { language } = useGlobalContext()
  return (
    <section className="lg:py-16 ml-4 mb-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-12 text-center mx-auto container mt-6 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="dark:text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {language == 'es' ? "Hola, Bienvenidos" : 'Hello, Welcome'}{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={
                [
                  `"Cuba is a melody that `,
                  3000,
                  ` resonates and is felt in every corner`,
                  3000,
                  ` of the island."`,
                  1500,
                  ` Join us to discover it.`,
                  3000,
                  `"Cuba es una melodía que `,
                  3000,
                  `resuena y se siente en cada rincón`,
                  3000,
                  ` de la isla."`,
                  1500,
                  `Únase a nosotros para descubrirlo.`,

                ]}
              className="text-2xl sm:text-3xl lg:text-5xl"
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {language == 'es' ? `“Viaja con nosotros, crea recuerdos para siempre.”` : `“Travel with us, create memories forever.”`}
          </p>
          <div>
            <Link
              href="/about"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full sm:mr-4  bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              {language == 'es' ? 'Nosotros' : ' About us'}
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {language == 'es' ? 'Revistas' : 'Magazine'}
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="">
            <Image
              src="/assets/wft/logo X en png.png"
              alt="hero image"
              className="rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative"
              width={300}
              height={300}
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
