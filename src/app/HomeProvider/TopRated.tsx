import React from 'react'

interface DataProps {
  id: number;
  original_title: string;
  overview: string;
}

type TopRatedProps = {
  topRatedData: DataProps[];
};


const TopRated = ({ topRatedData }: TopRatedProps) => {
  return (
    <div>
       {topRatedData.map((item) => (
        <h1 key={item.id}>{item.original_title}</h1>
      ))}
    </div>
  )
}

export default TopRated