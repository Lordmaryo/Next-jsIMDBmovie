export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface DataProps {
    id: number;
    original_title: string;
    overview: string;
}

async function fetchData(endpoint: string): Promise<DataProps[]> {
    const result = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}x`, {
        next: { revalidate: 1000 }
    });
    const data = await result.json();
    return data.results as DataProps[];
}

export async function fetchTrendingMovies(): Promise<DataProps[]> {
    return fetchData('trending/all/week');
}

export async function topRatedMovies(): Promise<DataProps[]> {
    return fetchData('movie/top_rated');
}

export async function upComingMovies(): Promise<DataProps[]> {
    return fetchData('movie/upcoming');
}

export async function fanFavoritesMovies(): Promise<DataProps[]> {
    return fetchData('movie/popular');
}

