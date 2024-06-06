import React from "react";

interface DataProps {
  id: number;
  original_title: string;
  overview: string;
}

type fansFavoriteProps = {
  fansFavoritesData: DataProps[];
};

const FanFavorites = ({ fansFavoritesData }: fansFavoriteProps) => {
  return (
    <div>
      {fansFavoritesData.map((item) => (
        <h1 key={item.id}>{item.original_title}</h1>
      ))}
    </div>
  );
};

export default FanFavorites;
