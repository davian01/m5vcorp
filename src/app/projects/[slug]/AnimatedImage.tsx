'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  alt: string;
}

export default function AnimatedImage({ src, alt }: AnimatedImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up-on-view');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imageRef} className="relative w-full h-[600px] mb-16 opacity-0">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
} 