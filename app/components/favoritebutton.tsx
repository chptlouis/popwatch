"use client";

import { useState, useEffect } from "react";

export default function FavoriteButton({ movie }: any) {
    const storage = window.localStorage;
    const favorites = storage.getItem('favorites') || '[]';
    const parsedFavorites = JSON.parse(favorites);

    const [isFavorite, setIsFavorite] = useState(parsedFavorites.some((fav: any) => fav.id === movie.id));

    const toggleFavorite = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        let newFavorites;
        if (isFavorite) {
            newFavorites = parsedFavorites.filter((fav: any) => fav.id !== movie.id);
        } else {
            newFavorites = [...parsedFavorites, movie];
        }
        storage.setItem('favorites', JSON.stringify(newFavorites));
        setIsFavorite(!isFavorite);
    };

    useEffect(() => {
        setIsFavorite(parsedFavorites.some((fav: any) => fav.id === movie.id));
    }, [movie.id, parsedFavorites]);

    return (
        <button
            className={`bg-white/10 hover:bg-black hover:bg-opacity-50 text-white font-poppins font-bold text-lg py-2 px-2 rounded-full ${isFavorite ? 'bg-white/30' : ''}`}
            onClick={toggleFavorite}
        >
            {isFavorite ?
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#f8e71c" stroke="#f8e71c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            :
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f8e71c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            }
        </button>
    )
}