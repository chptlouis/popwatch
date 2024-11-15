
import MovieSlider from "@/app/components/movieslider";
import { getMovieDetails, getMovieCredits, getRecommendedMovies } from "@/app/services/tmdb";

export default async function Movie(props: any) {
    const { id } = await props.params;
    const movieDetails = await getMovieDetails(id);
    const movieCasting = await getMovieCredits(id);
    const movieRecommendations = await getRecommendedMovies(id);

    if (movieDetails) {
        console.log(movieDetails);
        console.log(movieRecommendations)
    }

    return (
        <main className="min-h-screen">
            <div className="relative h-[40vh] lg:h-[50vh] flex items-center">
                <img
                    src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
                    alt={movieDetails.title}
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
            </div>
            <div className="container mx-auto px-4 -mt-72 md:-mt-96 mb-8">
                <div className="flex flex-col lg:flex-row lg:gap-16 py-8">
                    <div className="w-full lg:w-1/3">
                        <div className="group relative">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                                alt={movieDetails.title}
                                width={400}
                                height={600}
                                className="w-full rounded-xl shadow-2xl"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 space-y-8 z-10 justify-items-center lg:justify-items-start">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 mt-12">
                            {movieDetails.title}
                        </h1>
                        <div className="flex items-center gap-4">
                            {
                                movieDetails.genres?.map((genre: any, index: number) => (
                                    <a href={`/genres/${genre.id}`} key={index} className="px-2 py-1 bg-blue-500/20 rounded-md text-blue-300 text-sm">
                                        <span>
                                            {genre.name}
                                        </span>
                                    </a>
                                ))
                            }
                        </div>
                        <h2 className="text-lg text-gray-200 mb-4 italic opacity-80">
                            {movieDetails.tagline}
                        </h2>
                        <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                            <div className="relative size-20">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-yellow-200 dark:text-neutral-700" strokeWidth="2"></circle>
                                </svg>
                                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <span className="text-center text-2xl font-bold text-yellow-500 dark:text-yellow-500"> {movieDetails.vote_average?.toFixed(1)} </span>
                                </div>
                            </div>
                            <span className="text-lg text-gray-300">
                                {new Date(movieDetails.release_date).getFullYear()}
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-4 mt-4 font-poppins">
                            Synopsis
                        </h1>
                        <h1 className="sm:text-lg text-left md:text-2xl lg:text-lg text-white font-poppins">
                            {movieDetails.overview}
                        </h1>
                        <div className="container mx-auto bg-white/5 rounded-lg w-full p-4 shadow-2xl">
                            <h1 className="text-4xl font-bold text-white p-4 mb-4 mt-4 font-poppins">
                                Casting
                            </h1>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                                {
                                    movieCasting?.map((actor: any, index: number) => (
                                        <div key={index}>
                                            <img
                                                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                                                alt={actor.name}
                                                className="rounded-lg"
                                            />
                                            <h1 className="text-lg font-bold text-white mt-2">
                                                {actor.name}
                                            </h1>
                                            <h2 className="text-sm text-gray-200">
                                                {actor.character}
                                            </h2>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {movieRecommendations.length > 0 && <MovieSlider movies={movieRecommendations} sliderText="Films recommandés" />}
            </div>
        </main>
    );
}