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
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={aboutData.image}
                alt="Workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            {/* Accent Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-red-600 to-red-500 opacity-20 blur-3xl rounded-full"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2
                className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
                style={{ fontFamily: '"Bebas Neue", sans-serif' }}
              >
                <span className="text-white">About </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                  Me
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 mb-6"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {aboutData.bio}
              </p>
              <p className="text-gray-400 leading-relaxed">
                I specialize in creating high-impact video content that resonates with audiences. From
                fast-paced commercials to intimate documentaries, I bring technical expertise and
                creative vision to every project.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 text-center">
                  <CardContent className="p-6">
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