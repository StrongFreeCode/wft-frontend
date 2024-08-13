import { useGlobalContext } from "./Global";

export const useSetFilters = (excursions) => {
    const {filters, minPrice} = useGlobalContext()
    return excursions.data.filter((excursions) => {      
        return (
        excursions.precio_final <= filters.minPrice
      );
    });
  };
