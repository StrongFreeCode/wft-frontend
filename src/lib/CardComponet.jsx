'use client'
import { useGlobalContext } from "@/helpers/Global";
import { Card, Spinner } from "flowbite-react";
import Link from "next/link";
import React from "react";
import MostrarEstrellas from "./Estrellas";
import { calcularPromedioValoraciones } from "@/helpers/promedio";
import useOpinions from "@/hook/useOpinions";

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
  const { opinions, isLoading } = useOpinions();

  function count(id, opinion) {
    const idNumero = Number(id); // Convertir a número
    const result = calcularPromedioValoraciones(opinion, idNumero);
    return result;
  }

  const Rate = (id) => {
    if (isLoading) {
      return { value: null, isLoading: true };
    }
    const test = opinions ? count(id, opinions) : 'no data';
    const rate = test.promedio;
    return { value: rate, isLoading: false };
  }

  const Reviews = (id) => {
    if (isLoading) {
      return { value: null, isLoading: true };
    }
    const test = opinions ? count(id, opinions) : 'no data';
    const reviews = test.contadorValoraciones;
    return { value: reviews, isLoading: false };
  }

  return (
    <div className="grid items-center object-center gap-2 md:container mx-4 xl:container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-80">

      {excursions.map((excursion) => {
        const rate = Rate(excursion.id);
        const reviews = Reviews(excursion.id);

        return (
          <article key={excursion.id}>

            <Card
              className="md:max-w-sm  sm:min-h-[400px] sm:max-h-[400px]  my-4 mx-full hover:shadow-2xl hover:bg-blue-500 hover:dark:bg-blue-900  transform transition duration-500 hover:scale-105 text-gray-900 dark:text-white"
              imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
              imgSrc={"/assets/yainie" + excursion.images[0].url}
              theme={customTheme}

            >
              <Link href={`/${language}/excursions/${excursion.slug}`}>
                <div className="flex content-center justify-between ">
                  <h2>{excursion.nombre}</h2>
                  <div className="text-xs">
                    <h3 className="">
                      {rate.isLoading ? <Spinner size={'sm'} /> : rate.value == 0 ? "0" : rate.value ? rate.value.toFixed(2) : "N/A"} / {reviews.isLoading ? <Spinner size={'sm'} /> : reviews.value} {language == 'es' ? 'Reseñas' : 'Reviews'}
                    </h3>
                    {
                      !rate.isLoading && opinions ? <MostrarEstrellas puntuacion={rate.value} /> : <Spinner size={'xs'} />
                    }
                  </div>
                </div>

                <p className=" font-semibold text-xs tracking-tight min-h-[100px] max-h-[100px] overflow-hidden ">
                  {excursion.descripcion_resumen}
                </p>
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
                  href={`/${language}/excursions/${excursion.slug}`}
                  className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  {language == "es" ? "Detalles" : "Details"}
                </Link>
              </div>
            </Card>
          </article>
        );
      })}
    </div>
  );
};