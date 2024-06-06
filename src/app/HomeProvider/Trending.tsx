import React from "react";

interface DataProps {
  id: number;
  original_title: string;
  overview: string;
}

type TrendingDataMovieProps = {
  trendingMoviesData: DataProps[];
};

const TrendingPage = ({ trendingMoviesData }: TrendingDataMovieProps) => {
  return (
    <div>
      {trendingMoviesData.map((item) => (
        <h1 key={item.id}>{item.original_title}</h1>
      ))}
    </div>
  );
};

export default TrendingPage;
