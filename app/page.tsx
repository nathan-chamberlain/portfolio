'use client';

import Hero from '@/components/Hero';
import Project from '@/components/Project';
import { useRef, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import JobHistory from '@/components/JobHistory';

const Home = () => {
    const [contactOpen, setContactOpen] = useState(false);
    const projectRef = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams) {
            setContactOpen(searchParams.get('contact') === 'true');
        }
    }, [searchParams])

    const scrollToProject = () => {
        projectRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <>
            <Hero
                key={contactOpen ? 'contact-open' : 'contact-closed'}
                onScrollToProject={scrollToProject}
                contactOpen={contactOpen}
            />
            <div ref={projectRef}>
                <Project
                    title="interrank.xyz"
                    description="My team and I won 2nd place at the 2025 VUW Hackathon with our project interrank.xyz, the AI-powered one-way video interview training platform. It uses AI to analyse your video responses and provide feedback on how to improve your interview skills."
                    imageSrc="/images/interrank1.png"
                    imageAlt="interrank.xyz"
                    link="/interrank"
                    linkText="Learn more"
                    imagePosition="left"
                />
                <Project
                    title="Sepsis App"
                    description="I created an application that supports clinical decisions around sepsis in the emergency department. This project was in collaboration with Te Whatu Ora/Health New Zealand and Te Herenga Waka/Victoria University of Wellington."
                    imageSrc="/images/sapp3.png"
                    imageAlt="SAPP image"
                    link="/sapp"
                    linkText="Learn more"
                    imagePosition="right"
                />
                <Project
                    title="New Gemtech Website"
                    description="I created a new website for Gemtech using Next.js. The website features a modern design, responsive layout, and showcases Gemtech's services and projects effectively."
                    imageSrc="/images/gemtech1.png"
                    imageAlt="New Gemtech Website"
                    link="/gemtech-website"
                    linkText="Learn more"
                    imagePosition="left"
                />
            </div>
            <JobHistory
                jobs={[
                    {
                        title: "Graduate Developer",
                        company: "Datacom",
                        period: "October 2025 - Present",
                        logo: "/images/datacomlogo.jpg",
                        description: "Working on AIDA (AI-Driven Assurance), an AI-powered service orchestrator that helps App Assurance and Service Desk teams manage and resolve IT incidents more efficiently.",
                    },
                    {
                        title: "Digital Support Coordinator",
                        company: "Gemtech",
                        period: "August 2023 - October 2025",
                        logo: "/images/gemtechlogo.png",
                        description: "Created a new website for Gemtech using Next.js. Provided support for Gemtech's digital opertations. Consulting on digital solutions for clients.",
                    },
                    {
                        title: "Tutor - Engineering Project Management & Applied Cryptography",
                        company: "Victoria University of Wellington",
                        period: "February 2025 - November 2025",
                        logo: "/images/vuwlogo.png",
                        description: "Tutoring 3rd year Software Engineering students in Engineering Project Management and Applied Cryptography courses. Assisting students with coursework and projects",
                    }

                ]}
            />

        </>
    );
}


export default function HomePage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
        }>
            <Home />
        </Suspense>
    );
}
