"use client";

import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import MovieCard from "./moviecard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MovieSlider({ movies, sliderText }: any) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                }
            }
        ]
    };

    return (
        <div className="container mx-auto bg-white/5 rounded-lg w-full p-8 md:p-4 pb-12 shadow-2xl">
            <h1 className="text-4xl font-bold text-white p-4 mb-4 mt-4 font-poppins">
                {sliderText}
            </h1>
            <Slider {...settings}>
                {
                    movies?.map((movie: any, index: number) => (
                        <div key={index} className="p-2">
                            <Link href={`/movie/${movie.id}`}>
                                <MovieCard movie={movie} />
                            </Link>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}