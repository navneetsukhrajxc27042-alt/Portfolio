import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col items-center space-y-5 sm:space-y-6">
          <div
            className="text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            <span className="text-white">NAVNEET</span>
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              {' '}SUKHRAJ
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToContact}
              aria-label="Contact via Email"
              className="rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-gray-400 transition-all duration-300 hover:border-red-500 hover:bg-gradient-to-br hover:from-red-600/10 hover:to-red-500/10 hover:text-white"
            >
              <Mail size={20} />
            </button>
          </div>

          <div className="w-full border-t border-zinc-800 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © {currentYear} Navneet Sukhraj. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-gray-600 sm:text-sm">
              Crafted with passion for visual storytelling
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
