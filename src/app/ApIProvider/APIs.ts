export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// TODO: create 4 api urls and display to homePage 

interface DataProps {
    id: number;
    original_title: string;
    overview: string;
}

// Trending data url
export async function fetchTrendingData(): Promise<DataProps[]> {
    const result = await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
    );
    const data = await result.json();
    return data.results as DataProps[];
}

//Top rated data url
export async function topRated(): Promise<DataProps[]> {
    const result = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
    const data = await result.json();
    return data.results as DataProps[];
}

// upcoming movies data url
export async function upComingMovies(): Promise<DataProps[]> {
    const result = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    );
    const data = await result.json();
    return data.results as DataProps[];
}

//fan favorites
export async function fanFavorites(): Promise<DataProps[]> {
    const result = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    const data = await result.json();
    return data.results as DataProps[];
}