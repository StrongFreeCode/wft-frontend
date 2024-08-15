/* eslint-disable @next/next/no-img-element */
import { useGlobalContext } from "@/helpers/Global";
import MostrarEstrellas from "@/lib/Estrellas";
import React, { useEffect } from "react";
import { FaClock, FaCommentAlt } from "react-icons/fa";
import { services } from "@/data/servicios.json";
import Link from "next/link";
import ModalComponent from "./ModalComponent";
import { Spinner } from "flowbite-react";



export const Details = ({ datos, resultado, isLoading }) => {
  const { language } = useGlobalContext();
  const whatsapp = {
    number: 5363137847,
    text: `${language == "es" ? "Me interesa reservar" : `I'm interested in booking`
      } ${datos.nombre}`,
  };
  const servicios = services;

  return (
    <div>
      <section className="dark:text-gray-400 dark:bg-gray-900 body-font overflow-hidden">
        <div className="md:container px-2 py-4 md:px-5 md:py-6 md:mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={"/assets/yainie" + datos.images[0].url}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/*  <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
              <h1 className=" text-black dark:text-white text-center text-3xl title-font font-medium mb-1">
                {datos.nombre}
              </h1>
              <div className="flex mb-4 ml-4">
                {isLoading ? <Spinner></Spinner> : (<span className="flex items-center">
                  <MostrarEstrellas puntuacion={resultado.promedio} />
                  <span className="ml-3">
                    {resultado.promedio.toFixed(2)}/
                    <Link
                      href={`/comments/${datos.slug}`}
                      className="underline hover:text-blue-600"
                    >
                      {resultado.contadorValoraciones}
                      {language == "es" ? " Comentarios" : " Reviews"}
                    </Link>
                  </span>
                </span>)}
                <span className="flex ml-3 pl-3 py-2 border-l-2 space-x-2 underline hover:text-blue-600">
                  <div className="flex flex-row-1 justify-center items-center ">
                    {/*  <Link href={`/comments/${datos.id}`}>
                      {" "}
                      {language == "es"
                        ? "Danos su commentario"
                        : "Give us your feedback"}
                    </Link> */}
                    <ModalComponent
                      texto={
                        language == "es"
                          ? "Danos su commentario"
                          : "Give us your feedback"
                      }
                      idDatos={datos.id}
                    />
                    <FaCommentAlt className="text-indigo-500 ml-2"></FaCommentAlt>
                  </div>
                </span>
              </div>
              <h2>
                <div className="md:w-64 ml-4 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font dark:text-white text-black">
                    {language == "es"
                      ? "Tiempo de duracion aproximado"
                      : "Approximate duration of :"}
                  </span>
                  <div className="mt-1 text-gray-500 text-sm flex flex-row justify-start items-center">
                    <FaClock className="mr-2"></FaClock>
                    00:
                    {datos.duration < 10
                      ? `0${datos.duration}`
                      : datos.duration}
                    :00
                  </div>
                </div>
              </h2>
              <p className="leading-relaxed  text-justify px-4">
                {datos.descripcion}
              </p>
              {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
            <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-800 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-indigo-500 text-white pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div> */}
              <div className="flex px-4 ">
                <span className="title-font font-medium text-2xl items-center justify-center flex text-slate-900 dark:text-white">
                  {language == "es" ? "Precio" : "Price"} {datos.precio_final}€
                </span>
                {/* <Link href={'/pago'}>PAGO</Link> */}
                <a
                  href={`https://wa.me/${whatsapp.number}?text=${whatsapp.text}`}
                  target="_blank"
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  {language == "es" ? "Reservar" : "Booking"}
                </a>
                {/* <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button> */}
              </div>
            </div>
            <div>
              <div className=" mt-3 ml-4">
                <h1 className=" text-4xl ">
                  {language == "es" ? "¿Que Incluye?" : `What's included?`}
                </h1>
              </div>
              <div className=" flex flex-col md:flex-row justify-start items-start gap-4 md:gap-0 mt-2 ml-4">
                {language == "es"
                  ? servicios[datos.id - 1].included_es.map((i, index) => (
                    <div key={index} className="">
                      <div className="text-sm">
                        <span
                          className={`bg-cyan-${(index % 7) + 4
                            }00 p-1  rounded-lg mx-1 dark:text-black uppercase pointer-events-none shadow-md dark:shadow-white  shadow-black`}
                        >
                          {i}
                        </span>
                      </div>
                    </div>
                  ))
                  : servicios[datos.id - 1].included_en.map((i, index) => (
                    <div key={index} className="">
                      <div className="text-sm">
                        <span
                          className={`bg-cyan-${(index % 7) + 4
                            }00 p-1  rounded-lg mx-1 dark:text-black uppercase pointer-events-none shadow-md dark:shadow-white  shadow-black`}
                        >
                          {i}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
