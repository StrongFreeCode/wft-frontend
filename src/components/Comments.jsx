"use client";
import React, { useEffect, useState } from "react";
import DataComment from "./DataComment";
import { getOpinons } from "@/services/comment";
import Loading from "@/app/loading";
import { Carousel } from "flowbite-react";
import { root } from "postcss";
import { useGlobalContext } from "@/helpers/Global";

export default function Comments() {
  const { language } = useGlobalContext()
  const [opinions, setOpinions] = useState();
  useEffect(() => {
    async function fetchOpinions() {
      const pureData = await getOpinons();
      const allOpinions = pureData.filter(
        (pureData) => pureData.puntuacion === 5
      );

      setOpinions(allOpinions);
    }
    fetchOpinions();
  }, [opinions]);
  return (
    <div className=" dark:text-slate-400 text-center text-slate-600 h-72">
      <h1 className="md:text-6xl text-2xl dark:text-white text-center uppercase py-6 font-bold ">
        {language == 'es' ? 'Reseñas' : 'Reviews'}
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-6  ">
        <Carousel className="">
          {opinions ? (
            opinions.map((i, index) => (
              <DataComment
                key={index}
                email={i.email}
                text={i.text}
                rate={i.puntuacion}
                create={i.created_at}
              />
            ))
          ) : (
            <div className="h-40">
              <Loading></Loading>
            </div>
          )}
        </Carousel>
      </div>
    </div>
  );
}
