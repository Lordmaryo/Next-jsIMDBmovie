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
