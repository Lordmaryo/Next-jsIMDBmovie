import { API_KEY } from "@/app/ApIProvider/APIs";
import Result from "@/app/result";
import React from "react";

const SearchPage = async ({ params }: any) => {
  const searchTerm = params.searchTerm;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}
    `
  );

  const data = await response.json();
  console.log(data);

  return <div>{data && <Result results={data.result} />}</div>;
};

export default SearchPage;
