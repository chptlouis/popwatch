"use client";

import { Key, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CarouselProps {
  trendingMoviesPosters: string[];
}

export default function Carousel({ trendingMoviesPosters }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingMoviesPosters.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [trendingMoviesPosters.length]);

    return (
        <section className="relative h-[80vh] md:h-[90vh] flex items-center overflow-hidden">
          {trendingMoviesPosters.map((poster: string, index: Key | null | undefined) => (
            <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 
              ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            >
                <img
                key={index}
                src={`https://image.tmdb.org/t/p/original${poster}`}
                alt=""
                className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90"></div>
            </div>
          ))}
          <div className="container mx-auto mt-8 relative">
            <motion.div
                initial={{ x: 0, y: 20, opacity: 0 }}
                animate={{ x: 20, y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl lg:text-6xl text-white font-poppins font-bold">On mate quoi ce soir ?</h1>
            </motion.div>
            <motion.div
                initial={{ x: 0, y: 20, opacity: 0 }}
                animate={{ x: 20, y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="font-poppins text-xl lg:text-2xl text-white mt-4">Découvrez les films les plus populaires du moment</h1>
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-row group gap-4 mt-6 ml-8"
            >
                <a href="/top-rated">
                  <button className="flex flex-row items-center gap-2 p-2 rounded border text-white hover:bg-white hover:bg-opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    Les mieux notés
                  </button>
                </a>
                <button className="flex flex-row items-center gap-2 p-2 rounded border text-white hover:bg-white hover:bg-opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  <a href="/genres">Tous les genres</a>
                </button>
            </motion.div>
          </div>
        </section>
    )
}