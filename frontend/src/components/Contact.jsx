import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-red-500" size={24} />,
      label: 'Email',
      value: 'navneetsukhraj.xc.27042@gmail.com'
    },
    {
      icon: <Phone className="text-red-500" size={24} />,
      label: 'WhatsApp',
      value: '+91 9917109665'
    },
    {
      icon: <MapPin className="text-red-500" size={24} />,
      label: 'Location',
      value: 'VPO Sofi Pind, Jalandhar, Punjab, India'
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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Let's Talk
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-zinc-800 rounded-lg">{info.icon}</div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-500"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-500"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-500"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-500 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-6 text-lg"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;