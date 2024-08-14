import { useState, useEffect } from "react";
import { getOpinons } from "@/services/comment";

export default function useOpinions(id) {
    const [opinions, setOpinions] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchOpinions() {
            setLoading(true);
            setError(null); // Resetear el error antes de cada fetch
            try {
                const pureData = await getOpinons();
                const allOpinions = id
                    ? pureData.filter((opinion) => opinion.excursion_id === Number(id))
                    : pureData;
                setOpinions(allOpinions);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchOpinions();
    }, [id]);

    return { opinions, isLoading, error, setOpinions };
}