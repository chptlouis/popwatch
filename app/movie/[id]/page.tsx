import { getMovieDetails } from "@/app/services/tmdb";

export default async function Movie(props: any) {
    const { id } = await props.params;
    const movieDetails = await getMovieDetails(id);
    if (movieDetails) {
        console.log(movieDetails);
    }
    return (
        <main className="min-h-screen">
            <div className="relative h-[120vh] md:h-[90vh] flex items-center">
                <img
                    src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
                    alt={movieDetails.title}
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                <div className="absolute inset-0 flex justify-center items-center w-full">
                    <div className="flex flex-col sm:mb-8 lg:flex-row h-screen items-center lg:gap-28 p-4 rounded-lg w-3/4">
                        <img
                            src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                            width={400}
                            height={600}
                            className="rounded-lg"
                        />
                        <div className="flex flex-col text-center lg:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 mt-12">
                                {movieDetails.title}
                            </h1>
                            <h2 className="text-lg text-gray-200 mb-4 italic opacity-80">
                                {movieDetails.tagline}
                            </h2>
                            <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                                <div className="relative size-20">
                                    <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-yellow-200 dark:text-neutral-700" strokeWidth="2"></circle>
                                    </svg>

                                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                        <span className="text-center text-2xl font-bold text-yellow-500 dark:text-yellow-500"> {movieDetails.vote_average.toFixed(1)} </span>
                                    </div>
                                </div>
                                <span className="text-lg text-gray-300">
                                    {new Date(movieDetails.release_date).getFullYear()}
                                </span>
                            </div>
                            <h1 className="text-4xl font-bold text-white mb-4 mt-6 font-poppins">
                                Synopsis
                            </h1>
                            <h1 className="sm:text-lg text-left md:text-2xl lg:text-lg text-white mb-4 font-poppins">
                                {movieDetails.overview}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}