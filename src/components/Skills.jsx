import React from 'react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { skills } from '../data/mock';

const Skills = () => {
  return (
    <section id="skills" className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <h2
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            <span className="text-white">My </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-6"></div>
          <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
            Core competencies that drive exceptional results
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden group">
              <CardContent className="p-5 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-red-500 sm:text-xl">
                    {skill.name}
                  </h3>
                  <span className="text-2xl font-bold text-red-500" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
