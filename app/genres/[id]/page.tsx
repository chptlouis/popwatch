import { getMoviesByGenre, getGenreById } from "@/app/services/tmdb";
import MovieCard from "@/app/components/moviecard";

export default async function Genre(props: any) {
    const { id } = await props.params;
    const movies = await getMoviesByGenre(id);
    const genre = await getGenreById(id);
    return (
        <main className="min-h-screen">
            <div className="container mx-auto py-12 md:py-16 px-4 sm:px-6 max-w-[1400px]">
                <div
                className="bg-white/5 rounded-lg md:rounded-2xl lg:rounded-3xl 
                p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl"
                >
                    <h1 className="font-poppins text-3xl md:text-4xl mb-4 font-bold text-white">{genre.name}</h1>
                    <h2 className="text-lg text-gray-200 mb-8 italic opacity-80">
                        Les meilleurs films de la catégorie {genre.name}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {movies?.map((movie: any, index: number) => (
                            <a href={`/movie/${movie.id}`} key={index}>
                                <MovieCard movie={movie} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}