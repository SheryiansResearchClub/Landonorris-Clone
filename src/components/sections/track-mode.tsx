import React, { useRef } from 'react';
import { CornerDownRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/use-scroll-reveal';

const TrackMode: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);


  // Use the new premium reveal hook
  useScrollReveal({
    ref: sectionRef,
    stagger: 0.2, // Stagger the children
  });


  return (
    <section ref={sectionRef} className="reveal-container relative w-full bg-ln-cream text-ln-dark min-h-screen py-24 overflow-hidden flex items-center justify-center">

      {/* Topographic Lines Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M-100 150C100 100 300 300 500 250C700 200 900 400 1100 350C1300 300 1500 500 1700 450" stroke="black" strokeWidth="0.5" />
          <path d="M-100 350C100 300 300 500 500 450C700 400 900 600 1100 550C1300 500 1500 700 1700 650" stroke="black" strokeWidth="0.5" />
          <path d="M-100 550C100 500 300 700 500 650C700 600 900 800 1100 750C1300 700 1500 900 1700 850" stroke="black" strokeWidth="0.5" />
          <path d="M-100 750C100 700 300 900 500 850C700 800 900 1000 1100 950C1300 900 1500 1100 1700 1050" stroke="black" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="w-full max-w-[1440px] mx-auto relative z-20 flex flex-col md:flex-row items-center justify-center h-full gap-4 md:gap-0">

        {/* On Track - Left Inner Content */}
        <div className="reveal-item flex flex-col items-center text-center w-full md:w-1/2 px-4 md:px-12 mt-12 md:mt-0">
          <div className="relative mb-8">
            <span className="absolute -top-8 -left-10 md:-top-12 md:-left-12 font-script text-7xl md:text-9xl text-ln-yellow z-30 -rotate-12 pointer-events-none">On</span>
            <h3 className="font-display font-bold text-6xl md:text-8xl lg:text-[8.5rem] leading-none tracking-tighter uppercase relative z-20 text-ln-dark drop-shadow-sm">
              Track
            </h3>
          </div>
          <p className="font-sans text-xs md:text-sm text-gray-700 max-w-[240px] mx-auto font-medium leading-relaxed opacity-80">
            Most recent results, career stats and photos from trackside.
          </p>
          <button className="mt-10 w-12 h-12 bg-ln-yellow rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg group/btn active:scale-95">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </button>
        </div>

        {/* Off Track - Right Inner Content */}
        <div className="reveal-item flex flex-col items-center text-center w-full md:w-1/2 px-4 md:px-12 mt-12 md:mt-0">
          <div className="relative mb-8">
            <span className="absolute -top-6 -left-8 md:-top-10 md:-left-10 font-serif italic text-6xl md:text-8xl text-ln-dark/30 z-30 -rotate-6 pointer-events-none">OFF</span>
            <h3 className="font-display font-bold text-6xl md:text-8xl lg:text-[8.5rem] leading-none tracking-tighter uppercase relative z-20 text-ln-dark drop-shadow-sm">
              Track
            </h3>
          </div>
          <p className="font-sans text-xs md:text-sm text-gray-700 max-w-[240px] mx-auto font-medium leading-relaxed opacity-80">
            Campaigns, shoots and other such promotional materials for fans.
          </p>
          <button className="mt-10 w-12 h-12 bg-ln-yellow rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg group/btn active:scale-95">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </button>
        </div>

      </div>

      {/* Side Framing Portraits */}
      {/* Left Frame (Helmet Profile) */}
      <div className="hidden lg:block absolute left-0 bottom-0 w-[28vw] max-w-[600px] h-full z-10 pointer-events-none overflow-hidden select-none">
        <img
          src="/images/on-off-track/left.webp"
          className="w-full h-full object-contain object-left-bottom grayscale opacity-90"
          alt="Lando Helmet Profile"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ln-cream via-transparent to-transparent h-1/3 bottom-0 top-auto"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ln-cream w-1/4 right-0 left-auto"></div>
      </div>

      {/* Right Frame (Lando Face) */}
      <div className="hidden lg:block absolute right-0 bottom-0 w-[28vw] max-w-[600px] h-full z-10 pointer-events-none overflow-hidden select-none">
        <img
          src="/images/on-off-track/right.webp"
          className="w-full h-full object-contain object-right-bottom grayscale opacity-90"
          alt="Lando Face Profile"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ln-cream via-transparent to-transparent h-1/3 bottom-0 top-auto"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-ln-cream w-1/4 left-0 right-auto"></div>
      </div>
    </section>
  );
};

export default TrackMode;