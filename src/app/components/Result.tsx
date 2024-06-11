import React from "react";
import Cards from "./Cards";

interface DataProps {
  id: number;
  original_title: string;
  overview: string;
  name: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
}

type ResultProps = {
  results: DataProps[];
};

const Result = ({ results }: ResultProps) => {
  return (
    <div
    style={{ scrollSnapType: "x mandatory", scrollPadding: "30px" }}
    className="custom-scrollbar h-[55vh] flex flex-row flex-none gap-4 overflow-x-auto px-5"
    >
      {results?.map((result) => (
        <Cards key={result.id} results={result} />
      ))}
    </div>
  );
};

export default Result;
