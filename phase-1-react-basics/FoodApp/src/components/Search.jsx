import { useEffect, useState } from "react";

export default function Search({setFoodData}) {
  const [query, setQuery] = useState('Pizza');
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${import.meta.env.VITE_APP_KEY}`);
      const data = await response.json();
      setFoodData(data.results);
    }
    fetchData();
  }, [query]);
  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
  )
}
