import Image from 'next/image';
import Link from 'next/link';

const Project = () => {
    return (
        <section>
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <Image
                    src="/images/sapp.png"
                    className="w-full rounded-lg"
                    alt="SAPP image"
                    width={1339}
                    height={910}
                    priority
                />
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sepsis App</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">I am currently creating an application that supports clinical decisions around sepsis in the emergency department. This project is in collaboration with the CCDHB, Te Whatu Ora, and Wellington Hospital.</p>
                    <Link href="/sapp" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        Learn more
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Project;