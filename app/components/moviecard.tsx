export default function MovieCard(movie: any) {
    return (
        <div className="relative transform hover:scale-105 transition-transform duration-200">
            <img src={`https://image.tmdb.org/t/p/original${movie.movie.poster_path}`} alt={movie.movie.title} className="rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-75 opacity-100 lg:opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end items-start text-center p-4 rounded-lg">
                <h2 className="text-lg font-medium text-white mb-2">
                    {movie.movie.title}
                </h2>
                <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-yellow-500/20 rounded-md text-yellow-300 text-sm">
                        ⭐ {movie.movie.vote_average.toFixed(1)}
                    </span>
                    <span className="text-sm text-gray-300">
                        {new Date(movie.movie.release_date).getFullYear()}
                    </span>
                </div>
            </div>
        </div>
    )
}