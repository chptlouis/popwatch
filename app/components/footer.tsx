import Link from "next/link";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="bg-navbar text-white py-8">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex flex-col items-center gap-2 ml-4 sm:ml-0">
                    <h1 className="text-2xl font-bold">Popwatch</h1>
                    <p className="text-sm">© 2024 Tous droits réservés</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Link href="https://www.themoviedb.org/">
                        <p className="text-sm underline">Données fournies par TMDB</p>
                    </Link>
                </div>
                <div className="flex flex-col items-center gap-2 mr-4 sm:mr-0">
                    <h1 className="text-lg font-bold">Liens</h1>
                    <Link href="/" className="text-sm hover:underline">Accueil</Link>
                    <Link href="/top-rated" className="text-sm hover:underline">Les mieux notés</Link>
                    <Link href="/now-playing?page=1" className="text-sm hover:underline">Tendances</Link>
                    
                </div>
            </div>
        </footer>
    )
}