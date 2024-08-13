import React from "react";

export const Valores = ({ datos, nombre }) => {
  return (
    <div>
      <p className=" text-justify mb-3 font-bold dark:text-white">
        <span className=" dark:text-fuchsia-400 text-xl text-fuchsia-950">{nombre}:</span>{" "}
        {datos}
      </p>
    </div>
  );
};
