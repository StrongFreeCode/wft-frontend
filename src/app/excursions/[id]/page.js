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

function DetailPage({ params }) {
  const { language } = useGlobalContext();
  const [opinions, setOpinions] = useState();

  useEffect(() => {
    async function fetchOpinions() {
      const allOpinions = await getOpinons();
      setOpinions(allOpinions);
    }
    fetchOpinions();
  }, []);

  const sortData = language === "es"
    ? excursionsData.excursions_es.sort((a, b) => a.precio_final - b.precio_final)
    : excursionsData.excursions_en.sort((a, b) => a.precio_final - b.precio_final);

  const idNumero = Number(params.id); // Convertir a número
  const endData = sortData.find(obj => obj.id === idNumero);
  if (!endData) redirect('/');

  const result = opinions ? calcularPromedioValoraciones(opinions, idNumero) : 0;

  return (
    <>
      {opinions ? <Details datos={endData} resultado={result} /> : <Loading />}
      {endData.places.map((i, index) => (
        <Places key={index} datos={i} />
      ))}

    </>
  );
}

export default DetailPage;
