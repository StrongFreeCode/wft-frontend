"use client";
import Loading from "@/app/loading";
import DataComment from "@/components/DataComment";
import DataCommentlist from "@/components/DataCommentlist";
import ModalComponent from "@/components/ModalComponent";
import { useGlobalContext } from "@/helpers/Global";
import { getOpinons } from "@/services/comment";
import { Label, Spinner, TextInput, Textarea } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMail } from "react-icons/hi";

export default function CommentPage({ params }) {
  const { language } = useGlobalContext()
  const { id } = params;
  const [opinions, setOpinions] = useState([]);
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchOpinions() {
      const pureData = await getOpinons();
      const allOpinions = pureData.filter(
        (pureData) => pureData.excursion_id === Number(id)
      );
      setOpinions(allOpinions);
      setLoading(false)
    }
    fetchOpinions();
  }, [opinions]);

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
          idDatos={id}
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
