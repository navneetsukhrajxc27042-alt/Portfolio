import React from 'react';
import { Award, Users, Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { aboutData } from '../data/mock';

const About = () => {
  const stats = [
    {
      icon: <Briefcase className="text-red-500" size={32} />,
      value: aboutData.experience,
      label: 'Experience'
    },
    {
      icon: <Award className="text-red-500" size={32} />,
      value: aboutData.projectsCompleted,
      label: 'Projects Completed'
    },
    {
      icon: <Users className="text-red-500" size={32} />,
      value: aboutData.happyClients,
      label: 'Happy Clients'
    }
  ];

  return (
    <section id="about" className="bg-zinc-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={aboutData.image}
                alt="Workspace"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            {/* Accent Element */}
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-br from-red-600 to-red-500 opacity-20 blur-3xl sm:-bottom-6 sm:-right-6 sm:h-48 sm:w-48"></div>
          </div>

          {/* Content Side */}
          <div className="order-1 space-y-6 lg:order-2 lg:space-y-8">
            <div>
              <h2
                className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                style={{ fontFamily: '"Bebas Neue", sans-serif' }}
              >
                <span className="text-white">About </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                  Me
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 mb-6"></div>
              <p className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg">
                {aboutData.bio}
              </p>
              <p className="text-gray-400 leading-relaxed">
                I specialize in creating high-impact video content that resonates with audiences. From
                fast-paced commercials to intimate documentaries, I bring technical expertise and
                creative vision to every project.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3 sm:pt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 text-center">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex justify-center mb-3">{stat.icon}</div>
                    <div
                      className="text-3xl font-bold text-white mb-1"
                      style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
