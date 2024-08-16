"use client";
import React, { useEffect, useState } from "react";
import DataComment from "./DataComment";
import { getOpinons } from "@/services/comment";
import { Carousel, Spinner } from "flowbite-react";
import { useGlobalContext } from "@/helpers/Global";

export default function Comments() {
  const { language } = useGlobalContext();
  const [opinions, setOpinions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchOpinions() {
      try {
        const pureData = await getOpinons();
        const allOpinions = pureData
          .filter((pureData) => pureData.puntuacion === 5)
          .slice(0, 5);
        setOpinions(allOpinions);
      } catch (error) {
        console.error("Error fetching opinions:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchOpinions();
  }, []);

  return (
    <div className="dark:text-slate-200 text-center text-slate-800 h-72">
      <h2 className="md:text-6xl text-2xl dark:text-white text-center uppercase py-6 font-bold ">
        {language == 'es' ? 'Reseñas' : 'Reviews'}
      </h2>
      {isLoading ? (
        <div className="h-40 flex justify-center items-center">
          <Spinner />
        </div>) : (
        <div className="flex flex-col md:flex-row md:space-x-6">
          <Carousel className="">
            {opinions.map((i, index) => (
              <DataComment
                key={index}
                email={i.email}
                text={i.text}
                rate={i.puntuacion}
                create={i.created_at}
              />
            ))}
          </Carousel>
        </div>)}
    </div>
  );
}