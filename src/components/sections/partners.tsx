import React, { useRef } from 'react';
import { useScrollReveal } from '../../hooks/use-scroll-reveal';

const Partners: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useScrollReveal({
        ref: gridRef,
        stagger: 0.1,
        trigger: sectionRef, // Trigger when section comes into view
        start: 'top 80%',
    });


    const partners = [
        { name: 'Ralph Lauren', logo: '/images/logos-icons/ralph-lauren.svg' },
        { name: 'Playstation', logo: '/images/logos-icons/ps5.svg' },
        { name: 'Quadrant', logo: '/images/logos-icons/quadrant.svg' },
        { name: 'Tumi', logo: '/images/logos-icons/tum.svg' },
        { name: 'Hilton', logo: '/images/logos-icons/hitton.svg' },
        { name: 'Uber', logo: '/images/logos-icons/uber.svg' },
    ];

    return (
        <section ref={sectionRef} className="w-full py-32 bg-ln-cream border-t border-gray-200 relative overflow-hidden">

            {/* Background Large Script */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none">
                <span className="font-script text-[25vw] text-ln-yellow opacity-90 -rotate-12 block leading-none mix-blend-multiply blur-[1px]">Collabs</span>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                    <h3 className="font-display font-bold text-5xl md:text-6xl uppercase leading-[0.9]">
                        Partners<br />
                        <span className="font-serif font-normal italic lowercase text-4xl">& Campaigns</span>
                    </h3>
                    <p className="max-w-xs text-xs font-sans mt-6 md:mt-0 text-gray-500 leading-relaxed">
                        Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.
                    </p>
                </div>

                {/* Logos Grid */}
                <div ref={gridRef} className="reveal-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
                    {partners.map((partner, idx) => (
                        <div
                            key={idx}
                            className="reveal-item flex justify-center items-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                loading="lazy"
                                className="max-h-full max-w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;