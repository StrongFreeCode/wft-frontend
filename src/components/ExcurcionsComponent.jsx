"use client";

import { useGlobalContext } from "@/helpers/Global";
import { CardComponet } from "@/lib/CardComponet";
import { FiltersComponet } from "@/lib/FiltersComponet";
import useFilters from "@/hook/useFilters";
export const ExcurcionsComponet = () => {
  const { language } = useGlobalContext();
  const {
    filtersExcursions,
    setfilters,
    maxPrice,
    minPrice,
    langData,
  } = useFilters({ language });
  const excursionsFiltered = filtersExcursions(langData);

  return (
    <div className="h-sreen">
      <div className="bg-gradient-to-r from-blue-800 to-cyan-700 bg-teal-400 bg-cover  bg-no-repeat">
        <div className="content-center ">
          <div className="flex justify-center mt-6 mx-2">
            <div className="text-center">
              <h1 className="text-2xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-cyan-400  font-bold mb-4">Wonderfulltime</h1>


            </div>

          </div>
          <h1 className="mb-2 text-2xl font-extrabold text-center dark:text-white sm:text-3xl lg:text-5xl lg:leading-normal ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-cyan-400">
              {language == "es" ? "Descubre Cuba" : "Discover Cuba"}
            </span>{" "}
          </h1>
          <h1 className="z-10 text-2xl font-extrabold text-center dark:text-white sm:text-3xl lg:text-5xl lg:leading-normal ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-cyan-400">
              {language == "es"
                ? "Oportunidad única de conocerla"
                : "Unique opportunity to know Cuba"}
            </span>{" "}
          </h1>

          <div className="text-center">
            <h1>
              <span className="my-5 text-xl text-warning-200">
                {language == "es"
                  ? "Selecciona la fecha para encontrar excursiones disponibles"
                  : "Select the date to find available excursions"}
              </span>
            </h1>
            <FiltersComponet
              onChange={setfilters}
              startMinPrice={maxPrice}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </div>
          <div>
            <CardComponet excursions={excursionsFiltered} />
          </div>
        </div>
      </div>
      <div className="  relative  ">
        <span className="bg-slate-400  bg-transparent opacity-80 text-red-600 fixed bottom-0 ml-3 py-2 px-2 rounded-lg mb-2 ">
          {/*  {IS_DEVELOPMENT && JSON.stringify(filters, null, 2)} */}
        </span>
      </div>
    </div>
  );
};
