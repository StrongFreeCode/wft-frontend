"use client";
import { useEffect, useState } from "react";

export default function TestPage() {
  const [opinons, setOpinions] = useState();

  async function fetchOpinions() {
    const allOpinions = await getOpinons();
    setOpinions(allOpinions);
  }

  useEffect(() => {
    fetchOpinions();
  }, []);
  return (
    <>
      <h1>Page test</h1>
      {}
      {opinons ? (
        opinons.map((opinons) => <div key={opinons.id}>{opinons.email}</div>)
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
