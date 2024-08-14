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
  const [excursion, setExcursion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOpinions() {
      const allOpinions = await getOpinons();
      setOpinions(allOpinions);
    }
    fetchOpinions();
  }, []);

  useEffect(() => {
    const sortData = language === "es"
      ? excursionsData.excursions_es.sort((a, b) => a.precio_final - b.precio_final)
      : excursionsData.excursions_en.sort((a, b) => a.precio_final - b.precio_final);

    const endData = sortData.find(obj => obj.slug === params.slug);
    if (!endData) redirect('/');

    setExcursion(endData);
    setLoading(false);
  }, [language, params.slug]);

  if (loading) {
    return <Loading />;
  }

  if (!excursion) {
    return <p>Excursion not found</p>;
  }

  const result = opinions ? calcularPromedioValoraciones(opinions, excursion.id) : 0;

  return (
    <>
      {opinions ? <Details datos={excursion} resultado={result} /> : <Loading />}
      {excursion.places.map((i, index) => (
        <Places key={index} datos={i} />
      ))}
    </>
  );
}

export default DetailPage;