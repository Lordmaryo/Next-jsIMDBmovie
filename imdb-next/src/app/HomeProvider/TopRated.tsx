import { DataProps } from "../ApIProvider/APIs";
import Result from "../components/Result";

type topRatedMoviesDataProps = {
  topRatedMoviesData: DataProps[];
};

const TopRated = ({ topRatedMoviesData }: topRatedMoviesDataProps) => {
  return (
    <div>
      <Result results={topRatedMoviesData} />
    </div>
  );
};

export default TopRated;
