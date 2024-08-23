"use client";
import DataCommentlist from "@/components/DataCommentlist";
import ModalComponent from "@/components/ModalComponent";
import { useGlobalContext } from "@/helpers/Global";
import useOpinions from "@/hook/useOpinions";
import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import excursionsData from '@/data/excursions_lang.json'


const getExcursionIdBySlug = (slug) => {
  const excursions = [...excursionsData.excursions_es, ...excursionsData.excursions_en];
  const excursion = excursions.find(excursion => excursion.slug === slug);
  return excursion ? excursion.id : null;
};
export default function CommentPage({ params }) {
  const { language } = useGlobalContext()
  const { slug } = params;


  const excursionId = getExcursionIdBySlug(slug);
  const { opinions, isLoading, setOpinions } = useOpinions(excursionId)

  function handleAddOpinion(newOpinion) {
    setOpinions(prevOpinions => [...prevOpinions, newOpinion]);
  }



  function EmptyReviews() {

    return (
      <div>
        <h2 className="dark:text-cyan-400 text-cyan-800 uppercase  text-xl">

          {language == "es"
            ? "Lo sentimos esta excursion no tiene reseñas se el primero"
            : "Sorry, this tour has no reviews for the first one"}
        </h2>

      </div>
    )

  }
  return (
    <div className="md:container text-center md:mx-auto mb-32">

      <h1 className="text-6xl dark:text-slate-200  text-slate-800 text-center my-12  uppercase font-bold leading-3 ">
        {language == 'es' ? 'Reseñas' : 'Reviews'}
      </h1>
      <h2 className="text-xl hover:text-cyan-800 hover:dark:text-cyan-300 text-gradient-to-r mb-12">

        <ModalComponent
          texto={
            language == "es"
              ? "Danos su commentario👆"
              : "Give us your feedback👆"
          }
          idDatos={opinions[excursionId]?.excursion_id}
          onAddOpinion={handleAddOpinion}
        />
      </h2>

      <div className={opinions && opinions.length !== 0 ? `grid md:grid-cols-2 gap-4` : `flex justify-center items-center`}>
        {isLoading ? <Spinner></Spinner> : opinions && opinions.length !== 0 ? (
          opinions.map((i, index) => (
            <DataCommentlist
              key={index}
              email={i.email}
              text={i.text}
              rate={i.puntuacion}
              create={i.created_at}
            />
          ))
        ) : < EmptyReviews />}
      </div>



    </div >
  );
}
