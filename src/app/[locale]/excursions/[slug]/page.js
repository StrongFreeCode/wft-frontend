'use client'
import { Details } from "@/components/Details";
import { Places } from "@/components/Places";
import { useGlobalContext } from "@/helpers/Global";
import excursionsData from "@/data/excursions_lang.json"
import { calcularPromedioValoraciones } from "@/helpers/promedio";
import { useEffect } from "react";
import Loading from "@/app/[locale]/loading";
import { redirect } from "next/navigation";
import useOpinions from "@/hook/useOpinions";

function DetailPage({ params }) {
  const { language } = useGlobalContext();

  const { isLoading, opinions, setLoading } = useOpinions()
  useEffect(() => {

  }, []);

  const sortData = language === "es"
    ? excursionsData.excursions_es.sort((a, b) => a.precio_final - b.precio_final)
    : excursionsData.excursions_en.sort((a, b) => a.precio_final - b.precio_final);

  const endData = sortData.find(obj => obj.slug === params.slug);
  const sortDataId = endData.id
  if (!endData) redirect('/');

  const result = opinions ? calcularPromedioValoraciones(opinions, sortDataId) : 0;

  return (
    <>
      {opinions ? <Details datos={endData} resultado={result} isLoading={isLoading} /> : <Loading />}
      {endData.places.map((i, index) => (
        <Places key={index} datos={i} />
      ))}
    </>
  );
}

export default DetailPage;