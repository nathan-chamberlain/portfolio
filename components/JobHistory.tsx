import ExportedImage from 'next-image-export-optimizer';

interface Job {
    title: string;
    company: string;
    period: string;
    description: string;
    responsibilities?: string[];
    logo?: string;
}

interface JobHistoryProps {
    jobs: Job[];
}

const JobHistory = ({ jobs }: JobHistoryProps) => {
    return (
        <section>
            <div className="p-4 py-8 mx-auto max-w-screen-xl lg:py-16">
                <div className="max-w-screen-lg">
                    <h2 className="mb-8 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        Job History
                    </h2>
                    <div className="space-y-8">
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className=""
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    {job.logo && (
                                        <div className="flex-shrink-0 w-16 h-16 relative">
                                            <ExportedImage
                                                src={job.logo}
                                                alt={`${job.company} logo`}
                                                fill
                                                className="object-contain rounded"
                                                sizes="64px"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                                            {job.title}
                                        </h3>
                                        <p className="mb-2 text-xl font-semibold ">
                                            {job.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                                    {job.period}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    {job.description}
                                </p>
                                {job.responsibilities && job.responsibilities.length > 0 && (
                                    <div>
                                        <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                                            Key Responsibilities:
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                            {job.responsibilities.map((responsibility, idx) => (
                                                <li key={idx}>{responsibility}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobHistory;
