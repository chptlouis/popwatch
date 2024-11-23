import { getGenres } from '../services/tmdb';

const genresIcons: { [key: string]: string } = {
    Action: '🔥',
    Aventure: '🌍',
    Animation: '🎬',
    Comédie: '😂',
    Crime: '🔫',
    Documentaire: '📖',
    Drame: '🎭',
    Familial: '👨‍👩‍👧‍👦',
    Fantastique: '🧙',
    Histoire: '📜',
    Horreur: '👻',
    Musique: '🎵',
    Mystère: '🕵️',
    Romance: '💕',
    'Science-Fiction': '👽',
    Téléfilm: '📺',
    Thriller: '🎥',
    Guerre: '⚔️',
    Western: '🤠',
};

export default async function Genres() {
    const genres = await getGenres();
    console.log('genres :', genres);
    return (
        <main className="min-h-screen">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
                    {genres?.map((genre: { id: number, name: string }, index: number) => (
                        <a href={`/genres/${genre.id}?page=1`} key={index} className='flex flex-col items-center gap-2 bg-white/5 rounded-xl p-10 hover:scale-105 transform transition-all duration-300'>
                            <div className="text-4xl">{genresIcons[genre.name]}</div>
                            <div className="text-xl md:text-2xl text-white font-poppins">
                                {genre.name}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    )
}