interface ProjectContentProps {
    title: string;
    sections: string[];
}

const ProjectContent = ({ title, sections }: ProjectContentProps) => {
    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        {title}
                    </h2>
                    {sections.map((section, index) => (
                        <p key={index} className="mb-4">
                            {section}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectContent;