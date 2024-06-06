import React from "react";

interface DataProps {
  id: number;
  original_title: string;
}

type TrendingDataProps = {
  data: DataProps[];
};

const Trending = ({ data }: TrendingDataProps) => {
  return (
    <div>
      {data.map((item) => (
        <h1 key={item.id}>{item.original_title}</h1>
      ))}
    </div>
  );
};

export default Trending;
