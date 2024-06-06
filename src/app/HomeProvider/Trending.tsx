import React from "react";

interface DataProps {
  id: number;
  original_title: string;
  overview: string;
}

type TrendingMovieDataProps = {
  trendingMoviesData: DataProps[];
};

const TrendingPage = ({ trendingMoviesData }: TrendingMovieDataProps) => {
  return (
    <div>
      {trendingMoviesData.map((item) => (
        <h1 key={item.id}>{item.original_title}</h1>
      ))}
    </div>
  );
};

export default TrendingPage;
