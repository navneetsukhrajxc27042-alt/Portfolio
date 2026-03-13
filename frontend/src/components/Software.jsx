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
    <section id="software" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              Tools
            </span>
            <span className="text-white"> & Software</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-standard software I use to bring creative visions to life
          </p>
        </div>

        {/* Software Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {softwareTools.map((tool, index) => {
            const Icon = iconMap[tool.icon];
            return (
              <Card
                key={index}
                className="bg-zinc-900 border-zinc-800 hover:border-red-500 transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {tool.logo ? (
                      <div className="w-16 h-16 flex items-center justify-center p-2 bg-zinc-800 rounded-lg group-hover:bg-zinc-700 transition-all duration-300">
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
                      <div className="p-4 bg-zinc-800 rounded-lg group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-500 transition-all duration-300">
                        {Icon && <Icon className="text-white" size={32} />}
                      </div>
                    )}
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-red-500 transition-colors text-sm">
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