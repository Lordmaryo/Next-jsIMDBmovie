import React from "react";
import { fanFavorites, fetchTrendingData, topRated, upComingMovies } from "./ApIProvider/APIs";
import FanFavorites from "./HomeProvider/FanFavorites";
import TopRated from "./HomeProvider/TopRated";
import TrendingPage from "./HomeProvider/Trending";
import UpComing from "./HomeProvider/UpComing";

const Page = async () => {
  const trendingData = await fetchTrendingData();
  const topRatedData = await topRated(); 
  const upComingData = await upComingMovies();
  const fansFavoritesData = await fanFavorites();

  return (
    <div className="max-w-6xl mx-auto pb-10 space-y-5">
      <h2>Trending</h2>
      <TrendingPage trendingData={trendingData} />
      <h2>Top Rated</h2>
      <TopRated topRatedData={topRatedData} />
      <h2>Up Coming</h2>
      <UpComing upComingData={upComingData}/>
      <h2>Fan Favorites</h2>
      <FanFavorites fansFavoritesData={fansFavoritesData}/>
    </div>
  );
};

export default Page;
