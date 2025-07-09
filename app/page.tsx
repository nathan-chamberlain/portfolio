'use client';

import Footer from '@/components/Footer';
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
                <Project />
            </div>
            <Footer />
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
