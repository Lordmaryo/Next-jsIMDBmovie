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

type upComingMoviesDataProps = {
  upComingMoviesData: DataProps[];
};

const UpComing = ({ upComingMoviesData }: upComingMoviesDataProps) => {
  return (
    <div>
      <Result results={upComingMoviesData} />
    </div>
  );
};

export default UpComing;
