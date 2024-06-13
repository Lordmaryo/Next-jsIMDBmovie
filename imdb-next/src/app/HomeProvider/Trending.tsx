import { DataProps } from "../ApIProvider/APIs";
import Result from "../components/Result";

type TrendingMovieDataProps = {
  trendingMoviesData: DataProps[];
};

const TrendingPage = ({ trendingMoviesData }: TrendingMovieDataProps) => {
  return (
    <div>
      <Result results={trendingMoviesData} />
    </div>
  );
};

export default TrendingPage;
