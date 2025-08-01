'use client';
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <nav className=" border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nathan Chamberlain Portfolio</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link href="/?contact=true" className="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 lg:block dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Contact</Link>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded={isMenuOpen}>
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isMenuOpen ? 'hidden' : 'block'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className={`${isMenuOpen ? 'block' : 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-1">
                            <li>
                                <Link href="/" className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-gray-900 lg:p-0 dark:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/sapp" className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-gray-900 lg:p-0 dark:text-white" aria-current="page">Sepsis App</Link>
                            </li>
                            <li>
                                <Link href="/gemtech-website" className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-gray-900 lg:p-0 dark:text-white" aria-current="page">New Gemtech Website</Link>
                            </li>
                            <li>
                                <Link href="/?contact=true" className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-gray-900 lg:p-0 dark:text-white lg:hidden" aria-current="page">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;