import Result from "../Result";

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

type fansFavoritesMoviesDataProps = {
  fansFavoritesMoviesData: DataProps[];
};

const FanFavorites = ({
  fansFavoritesMoviesData,
}: fansFavoritesMoviesDataProps) => {
  return (
    <div>
      <Result results={fansFavoritesMoviesData} />
    </div>
  );
};

export default FanFavorites;
