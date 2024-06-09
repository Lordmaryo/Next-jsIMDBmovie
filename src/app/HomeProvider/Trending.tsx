import React from "react";
import { Strong } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
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

type TrendingMovieDataProps = {
  trendingMoviesData: DataProps[];
};

const TrendingPage = ({ trendingMoviesData }: TrendingMovieDataProps) => {
  return (
    <div
      style={{ scrollSnapType: "x mandatory", scrollPadding: "30px" }}
      className="custom-scrollbar h-[55vh] flex flex-row flex-none gap-4 overflow-x-auto px-5"
    >
      {trendingMoviesData.map((item) => (
        <div key={item.id} className="w-[300px]">
          <div
            style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}
            className="h-[200px] w-[280px] flex flex-col gap-2 rounded-lg z-10"
          >
            <div className="flex flex-col gap-2">
              <Image
                src={`https://image.tmdb.org/t/p/original${
                  item.backdrop_path || item.poster_path
                }`}
                priority
                alt="movie poster"
                // layout="responsive"
                width={300}
                height={200}
              />
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-1 items-center">
                  <span className="text-amber-500">
                    <FaStar />
                  </span>
                  {item.vote_average.toFixed(1)}
                </div>
                <span>{item.release_date || "Unavailable"}</span>
              </div>
              <strong>{item.original_title || item.name}</strong>
              <Link href={`/movie/${item.id}`}>
                <button className="text-zinc-800 font-bold bg-amber-500 hover:bg-amber-00 cursor-pointer w-full h-8 rounded-sm transition-colors">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingPage;
