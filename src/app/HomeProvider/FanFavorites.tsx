import React from "react";

interface DataProps {
  id: number;
  original_title: string;
  overview: string;
}

type fansFavoriteMovieProps = {
  fansFavoritesMoviesData: DataProps[];
};

const FanFavorites = ({ fansFavoritesMoviesData }: fansFavoriteMovieProps) => {
  return (
    <div>
      {fansFavoritesMoviesData.map((item) => (
        <h1 key={item.id}>{item.original_title}</h1>
      ))}
    </div>
  );
};

export default FanFavorites;
