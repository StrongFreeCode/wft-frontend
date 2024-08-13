
export  async function useFetchData({ enpoint }) {
 
  const url = process.env.WEB_API + `${enpoint}`;
  const res = await fetch(url, { method: "GET" });
  const data = await res.json();
  const date = new Date();
  const price = "0";
  return { data: data.data, date: date, price: price };
}
