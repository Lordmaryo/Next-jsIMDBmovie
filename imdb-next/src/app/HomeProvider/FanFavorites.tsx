import { DataProps } from "../ApIProvider/APIs";
import Result from "../components/Result";

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
