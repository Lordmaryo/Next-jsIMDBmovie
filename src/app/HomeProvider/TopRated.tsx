import React from "react";

interface DataProps {
  id: number;
  original_title: string;
  overview: string;
}

type TopRatedMovieProps = {
  topRatedMoviesData: DataProps[];
};

const TopRated = ({ topRatedMoviesData }: TopRatedMovieProps) => {
  return (
    <div>
      {topRatedMoviesData.map((item) => (
        <h1 key={item.id}>{item.original_title}</h1>
      ))}
    </div>
  );
};

export default TopRated;
