import React from "react";

interface DataProps {
  id: number;
  original_title: string;
  overview: string;
}

type UpComingDataProps = {
  upComingData: DataProps[];
};

const UpComing = ({ upComingData }: UpComingDataProps) => {
  return (
    <div>
      {upComingData.map((item) => (
        <h1 key={item.id}>{item.original_title}</h1>
      ))}
    </div>
  );
};

export default UpComing;
