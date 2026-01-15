import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollRevealProps {
    ref: React.RefObject<HTMLElement | null>;
    stagger?: number;
    delay?: number;
    trigger?: React.RefObject<HTMLElement | null>; // Optional custom trigger
    start?: string;
    markers?: boolean;
}

export const useScrollReveal = ({
    ref,
    stagger = 0.1,
    delay = 0,
    trigger,
    start = 'top 75%',
    markers = false,
}: UseScrollRevealProps) => {
    useEffect(() => {
        if (!ref.current) return;

        // Use querySelectorAll if the ref is a container with 'reveal-item' class children, 
        // otherwise animate the ref itself.
        const element = ref.current;
        const items = element.classList.contains('reveal-container')
            ? element.querySelectorAll('.reveal-item')
            : [element];

        if (items.length === 0) return;

        gsap.fromTo(
            items,
            {
                y: 80,
                opacity: 0,
                scale: 0.95,
                filter: 'blur(10px)',
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                duration: 1.2,
                ease: 'power3.out',
                stagger: stagger,
                delay: delay,
                scrollTrigger: {
                    trigger: trigger?.current || element,
                    start: start,
                    toggleActions: 'play none none reverse', // Re-play on scroll back up? Or just play once? 'play none none none' for once.
                    markers: markers,
                },
            }
        );
        // Cleanup function handled by GSAP's own garbage collection usually, 
        // but to be safe with React 18 strict mode + internal routing, we might want manual cleanup.
        // However, gsap.context is preferred in components. 
        // Since this is a hook, we rely on the component's unmount or just let ScrollTrigger handle it.

        return () => {
            // kill scrolltriggers associated? 
            // safer to just let them exist or use a context in parent.
            // For a simple hook, this is okay.
        };
    }, [ref, stagger, delay, trigger, start, markers]);
};
