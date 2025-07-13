import Carousel from '@/components/Carousel';
import { StaticImageData } from 'next/image';

interface ProjectHeroProps {
    title: string;
    description: string;
    images: StaticImageData[];
    imagePosition?: 'left' | 'right';
}

const ProjectHero = ({ title, description, images, imagePosition = 'right' }: ProjectHeroProps) => {
    return (
        <section>
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
                    <p className="mb-6 text-lg text-gray-500 md:text-xl dark:text-gray-400">{description}</p>
                </div>
                <div className={`${imagePosition === 'left' ? 'md:order-first' : ''}`}>
                    <Carousel images={images} />
                </div>

            </div>
        </section>
    );
}

export default ProjectHero;