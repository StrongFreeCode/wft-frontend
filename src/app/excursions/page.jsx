'use client'
import { useGlobalContext } from "@/helpers/Global";
import useFilters from "@/hook/useFilters";
import { CardComponet } from "@/lib/CardComponet";
import { FiltersComponet } from "@/lib/FiltersComponet";
import React from "react";

export default function ExcursionPage() {
  const { language } = useGlobalContext();
  const {
    filtersExcursions,
    setfilters,
    maxPrice,
    minPrice,
    langData,
  } = useFilters({ language });
  const excursionsFiltered = filtersExcursions(langData);

  return <div className="bg-gradient-to-r from-blue-800 to-cyan-700 bg-teal-400 bg-cover  bg-no-repeat">
    <div className="text-center">
      <h1>
        <span className="my-5 text-xl text-warning-200">
          {language == "es"
            ? "Selecciona la fecha para encontrar excursiones disponibles"
            : "Select the date to find available excursions"}
        </span>
      </h1>
      <FiltersComponet
        onChange={setfilters}
        startMinPrice={maxPrice}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    </div>
    <CardComponet excursions={excursionsFiltered}></CardComponet></div>;
}
