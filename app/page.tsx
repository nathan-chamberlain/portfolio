'use client';

import Hero from '@/components/Hero';
import Project from '@/components/Project';
import { useRef, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

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
                    title="Sepsis App"
                    description="I am currently creating an application that supports clinical decisions around sepsis in the emergency department. This project is in collaboration with the CCDHB, Te Whatu Ora, and Wellington Hospital."
                    imageSrc="/images/sapp3.png"
                    imageAlt="SAPP image"
                    link="/sapp"
                    linkText="Learn more"
                    imagePosition="right"
                />
            </div>
            <Project
                title="Gemtech Website"
                description="I am currently creating a new website for Gemtech Solutions using Next.js."
                imageSrc="/images/gemtech1.png"
                imageAlt="Gemtech Solutions website"
                link="/gemtech-website"
                linkText="Learn more"
                imagePosition="left"
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
