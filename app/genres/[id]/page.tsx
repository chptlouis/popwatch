"use client";

import { getMoviesByGenre, getGenreById } from "@/app/services/tmdb";
import MovieCard from "@/app/components/moviecard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Genre(props: any) {
    const searchParams = useSearchParams();
    const page = searchParams.get("page") || "1";
    const [id, setID] = useState();
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState<{ name: string } | null>(null);
    const [currentPage, setCurrentPage] = useState(parseInt(page));

    useEffect(() => {
        const fetchID = async () => {
            const { id } = await props.params;
            setID(id);
        };
        fetchID();
    }, [props.params]);

    useEffect(() => {
        const fetchMovies = async () => {
            if (id) {
                const movies = await getMoviesByGenre(id, currentPage);
                const genreId = await getGenreById(id);
                setGenre(genreId);
                setMovies(movies);
            }
        };

        fetchMovies();
    }, [currentPage, id]);

    useEffect(() => {
        setCurrentPage(parseInt(page));
    }, [page]);

    console.log('page :', page);
    return (
        <main className="min-h-screen">
            <div className="container mx-auto py-12 md:py-16 px-4 sm:px-6 max-w-[1400px]">
                <div
                className="bg-white/5 rounded-lg md:rounded-2xl lg:rounded-3xl
                p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl"
                >
                    <h1 className="font-poppins text-3xl md:text-4xl mb-4 font-bold text-white">{genre?.name}</h1>
                    <h2 className="text-lg text-gray-200 mb-8 italic opacity-80">
                        Les meilleurs films de la catégorie {genre?.name}
                    </h2>
                    <div className="flex justify-center mb-8 gap-8">
                        {[...Array(5)].map((_, i) => {
                            const pageNumber = i + 1;
                            return (
                                <Link href={`/genres/${id}?page=${pageNumber}`} key={pageNumber}>
                                    <button className={`bg-white/10 text-white font-poppins font-bold text-lg py-2 px-4 rounded-lg ${currentPage === pageNumber ? 'bg-white/30' : ''}`}>
                                        {pageNumber}
                                    </button>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {movies?.map((movie: any, index: number) => (
                            <a href={`/movie/${movie.id}`} key={index}>
                                <MovieCard movie={movie} />
                            </a>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8 gap-8">
                        {[...Array(5)].map((_, i) => {
                            const pageNumber = i + 1;
                            return (
                                <Link href={`/genres/${id}?page=${pageNumber}`} key={pageNumber}>
                                    <button className={`bg-white/10 text-white font-poppins font-bold text-lg py-2 px-4 rounded-lg ${currentPage === pageNumber ? 'bg-white/30' : ''}`}>
                                        {pageNumber}
                                    </button>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}