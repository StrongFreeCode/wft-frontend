'use client'
import { useGlobalContext } from "@/helpers/Global";
import useFilters from "@/hook/useFilters";
import { CardComment } from "@/lib/CardComment";
import { CardComponet } from "@/lib/CardComponet";
import React from "react";

export default function CommentsPage() {
  const { language } = useGlobalContext();
  const {
    filtersExcursions,
    setfilters,
    maxPrice,
    minPrice,
    langData,
  } = useFilters({ language });
  const excursionsFiltered = filtersExcursions(langData);

  return <div><CardComment excursions={excursionsFiltered} ></CardComment></div>;
}
