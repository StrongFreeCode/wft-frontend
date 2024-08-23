/* eslint-disable @next/next/no-img-element */
'use client'
import about from "@/data/about.json";
import { Caveat, Inter, Roboto } from "next/font/google";
import { Valores } from "@/components/Valores";
import { useGlobalContext } from "@/helpers/Global";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import Image from "next/image";

const inter = Inter({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});
const caveat = Caveat({
  weight: ["700"],
  display: "swap",
  subsets: ["cyrillic"],
});

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

export default function Example() {
  const { language } = useGlobalContext();
  const [aboutData, setAboutData] = useState(null);
  const [valoresData, setValoresData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = language === 'es' ? about.about_es[0].data[0] : about.about_en[0].data[0];
    const valores = language === 'es' ? about.about_es[0].valores[0] : about.about_en[0].valores[0];
    setAboutData(data);
    setValoresData(valores);
    setIsLoading(false);
  }, [language]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <main className={`text-slate-500 mb-8`}>
      <div className="grid grid-rows-1 md:grid-cols-2 mx-auto ">
        <div className=" order-2 md:order-1 mx-4 mb-3">
          <div className="">
            <br />
            <h1 className="  text-4xl  text-fuchsia-900 font-semibold  dark:text-fuchsia-400 ${inter.className}">
              {language == 'es' ? 'Historia' : 'History'}
            </h1>
            <article
              className={`dark:text-white text-justify ml-2 ${roboto.className}`}
            >
              {aboutData.mision}
            </article>
          </div>
          <div className="">
            <br />
            <h1 className=" text-4xl text-fuchsia-900 dark:text-fuchsia-400 font-bold">
              Vision
            </h1>
            <article
              className={`dark:text-white text-justify ml-2 ${inter.className}`}
            >
              {aboutData.vision}
            </article>
          </div>
        </div>
        <div className=" order-1 md:order-2 flex justify-center mt-4 md:my-auto">
          <Image
            width={300}
            height={300}
            className=" h-[300px] w-[300px] object-cover  rounded-full"
            src="\assets\wft\logo X en png.png"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
        <div className="flex justify-center items-center">
          <Image
            width={300}
            height={300}
            className=" h-[300px] w-[300px] object-cover  rounded-sm hover:scale-105 transition duration-500"
            src="/assets/cuba-beach-car.jpg"
            alt=""
          />
        </div>
        <div className="">
          <h1 className=" text-5xl text-center  text-fuchsia-900 font-semibold  dark:text-fuchsia-400 ${inter.className}">
            Wonder-Fulltime
          </h1>
          <div className="grid grid-cols-4 md:grid-cols-1 md:gap-4 mt-4 mx-4 text-center font-bold dark:text-purple-100 text-purple-950">
            <div>
              <h1> {language == 'es' ? 'Fundada' : 'Founded'}</h1>
              <p>2015</p>
            </div>
            <div>
              <h1>{language == 'es' ? 'Oficina' : 'Office'}</h1>
              <p>2</p>
            </div>
            <div>
              <h1>{language == 'es' ? 'Tiempo de Trabajo' : 'Working Time'}</h1>
              <p>24/7</p>
            </div>
            <div>
              <h1>{language == 'es' ? 'Empleados' : 'Employees'}</h1>
              <p>50+</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className=" text-center gap-4 grid grid-rows-1 md:grid-cols-2 mx-4">
        <div>
          <div className=" md:container md:mx-auto md:px-8">
            <h1 className="text-4xl text-fuchsia-900 dark:text-fuchsia-400 my-2 font-bold ">
              {language == 'es' ? 'Valores' : 'Values'}
            </h1>
            <Valores nombre={language == 'es' ? 'Aventura' : 'Adventure'} datos={valoresData.aventura} />
            <Valores
              nombre={language == 'es' ? 'Sostenibilidad' : 'Sustainability'}
              datos={valoresData.sostenibilidad}
            />
            <Valores nombre={language == 'es' ? 'Compromiso' : 'Compromise'} datos={valoresData.compromiso} />
            <Valores nombre={language == 'es' ? 'Lealtad' : 'Loyalty'} datos={valoresData.lealtad} />
            <Valores nombre={language == 'es' ? 'Respeto' : 'Respect'} datos={valoresData.respeto} />
          </div>
        </div>
        <div className="flex justify-center items-center mx-auto">
          <Image
            width={500}
            height={500}
            className=" h-full w-full object-cover  "
            src="\assets\varadero.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="text-xl mx-4 my-14 font-serif font-extrabold text-center text-gray-400 ">
          {language == 'es' ? `“Viaja con nosotros, crea recuerdos para siempre.”` : `“Travel with us, create memories forever.”`}
        </h1>
      </div>
    </main>
  );
}