import { useState } from "react";

export default function useDate() {
    const [startDate, setStartDate] = useState(new Date());
    const [minPrice, setMinPrice] = useState(0);
    const minDate = new Date();
    return { startDate, setStartDate, minPrice, setMinPrice, minDate };
  };
  