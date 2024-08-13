import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function MostrarEstrellas({ puntuacion }) {
  let estrellas_llenas = Math.floor(puntuacion);
  let estrella_mitad_presente = puntuacion % 1 !== 0 ? 1 : 0;
  let estrellas_vacias = 5 - estrellas_llenas - estrella_mitad_presente;

  let resultado = [];

  for (let i = 0; i < estrellas_llenas; i++) {
    resultado.push(<BsStarFill className="text-yellow-500" key={i} />);
  }

  if (estrella_mitad_presente) {
    resultado.push(
      <BsStarHalf className="text-yellow-500" key={estrellas_llenas} />
    );
  }

  for (let i = 0; i < estrellas_vacias; i++) {
    resultado.push(
      <BsStar
        className="text-yellow-500"
        key={estrellas_llenas + estrella_mitad_presente + i}
      />
    );
  }

  return <div className="flex flex-row-1">{resultado}</div>;
}
