import { useState } from "react";
import excursionsData from "../data/excursions_lang.json"

export default function useFilters({ language }) {
    
    const langData = language === "es"
        ? excursionsData.excursions_es.sort(
            (a, b) => a.precio_final - b.precio_final
        )
        : excursionsData.excursions_en.sort(
            (a, b) => a.precio_final - b.precio_final
        );
    const order = langData
    const minPrice = order[0].precio_final;
    const maxPrice = order[order.length - 1].precio_final;
    const [filters, setfilters] = useState({
        starMinPrice: maxPrice,
        startDate: new Date(2024, 3, 1),
        active: true,
    });
    const filtersExcursions = (value) => {
        return value.filter((excursion) => {
            return (
                excursion.precio_final <= filters.starMinPrice &&
                new Date(excursion.fecha_fin) >= new Date(filters.startDate)
                && excursion.active == true
            );
        });
    };
    return { filtersExcursions, setfilters,  maxPrice, minPrice , langData};
}