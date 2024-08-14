import { useGlobalContext } from "@/helpers/Global";
import { Card, Spinner } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MostrarEstrellas from "./Estrellas";
import { getOpinons } from "@/services/comment";
import excursionsData from "../data/excursions_lang.json"
import { calcularPromedioValoraciones } from "@/helpers/promedio";
import ModalComponent from "@/components/ModalComponent";
import { FaCommentAlt } from "react-icons/fa";
import useOpinions from "@/hook/useOpinions";

const customTheme = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
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

export const CardComment = ({ excursions }) => {
  const { language } = useGlobalContext();

  const { opinions, isLoading } = useOpinions()

  function count(id, opinon) {
    const sortData = language === "es"
      ? excursionsData.excursions_es.sort((a, b) => a.precio_final - b.precio_final)
      : excursionsData.excursions_en.sort((a, b) => a.precio_final - b.precio_final);

    const idNumero = Number(id);
    const endData = sortData.find(obj => obj.id === idNumero);

    const result = calcularPromedioValoraciones(opinon, idNumero);
    return result;
  }

  const Rate = (id) => {
    if (isLoading) return 0;
    const test = count(id, opinions);
    const rate = test.promedio;
    return rate;
  };

  const Reviews = (id) => {
    if (isLoading) return 0;
    const test = count(id, opinions);
    const reviews = test.contadorValoraciones;
    return reviews;
  };

  return (
    <div className="grid items-center object-center gap-4 md:container mx-4 xl:container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-80">
      {excursions.map((excursion, index) => (
        <Card
          className="md:max-w-sm sm:min-h-[400px] sm:max-h-[400px] my-4 mx-full hover:shadow-2xl hover:bg-blue-500 hover:dark:bg-blue-900 transform transition duration-500 hover:scale-105 text-gray-900 dark:text-white"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc={"/assets/yainie" + excursion.images[0].url}
          theme={customTheme}
          key={excursion.id}
        >
          <Link href={"/excursions/" + excursion.slug}>
            <div className="flex content-center justify-between">
              <h1 className="text-lg font-semibold">{excursion.nombre}</h1>
            </div>
            <h5 className="font-semibold text-xs tracking-tight min-h-[100px] max-h-[100px] overflow-hidden">
              {excursion.descripcion_resumen}
            </h5>
          </Link>
          <div className="xl:text-xl text-2xl">
            {isLoading ? <Spinner /> : <MostrarEstrellas puntuacion={Rate(excursion.id)} />}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">
              {isLoading ? "Loading..." : `${Rate(excursion.id).toFixed(2)} of ${Reviews(excursion.id)} ${language == 'es' ? 'Reseñas' : 'Reviews'}`}
            </span>
            <ModalComponent
              texto={language == "es" ? "Danos su commentario" : "Give us your feedback"}
              idDatos={excursion.id}
            />
          </div>
          <Link
            href={"/comments/" + excursion.slug}
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            {language == "es" ? "Ver reseñas" : "See review"}
          </Link>
        </Card>
      ))}
    </div>
  );
};