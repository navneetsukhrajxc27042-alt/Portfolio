import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: '#', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: '#', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, url: '#', label: 'Instagram' },
    { icon: <Mail size={20} />, url: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div
            className="text-3xl font-bold tracking-tight"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            <span className="text-white">NAVNEET</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              {' '}SUKHRAJ
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                aria-label={link.label}
                className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-gray-400 hover:text-white hover:border-red-500 hover:bg-gradient-to-br hover:from-red-600/10 hover:to-red-500/10 transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-zinc-800 w-full">
            <p className="text-gray-500 text-sm">
              © {currentYear} Navneet Sukhraj. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Crafted with passion for visual storytelling
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;