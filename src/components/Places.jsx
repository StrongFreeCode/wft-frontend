"use client";
/* eslint-disable @next/next/no-img-element */
import { useGlobalContext } from "@/helpers/Global";
import React from "react";
import { FaClock } from "react-icons/fa";

export const Places = ({ datos }) => {
  const { language } = useGlobalContext();
  return (
    <>
      <section className="dark:text-gray-400 dark:bg-gray-900 body-font ">
        <div className="md:container px-2 py-4 lg:px-32 md:pb-6 md:mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-800">
            <div className="py-8 px-4 flex flex-wrap md:flex-nowrap">
              {/* <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font dark:text-white text-black">
                  {language == "es"
                    ? "Tiempo de duracion aproximado"
                    : "Approximate duration of :"}
                </span>
                <div className="mt-1 text-gray-500 text-sm flex flex-row justify-start items-center">
                  <FaClock className="mr-2"></FaClock>
                  {datos.time}
                </div>
              </div> */}
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-black dark:text-white title-font mb-2">
                  {datos.nombre}
                </h2>
                <p className="leading-relaxed text-justify ">
                  {datos.descripcion}
                </p>
                <a className="text-indigo-400 inline-flex items-center mt-4">
                  {/*  {language == "es" ? "Imagenes" : "Images"} */}
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 lg:grid-cols-5 ">
            {datos.images.map((i) => (
              <div key={i.id} className="flex justify-center items-center">
                <img
                  className="sm:w-[200px] sm:h-[200px] object-cover  rounded-lg shadow-lg dark:shadow-slate-400 shadow-slate-900 transform transition duration-500 hover:scale-105"
                  src={i.url}
                  alt={datos.nombre}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
