"use client";

import { useEffect, useState } from "react";
import MovieCard from "../components/moviecard";

export default function MyList() {
    const [favorites, setFavorites] = useState<any[]>([]);

    useEffect(() => {
        const storage = window.localStorage;
        const favorites = storage.getItem('favorites') || '[]';
        setFavorites(JSON.parse(favorites));
    }, []);

    return (
        <main className="min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white mt-12">Ma liste</h1>
                <h2 className="text-lg text-gray-200 mt-4 italic opacity-80">
                    Les films que j'aimerais (re)découvrir
                </h2>
                {favorites.length === 0 ? (
                    <div className="flex justify-center items-center h-96">
                        <h2 className="text-2xl text-white">Aucun film dans votre liste</h2>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
                        {favorites.map((movie: any, index: number) => (
                            <div key={index}>
                                <MovieCard movie={movie} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}