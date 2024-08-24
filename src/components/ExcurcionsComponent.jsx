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

          <h2 className="mb-2 p-2 text-2xl font-extrabold text-center dark:text-white sm:text-3xl lg:text-5xl lg:leading-normal ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-cyan-400">
              {language == "es" ? "Descubre Cuba" : "Discover Cuba"}
            </span>{" "}
            <p className="text-white md:container py-4 dark:text-gray-200 text-justify text-xs mx-auto md:text-base "> {language == 'es' ? `En Wonderfulltime, te invitamos a explorar la asombrosa belleza natural de nuestra isla. Cada rincón de este paraíso ofrece un tesoro único, desde playas de arena dorada hasta selvas exuberantes. Nuestros tours están diseñados para que vivas una experiencia inmersiva, creando recuerdos que durarán toda la vida. Únete a nosotros en este viaje extraordinario y descubre por qué Wonderfulltime es el destino ideal para los amantes de la aventura y la relajación.` : `At Wonderfulltime, we invite you to explore the breathtaking natural beauty of our island. Every corner of this paradise offers a unique treasure, from golden sandy beaches to lush jungles. Our tours are designed to provide an immersive experience, creating memories that will last a lifetime. Join us on this extraordinary journey and discover why Wonderfulltime is the perfect destination for adventure and relaxation seekers.`}</p>
          </h2>
          <h3 className="z-10 text-2xl font-extrabold text-center dark:text-white sm:text-3xl lg:text-5xl lg:leading-normal ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-cyan-400">
              {language == "es"
                ? "Oportunidad única de conocerla"
                : "Unique opportunity to know Cuba"}
            </span>{" "}
          </h3>

          <div className="text-center">
            <h4>
              <span className="my-5 text-xl text-warning-200">
                {language == "es"
                  ? "Selecciona la fecha para encontrar excursiones disponibles"
                  : "Select the date to find available excursions"}
              </span>
            </h4>
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
