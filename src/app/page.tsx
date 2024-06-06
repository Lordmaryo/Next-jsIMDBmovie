import React from "react";
import Trending from "./HomeProvider/Trending";

interface DataProps {
  id: number;
  original_title: string;
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

async function fetchTrendingData(): Promise<DataProps[]> {
  const result = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`);
  const data = await result.json();
  return data.results as DataProps[];
}

const Page = async () => {
  const data = await fetchTrendingData();
  
  return (
    <div>
      <h2>Trending</h2>
      <Trending data={data}/>
    </div>
  );
};

export default Page;
