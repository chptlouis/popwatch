"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [isMounted, setIsMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }

    return (
        <nav className="bg-navbar border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:p-6">
                <a href="https://popwatch-liard.vercel.app/" className="flex items-center space-x-3">
                    <img src="https://www.svgrepo.com/show/35017/popcorn.svg" className="h-8" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">POPWATCH</span>
                </a>
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-navbar rounded-lg bg-navbar md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-navbar dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                        <a href="#" className="flex flex-row group gap-2 items-center py-2 px-3 text-white hover:text-gray-300 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            <span>A l'affiche</span>
                        </a>
                        </li>
                        <li>
                            <a href="/genres" className="flex flex-row group gap-2 items-center py-2 px-3 text-white hover:text-gray-300 rounded md:bg-transparent md:p-0 dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                <span>Genres</span>
                            </a>
                        </li>
                        <li>
                        <a href="#" className="flex flex-row group gap-2 items-center py-2 px-3 text-white hover:text-gray-300 rounded md:bg-transparent md:p-0 dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            <span>Ma Liste</span>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
