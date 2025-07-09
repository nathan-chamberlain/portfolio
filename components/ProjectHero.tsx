import Carousel from '@/components/Carousel';

const ProjectHero = () => {
    const images = [
        "/images/sapp1.png",
        "/images/sapp2.png",
        "/images/sapp3.png",
        "/images/sapp4.png",
        "/images/sapp5.png",
        "/images/sapp6.png",
    ];

    return (
        <section>
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sepsis App (SAPP)</h2>
                    <p className="mb-6 text-lg text-gray-500 md:text-xl dark:text-gray-400">SAPP is an application that supports clinical decision-making around patients who may have sepsis or an infection. It is designed to be used in the emergency department.</p>
                </div>
                <Carousel images={images} />
            </div>
        </section>
    );
}

export default ProjectHero;