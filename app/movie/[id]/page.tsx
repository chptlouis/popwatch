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
                <div className="absolute inset-0 flex justify-center items-center w-full">
                    <div className="flex flex-col lg:flex-row h-screen items-center lg:gap-28 p-4 rounded-lg max-w-screen-lg">
                        <img
                            src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                            width={400}
                            height={600}
                            className=""
                        />
                        <div className="flex flex-col text-center lg:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                                {movieDetails.title}
                            </h1>
                            <h2 className="text-lg text-gray-200 mb-4 italic opacity-80">
                                {movieDetails.tagline}
                            </h2>
                            <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                                <span className="px-2 py-1 bg-yellow-500/20 rounded-md text-yellow-300 text-sm">
                                    ⭐ {movieDetails.vote_average.toFixed(1)}
                                </span>
                                <span className="text-sm text-gray-300">
                                    {new Date(movieDetails.release_date).getFullYear()}
                                </span>
                            </div>
                            <h1 className="sm:text-lg md:text-2xl lg:text-lg text-white mb-4">
                                {movieDetails.overview}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}