import { API_KEY } from "@/app/ApIProvider/APIs";
import FormatCurrency from "@/app/utilities/FormatCurrency";
import { Strong } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

interface MovieProps {
  backdrop_path: string;
  poster_path: string;
  title: string;
  name: string;
  revenue: number;
  release_date: string;
  vote_count: number;
  overview: string;
}

const MoviePage = async ({ params }: any) => {
  const movieId = params.id;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`
  );
  const movie: MovieProps = await response.json();
  console.log(movie);

  return (
    <div className="max-w-6xl mx-auto py-10 flex flex-row flex-wrap justify-center gap-5 md:justify-between items-center px-5">
      <Image
        src={`https://image.tmdb.org/t/p/original${
          movie.backdrop_path || movie.poster_path
        }`}
        priority
        height={300}
        width={500}
        alt="Image poster"
      />

      <div className="w-[589px]">
        <h2 className="text-lg md:text-2xl font-bold">
          {movie.title || movie.name}
        </h2>
        <p className="text-base md:text-lg py-4">{movie.overview}</p>
        <div className="space-y-1">
          <div>
            <Strong>Box Office </Strong>
            <span>${FormatCurrency(movie?.revenue)}</span>
          </div>
          <div>
            <Strong>Date Released </Strong>
            <span>{movie.release_date}</span>
          </div>
          <div>
            <Strong>Vote Count </Strong>
            <span>{movie.vote_count?.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
