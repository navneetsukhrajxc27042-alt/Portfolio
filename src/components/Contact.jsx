import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-red-500" size={24} />,
      label: 'Email',
      value: 'navneetsukhraj.xc.27042@gmail.com',
      link: 'mailto:navneetsukhraj.xc.27042@gmail.com'
    },
    {
      icon: <Phone className="text-red-500" size={24} />,
      label: 'WhatsApp',
      value: '+91 9917109665',
      link: 'https://wa.me/919917109665'
    },
    {
      icon: <MapPin className="text-red-500" size={24} />,
      label: 'Location',
      value: 'VPO Sofi Pind, Jalandhar, Punjab, India',
      link: null
    }
  ];

  const renderValue = (info) => {
    if (info.label === 'Email') {
      return (
        <span className="block w-full min-w-0 overflow-hidden whitespace-nowrap text-ellipsis text-[clamp(0.8rem,1.35vw,1rem)] font-medium leading-relaxed tracking-[-0.03em] text-white">
          {info.value}
        </span>
      );
    }

    return (
      <span className="max-w-full text-balance break-words text-base font-medium leading-relaxed text-white sm:text-lg">
        {info.value}
      </span>
    );
  };

  return (
    <section id="contact" className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <h2
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            <span className="text-white">Get in </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-6"></div>
          <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="min-w-0 bg-zinc-900 border-zinc-800 transition-all duration-300 group hover:border-red-500"
              >
                <CardContent className="flex h-full flex-col items-center p-5 text-center sm:p-6 lg:p-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-zinc-800 rounded-lg group-hover:bg-gradient-to-br group-hover:from-red-600/20 group-hover:to-red-500/20 transition-all duration-300">
                      {info.icon}
                    </div>
                  </div>
                  <div className="mb-2 text-sm text-gray-500">{info.label}</div>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('mailto:') ? undefined : '_blank'}
                      rel={info.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="block w-full min-w-0 transition-colors hover:text-red-500"
                    >
                      {renderValue(info)}
                    </a>
                  ) : (
                    <div className="w-full min-w-0">{renderValue(info)}</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Message */}
          <div className="mt-10 text-center sm:mt-12">
            <p className="text-base text-gray-400 sm:text-lg">
              Feel free to reach out via email or WhatsApp. I typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
