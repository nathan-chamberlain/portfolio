import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    link: string;
    linkText: string;
    imagePosition?: 'left' | 'right';
}

const Project = ({ title, description, imageSrc, imageAlt, link, linkText, imagePosition = 'right' }: ProjectProps) => {
    return (
        <section>
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="relative w-full aspect-video">
                    <Image
                        src={imageSrc}
                        className="w-full rounded-lg"
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className={`mt-4 md:mt-0 ${imagePosition === 'left' ? 'md:order-first' : ''}`}>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{description}</p>
                    <Link href={link} className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900">
                        {linkText}
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Project;