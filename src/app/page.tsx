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

const Page = async () => {
  const trendingMoviesData = await fetchTrendingMovies();
  const topRatedMoviesData = await topRatedMovies();
  const upComingMoviesData = await upComingMovies();
  const fansFavoritesMoviesData = await fanFavoritesMovies();

  return (
    <div className="max-w-6xl mx-auto pb-10 space-y-5">
      <h2>Trending</h2>
      <TrendingPage trendingMoviesData={trendingMoviesData} />
      <h2>Top Rated</h2>
      <TopRated topRatedMoviesData={topRatedMoviesData} />
      <h2>Up Coming</h2>
      <UpComing upComingMoviesData={upComingMoviesData} />
      <h2>Fan Favorites</h2>
      <FanFavorites fansFavoritesMoviesData={fansFavoritesMoviesData} />
    </div>
  );
};

export default Page;
