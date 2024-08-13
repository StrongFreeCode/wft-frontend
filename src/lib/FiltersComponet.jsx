"use client";
import { IS_DEVELOPMENT } from "@/config";
import { useGlobalContext } from "@/helpers/Global";

import { Datepicker } from "flowbite-react";
import { useId, useState } from "react";


export const FiltersComponet = ({ onChange,startMinPrice, maxPrice, minPrice }) => {
  const { language } = useGlobalContext();
  const [startDate, setStartDate] = useState(new Date(2024, 3, 1));
  const [startMinprice, setMinPrice] = useState(startMinPrice);
  const fromId = useId();
  const toId = useId();
  const priceId = useId();

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      starMinPrice: event.target.value,
    }));
  };
  const handleChangeDate = (event) => {
    setStartDate(event);
    const change_fecha = new Date(event);
    onChange((prevState) => ({
      ...prevState,
      startDate: event,
    }));
  };

  return (
    <div>
      <div className=" container text-center grid grid-rows-2 md:flex md:justify-center md:mx-auto gap-2">
        <label
          htmlFor={fromId}
          className="border rounded-lg shadow-xl text-lg text-warning-100 hover:border-cyan-300"
        >
          <span className="mx-1"> {language == "es" ? "Desde:" : "From:"}</span>
          <Datepicker
            id={fromId}
            minDate={new Date()}
            onSelectedDateChanged={handleChangeDate}
          />
        </label>

       {/*  <label
          htmlFor={toId}
          className="border rounded-lg shadow-xl text-lg text-warning-100 hover:border-cyan-300"
        >
          <span className="mx-1"> {language == "es" ? "Hasta:" : "To:"}</span>
          <Datepicker id={toId} defaultDate={startDate} minDate={startDate} />
        </label> */}
      </div>
      <div className="flex justify-center items-center gap-2 mt-2">
        <label htmlFor={priceId} className="text-slate-200 font-bold text-xl">
          {language == "es" ? "Rango de Precios:" : " Price range:"}
        </label>
        <input
          type="range"
          id={priceId}
          min={minPrice}
          max={maxPrice}
          value={startMinprice}
          onChange={handleChangeMinPrice}
        />
        <span id={priceId} className="text-slate-200 text-2xl">
          {" "}
          $ {startMinprice}
        </span>
      </div>
      <div className="  relative  ">
        <span className="bg-slate-400  bg-transparent opacity-80 text-red-600 fixed top-0 ml-3 py-2 px-2 rounded-lg mb-2 ">
          {/* {IS_DEVELOPMENT && JSON.stringify(startMinprice, null, 2)} */}
        </span>
      </div>
    </div>
  );
};
