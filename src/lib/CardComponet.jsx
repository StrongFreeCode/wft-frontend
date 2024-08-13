'use client'
import { useGlobalContext } from "@/helpers/Global";
import { Card, Spinner } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MostrarEstrellas from "./Estrellas";
import { getOpinons } from "@/services/comment";
import { calcularPromedioValoraciones } from "@/helpers/promedio";

const customTheme = {
  root: {
    base:
      "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-0 p-2",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "w-auto h-[150px] object-cover",
  },
};

export const CardComponet = ({ excursions }) => {
  const { language } = useGlobalContext();

  const [opinions, setOpinions] = useState();

  useEffect(() => {
    async function fetchOpinions() {
      const allOpinions = await getOpinons();
      setOpinions(allOpinions);
    }
    fetchOpinions();
  }, []);

  function count(id, opinon) {


    const idNumero = Number(id); // Convertir a número


    const result = calcularPromedioValoraciones(opinon, idNumero)
    return result
  }

  const Rate = (id) => {
    const test = opinions ? count(id, opinions) : 'no data'
    const rate = test.promedio

    return rate
  }
  const Reviews = (id) => {
    const test = opinions ? count(id, opinions) : 'no data'
    const reviews = test.contadorValoraciones
    return reviews
  }
  return (
    <div className="grid items-center object-center gap-2 md:container mx-4 xl:container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-80">
      {" "}
      {excursions.map((excursion) => (
        <Card
          className="md:max-w-sm  sm:min-h-[400px] sm:max-h-[400px]  my-4 mx-full hover:shadow-2xl hover:bg-blue-500 hover:dark:bg-blue-900  transform transition duration-500 hover:scale-105 text-gray-900 dark:text-white"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc={"/assets/yainie" + excursion.images[0].url}
          theme={customTheme}
          key={excursion.id}
        >
          <Link href={"/excursions/" + excursion.id}>
            <div className="flex content-center justify-between ">
              <h1>{excursion.nombre}</h1>
              <div className="text-xs">

                <h3 className="">
                  {Rate(excursion.id) == 0 ? "0" : Rate(excursion.id) ? Rate(excursion.id).toFixed(2) : <Spinner size={'sm'}></Spinner>} / {Reviews(excursion.id)} {language == 'es' ? 'Reseñas' : 'Reviews'}
                </h3>
                {
                  opinions ? <MostrarEstrellas puntuacion={Rate(excursion.id)}></MostrarEstrellas> : <Spinner size={'xs'}></Spinner>
                }
              </div>

              {/*  <h6 className="text-xs">
                {excursion.fecha_inicio} - {excursion.fecha_fin}
              </h6> */}
            </div>

            <h5 className=" font-semibold text-xs tracking-tight min-h-[100px] max-h-[100px] overflow-hidden ">
              {excursion.descripcion_resumen}
            </h5>
          </Link>

          <div className="mb-5 mt-2.5 flex items-center">
            <span className="border dark:border-white border-slate-800 rounded-full max-w-8 max-h-8 min-h-8 min-w-8 text-center py-2 px-2 mx-0.5   text-xs font-semibold text-slate-800  dark:text-slate-200">
              M
            </span>
            <span className="border dark:border-white border-slate-800 rounded-full max-w-8 max-h-8 min-h-8 min-w-8 text-center py-2 px-2 mx-0.5   text-xs font-semibold text-slate-800 bg-cyan-400  dark:text-slate-200">
              T
            </span>
            <span className="border dark:border-white border-slate-800 rounded-full max-w-8 max-h-8 min-h-8 min-w-8 text-center py-2 px-2 mx-0.5   text-xs font-semibold text-slate-800 bg-cyan-400  dark:text-slate-200">
              W
            </span>
            <span className="border dark:border-white border-slate-800 rounded-full max-w-8 max-h-8 min-h-8 min-w-8 text-center py-2 px-2 mx-0.5   text-xs font-semibold text-slate-800 bg-cyan-400  dark:text-slate-200">
              T
            </span>
            <span className="border dark:border-white border-slate-800 rounded-full max-w-8 max-h-8 min-h-8 min-w-8 text-center py-2 px-2 mx-0.5   text-xs font-semibold text-slate-800  dark:text-slate-200">
              F
            </span>
            <span className="border dark:border-white border-slate-800 rounded-full max-w-8 max-h-8 min-h-8 min-w-8 text-center py-2 px-2 mx-0.5   text-xs font-semibold text-slate-800  dark:text-slate-200">
              S
            </span>
            <span className="border dark:border-white border-slate-800 rounded-full max-w-8 max-h-8 min-h-8 min-w-8 text-center py-2 px-2 mx-0.5   text-xs font-semibold text-slate-800 bg-cyan-400  dark:text-slate-200">
              S
            </span>
          </div>
          <div className="flex items-center justify-between ">
            <span className="text-3xl font-bold">
              ${excursion.precio_final}
            </span>
            <Link

              href={"/excursions/" + excursion.id}
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              {language == "es" ? "Detalles" : "Details"}
            </Link>
          </div>
        </Card>
      ))
      }
    </div >
  );
};
