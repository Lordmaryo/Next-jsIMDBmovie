import Result from "../components/Result";

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
    <div>
      <Result results={trendingMoviesData} />
    </div>
  );
};

export default TrendingPage;
