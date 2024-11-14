"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MovieCard from "../components/moviecard";
import { getNowPlayingMovies } from "../services/tmdb";

export default function NowPlaying() {
    const searchParams = useSearchParams();
    const page = searchParams.get("page") || "1";
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(parseInt(page));

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getNowPlayingMovies(currentPage);
            setNowPlayingMovies(movies);
        };

        fetchMovies();
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(parseInt(page));
    }, [page]);

    return (
        <main className="min-h-screen">
            <div className="container mx-auto py-12 md:py-16 px-4 sm:px-6 max-w-[1400px]">
                <div
                    className="bg-white/5 rounded-lg md:rounded-2xl lg:rounded-3xl
                    p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl"
                >
                    <h1 className="font-poppins text-3xl md:text-4xl ml-4 mb-8 font-bold text-white">À l'affiche</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {nowPlayingMovies?.map((movie: any, index: number) => (
                            <Link href={`/movie/${movie.id}`} key={index}>
                                <MovieCard movie={movie} />
                            </Link>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8 gap-8">
                        {[...Array(5)].map((_, i) => {
                            const pageNumber = i + 1;
                            return (
                                <Link href={`/now-playing?page=${pageNumber}`} key={pageNumber}>
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
    );
}