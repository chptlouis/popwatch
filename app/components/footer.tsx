import Link from "next/link";


export default function Footer() {
    return (
        <footer className="bg-navbar text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="flex flex-col items-center gap-2 float-left">
                    <h1 className="text-2xl font-bold">Popwatch</h1>
                    <p className="text-sm">© 2024 Tous droits réservés</p>
                </div>
                <div className="flex flex-col items-center gap-2 mx-auto">
                    <h1 className="text-lg font-bold">Liens</h1>
                    <Link href="/" className="text-sm hover:underline">Accueil</Link>
                    <Link href="/top-rated" className="text-sm hover:underline">Les mieux notés</Link>
                    <Link href="/trending" className="text-sm hover:underline">Tendances</Link>
                </div>
            </div>
        </footer>
    )
}