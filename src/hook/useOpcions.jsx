import { useState, useEffect } from "react";
import { getOpinons } from "@/services/comment";

export default function useOpinions(id) {
    const [opinions, setOpinions] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchOpinions() {
            const pureData = await getOpinons();
            const allOpinions = id
                ? pureData.filter((pureData) => pureData.excursion_id === Number(id))
                : pureData;
            setOpinions(allOpinions);
            setLoading(false);
        }
        fetchOpinions();
    }, [id]);

    return { opinions, isLoading };
}