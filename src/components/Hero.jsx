import React from 'react';
import { ChevronDown, Play } from 'lucide-react';
import { Button } from './ui/button';
import { heroData } from '../data/mock';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 sm:pt-32">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroData.backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6">
        <div className="space-y-6 sm:space-y-8">
          {/* Main Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1
              className="text-[clamp(3.5rem,15vw,8rem)] font-bold leading-none tracking-tighter"
              style={{ fontFamily: '"Bebas Neue", sans-serif' }}
            >
              <span className="text-white block">{heroData.name}</span>
            </h1>
            <div
              className="text-[clamp(2rem,8vw,4.5rem)] font-bold tracking-[0.08em] sm:tracking-wide"
              style={{ fontFamily: '"Bebas Neue", sans-serif' }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                {heroData.title} & {heroData.subtitle}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="mx-auto max-w-3xl px-2 text-base leading-relaxed text-balance text-gray-300 sm:text-lg md:max-w-4xl md:text-xl xl:max-w-5xl xl:whitespace-nowrap">
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4 sm:pt-4">
            <Button
              onClick={scrollToPortfolio}
              className="w-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-5 text-base text-white hover:from-red-700 hover:to-red-600 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              size="lg"
            >
              <Play className="mr-2" size={20} />
              View My Work
            </Button>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="w-full border-2 border-white px-6 py-5 text-base text-white hover:bg-white hover:text-black sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              size="lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce text-white transition-colors hover:text-red-500 sm:bottom-8"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
