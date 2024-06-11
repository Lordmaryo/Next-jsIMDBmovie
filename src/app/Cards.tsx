import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

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

type CardsProps = {
  results: DataProps;
};

const Cards = ({ results }: CardsProps) => {
  return (
    // <div>
    <div className="w-[300px]">
      <div
        style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}
        className="h-[200px] w-[280px] flex flex-col gap-2 rounded-lg z-10"
      >
        <div className="flex flex-col gap-2">
          <Image
            src={`https://image.tmdb.org/t/p/original${
              results.backdrop_path || results.poster_path
            }`}
            priority
            alt="movie poster"
            // layout="responsive"
            width={300}
            height={200}
          />
          <div className="flex flex-row justify-between Resultss-center">
            <div className="flex flex-row gap-1 Resultss-center">
              <span className="text-amber-500">
                <FaStar />
              </span>
              {results.vote_average.toFixed(1)}
            </div>
            <span>{results.release_date || "Unavailable"}</span>
          </div>
          <strong>{results.original_title || results.name}</strong>
          <Link href={`/Movie/${results.id}`}>
            <button className="text-zinc-800 font-bold bg-amber-500 hover:bg-amber-00 cursor-pointer w-full h-8 rounded-sm transition-colors">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Cards;
