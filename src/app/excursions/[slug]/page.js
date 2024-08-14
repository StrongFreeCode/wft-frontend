'use client'
import { Details } from "@/components/Details";
import { Places } from "@/components/Places";
import { useGlobalContext } from "@/helpers/Global";
import excursionsData from "../../../data/excursions_lang.json"
import { calcularPromedioValoraciones } from "@/helpers/promedio";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import { redirect } from "next/navigation";
import { getOpinons } from "@/services/comment";
import useOpinions from "@/hook/useOpinions";

function DetailPage({ params }) {
  const { language } = useGlobalContext();
  const [excursion, setExcursion] = useState(null);
  const { opinions, isLoading, setLoading } = useOpinions()

  const getIdExcursion = (params) => {
    const excursionDataGet = excursionsData
    const filtersBySlug = excursionDataGet.excursions_es.find(obj => obj.slug = params.slug)
    const id = filtersBySlug ? filtersBySlug.id : null;
    return id
  }
  const idExcursion = getIdExcursion(params)

  useEffect(() => {

    const dataExcursions = language === 'es' ? excursionsData.excursions_es : excursionsData.excursions_en
    const objetExcursions = dataExcursions[idExcursion]

    setExcursion(objetExcursions)

  }, []);


  if (isLoading) {
    return <Loading />;
  }

  if (!excursion) {
    return <p>Excursion not found</p>;
  }

  const result = opinions ? calcularPromedioValoraciones(opinions, excursion.id) : 0;

  return (
    <>
      {opinions ? <Details datos={excursion} resultado={result} /> : <Loading />}
      {excursion.places.map((i) => (
        <Places key={crypto.randomUUID()} datos={i} />
      ))}
    </>
  );
}

export default DetailPage;