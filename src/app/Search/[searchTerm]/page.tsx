import { API_KEY } from "@/app/ApIProvider/APIs";
import Result from "@/app/result";
import React from "react";

interface ParamsProps {
  searchTerm: string;
}

const SearchPage = async ({ params }: { params: ParamsProps }) => {
  const searchTerm = params.searchTerm;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}
    `
  );

  const data = await response.json();
  const checkErrors = !data.results || data.results.length === 0;
  if (checkErrors) {
    console.error("No results found");
  }

  return (
    <div className="max-w-6xl mx-auto py-5 px-2">
      {checkErrors ? (
        <h1 className="md:text-2xl sm:text-xl text-base font-bold my-5 ml-5">
          <span className="font-extralight">No results for</span>
          <span className="font-bold text-red-400"> {searchTerm}</span>
        </h1>
      ) : (
        <Result results={data.results} />
      )}
    </div>
  );
};

export default SearchPage;
