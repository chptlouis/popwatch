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
                <h1 className="text-6xl text-white font-panton">On mate quoi ce soir ?</h1>
                
            </motion.div>
            <motion.div
                initial={{ x: 0, y: 30, opacity: 0 }}
                animate={{ x: 30, y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <h1 className="text-2xl text-white mt-4">Découvrez les films les plus populaires du moment</h1>
            </motion.div>
          </div>
        </section>
    )
}