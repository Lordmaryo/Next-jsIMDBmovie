import React from "react";
import {
  fanFavoritesMovies,
  fetchTrendingMovies,
  topRatedMovies,
  upComingMovies,
} from "./ApIProvider/APIs";
import FanFavorites from "./HomeProvider/FanFavorites";
import TopRated from "./HomeProvider/TopRated";
import TrendingPage from "./HomeProvider/Trending";
import UpComing from "./HomeProvider/UpComing";
import './globals.css';

const Page = async () => {
  const trendingMoviesData = await fetchTrendingMovies();
  const topRatedMoviesData = await topRatedMovies();
  const upComingMoviesData = await upComingMovies();
  const fansFavoritesMoviesData = await fanFavoritesMovies();

  return (
    <div className="max-w-6xl mx-auto flex flex-col pb-10 px-5">
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-500 my-5">
          Trending
        </h2>
        <TrendingPage trendingMoviesData={trendingMoviesData} />
      </div>
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-500  my-5">
          Top Rated
        </h2>
        <TopRated topRatedMoviesData={topRatedMoviesData} />
      </div>
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-500  my-5">
          Up Coming
        </h2>
        <UpComing upComingMoviesData={upComingMoviesData} />
      </div>
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-500  my-5">
          Fan Favorites
        </h2>
        <FanFavorites fansFavoritesMoviesData={fansFavoritesMoviesData} />
      </div>
    </div>
  );
};

export default Page;
