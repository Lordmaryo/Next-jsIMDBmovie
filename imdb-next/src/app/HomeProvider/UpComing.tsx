import { DataProps } from "../ApIProvider/APIs";
import Result from "../components/Result";

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
