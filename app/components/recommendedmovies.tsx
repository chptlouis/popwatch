"use client";

import Link from "next/link";
import { useState } from "react";

export default function RecommendedMovies({ movieRecommendations }: any) {
    const [visibleMovies, setVisibleMovies] = useState(4);
    const loadMoreMovies = () => {
        setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 4);
    };
    return (
        <div className="container mx-auto bg-white/5 rounded-lg w-full p-4 shadow-2xl">
            <h1 className="text-4xl font-bold text-white p-4 mb-4 mt-4 font-poppins">
                Recommended Movies
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {
                    movieRecommendations?.slice(0, visibleMovies).map((movie: any, index: number) => (
                        <Link href={`/movie/${movie.id}`} key={index}>
                            <div className="hover:scale-105 tranform transition-transform duration-200">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    alt={movie.title}
                                    className="rounded-lg w-full"
                                />
                                <div className="p-4">
                                    <h1 className="text-lg font-bold text-white">
                                        {movie.title}
                                    </h1>
                                    <h2 className="text-sm text-gray-400">
                                        {new Date(movie.release_date).getFullYear()}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            {visibleMovies < movieRecommendations.length && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={loadMoreMovies}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                        Voir plus
                    </button>
                </div>
            )}
        </div>
    )
}