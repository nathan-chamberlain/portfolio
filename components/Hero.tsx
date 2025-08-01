'use client';

import { useState } from "react";
import ExportedImage from "next-image-export-optimizer";

interface HeaderProps {
    onScrollToProject?: () => void;
    contactOpen?: boolean;
}

import pfp from '@/public/images/pfp.png';

const Hero = ({ onScrollToProject, contactOpen = false }: HeaderProps) => {
    const [contact, setContact] = useState(contactOpen);

    return (
        <section>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:items-start">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Nathan Chamberlain Portfolio</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Hi! I am an aspiring full stack software engineer. I am in my honours year of a software engineering degree at Victoria University, where I also tutor 3rd year Engineering Project Management, and Applied Cryptography.  I am undertaking a research project with Te Whatu Ora to develop Sepsis App (SAPP), a tablet application that will support decision making around sepsis in emergency departments. I also work part time as the Digital Support Coordinator at Gemtech, an NZ-owned Wellington consultancy. I am currently developing a new website for Gemtech using Next.js.</p>
                    <button onClick={onScrollToProject} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 cursor-pointer">
                        Projects
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <button onClick={() => { setContact(!contact) }} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 cursor-pointer">
                        Contact
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${contact ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-900/20 dark:border-blue-800">
                            <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100">Contact Me</h2>
                            <p className="text-gray-600 dark:text-gray-300">You can reach me at:</p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                                <li>Email: <a href="mailto:nathan@chamberlain.org.nz" className="text-blue-600 hover:underline dark:text-blue-400">nathan@chamberlain.org.nz</a></li>
                                <li>Phone: 021 0261 7437</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:items-start">
                    <div className="rounded-xl overflow-hidden w-full min-h-full">
                        <ExportedImage
                            src={pfp}
                            className="w-full h-full object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                            alt="Nathan Chamberlain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;