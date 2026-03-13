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

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            <span className="text-white">Get in </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-zinc-800 hover:border-red-500 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-zinc-800 rounded-lg group-hover:bg-gradient-to-br group-hover:from-red-600/20 group-hover:to-red-500/20 transition-all duration-300">
                      {info.icon}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">{info.label}</div>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-red-500 transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-white font-medium break-all">{info.value}</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Message */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">
              Feel free to reach out via email or WhatsApp. I typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
