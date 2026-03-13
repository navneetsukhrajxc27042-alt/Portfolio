import React from 'react';
import { Film, Sparkles, Palette, Box, Image, PenTool, Headphones, Layers } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { softwareTools } from '../data/mock';

const iconMap = {
  Film: Film,
  Sparkles: Sparkles,
  Palette: Palette,
  Box: Box,
  Image: Image,
  PenTool: PenTool,
  Headphones: Headphones,
  Layers: Layers
};

const Software = () => {
  return (
    <section id="software" className="bg-zinc-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <h2
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              Tools
            </span>
            <span className="text-white"> & Software</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-6"></div>
          <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
            Industry-standard software I use to bring creative visions to life
          </p>
        </div>

        {/* Software Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {softwareTools.map((tool, index) => {
            const Icon = iconMap[tool.icon];
            return (
              <Card
                key={index}
                className="group cursor-pointer border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-red-500"
              >
                <CardContent className="p-5 text-center sm:p-6 md:p-8">
                  <div className="flex justify-center mb-4">
                    {tool.logo ? (
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-zinc-800 p-2 transition-all duration-300 group-hover:bg-zinc-700 sm:h-16 sm:w-16">
                        <img 
                          src={tool.logo} 
                          alt={tool.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Fallback to icon if logo fails to load
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'block';
                          }}
                        />
                        <div style={{ display: 'none' }}>
                          {Icon && <Icon className="text-white" size={32} />}
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-lg bg-zinc-800 p-3 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-500 sm:p-4">
                        {Icon && <Icon className="text-white" size={32} />}
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-red-500 sm:text-base">
                    {tool.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Software;
