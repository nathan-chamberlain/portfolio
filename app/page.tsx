'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Project from '@/components/Project';
import { useRef } from 'react';

export default function Home() {
  const projectRef = useRef<HTMLDivElement>(null);

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Header onScrollToProject={scrollToProject} />
      <div ref={projectRef}>
        <Project />
      </div>
      <Footer />
    </>
  );
}
