import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRive } from 'rive-react';
import BackgroundCurve from '../ui/background-curve';
import { useScrollReveal } from '../../hooks/use-scroll-reveal';

const Introduction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  // Rive signature animation
  const { RiveComponent } = useRive({
    src: '/riv-animations/signature.riv',
    autoplay: true,
  });

  // Set up letter animation after refs are populated
  useEffect(() => {
    const timer = setTimeout(() => {
      const letters = lettersRef.current.filter(el => el !== null);
      if (letters.length > 0 && textRef.current) {
        // Set initial invisible state
        gsap.set(letters, { opacity: 0, y: 30 });

        // Animate on scroll with fromTo
        gsap.fromTo(letters,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.03,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 75%",
            }
          }
        );
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []); // Run once after mount

  // Apply scroll reveal to purely decorative/structure elements (not the main text which has its own sequencer)
  useScrollReveal({
    ref: containerRef,
    stagger: 0.1,
    start: "top 80%",
  });

  useGSAP(() => {
    // Additional animations can be added here if needed
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="reveal-container relative w-full bg-[#0E1100] text-ln-cream py-32 px-4 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Animated Background Green Curve - Same as Hero */}
      <BackgroundCurve opacity={10} className="scale-150 rotate-45" />

      {/* Topographic Lines Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M-100 200C100 150 300 350 500 300C700 250 900 450 1100 400C1300 350 1500 550 1700 500" stroke="white" strokeWidth="1" />
          <path d="M-100 350C100 300 300 500 500 450C700 400 900 600 1100 550C1300 500 1500 700 1700 650" stroke="white" strokeWidth="1" />
          <path d="M-100 500C100 450 300 650 500 600C700 550 900 750 1100 700C1300 650 1500 850 1700 800" stroke="white" strokeWidth="1" />
          <path d="M-100 650C100 600 300 800 500 750C700 700 900 900 1100 850C1300 800 1500 1000 1700 950" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">

        {/* Typography Block */}
        <div ref={textRef} className="flex flex-col items-center text-center">

          <h2 className="text-4xl md:text-7xl lg:text-[7.5rem] leading-[0.8] tracking-tighter uppercase font-display font-bold">
            <span className="font-serif text-ln-yellow italic normal-case lowercase mr-4 inline-block text-[0.8em]">Redefining</span>
            <span className="stroke-text-dark">LIMITS,</span>
            <br />
            <span>FIGHTING FOR </span>
            <span className="text-ln-yellow">WINS,</span>
            <br />
            <span>BRINGING IT ALL IN </span>
            <br />
            <span>ALL WAYS. DEFINING A </span>
            <br />
            <span className="font-serif text-ln-yellow italic normal-case lowercase mr-4 inline-block text-[0.8em]">Legacy</span>
            <span>IN FORMULA 1 </span>
            <br />
            <span>ON AND OFF THE </span>
            <br />
            <span>TRACK.</span>
          </h2>

          {/* Rive Animated Signature - Center */}
          <div className="mt-12 w-full flex justify-center opacity-50">
            <div className="w-[300px] md:w-[400px] h-[100px] md:h-[150px] relative">
              {RiveComponent && <RiveComponent className="w-full h-full" />}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Introduction;