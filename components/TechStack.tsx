import { ReactNode } from 'react';

interface TechStackProps {
    title?: string;
    children: ReactNode;
}

interface TechItemProps {
    name: string;
    icon: ReactNode;
}

export const TechItem = ({ name, icon }: TechItemProps) => {
    return (
        <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">{name}</h3>
        </div>
    );
};

const TechStack = ({ title, children }: TechStackProps) => {
    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className="mb-8 text-2xl font-bold leading-tight text-gray-900 lg:mb-12 lg:text-3xl dark:text-white">
                    {title ? title : "Tech Stack"}
                </h2>
                <div className="space-y-8 grid grid-cols-2 md:grid-cols-3 gap-12">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default TechStack;