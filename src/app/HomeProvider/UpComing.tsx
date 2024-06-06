import React from "react";

interface DataProps {
  id: number;
  original_title: string;
  overview: string;
}

type UpComingMovieProps = {
  upComingMoviesData: DataProps[];
};

const UpComing = ({ upComingMoviesData }: UpComingMovieProps) => {
  return (
    <div>
      {upComingMoviesData.map((item) => (
        <h1 key={item.id}>{item.original_title}</h1>
      ))}
    </div>
  );
};

export default UpComing;
