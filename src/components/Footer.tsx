import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, ChevronRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import Reveal from './Reveal';
import { SOLUTIONS } from '@/data/solutions';

const offices = [
  {
    country: 'India',
    flag: '🇮🇳',
    details: [
      { icon: <MapPin className="w-4 h-4" />, title: "Office", lines: ["Fabulouzz Technologies", "Malabar Tower, Near Stadium Bus Stand,", "CBE Main Road, Palakkad", "Kerala, India"] },
      { icon: <Phone className="w-4 h-4" />, title: "Phone", lines: ["+91 90 6123 9 333"] },
      { icon: <Mail className="w-4 h-4" />, title: "Email", lines: ["info@fabulouzz.com"] },
      { icon: <Globe className="w-4 h-4" />, title: "Web", lines: ["www.fabulouzz.com"] },
    ],
  },
  {
    country: 'Kingdom of Saudi Arabia',
    flag: '🇸🇦',
    details: [
      { icon: <MapPin className="w-4 h-4" />, title: "Office", lines: ["Fabulouzz Technologies", "Al – Aqsa Business Park,", "Al – Rihab Dist,", "Jeddah, 23345, KSA"] },
      { icon: <Phone className="w-4 h-4" />, title: "Phone", lines: ["+966 50 2 918 573"] },
      { icon: <Mail className="w-4 h-4" />, title: "Email", lines: ["support@fabulouzz.com"] },
      { icon: <Globe className="w-4 h-4" />, title: "Web", lines: ["www.fabulouzz.com"] },
    ],
  },
];

const renderContactLine = (item: { title: string }, line: string, key: string) => {
  if (item.title === "Phone") {
    return <a key={key} href={`tel:${line.replace(/\s+/g, '')}`} className="block text-xs sm:text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium w-fit">{line}</a>;
  }
  if (item.title === "Email") {
    return <a key={key} href={`mailto:${line}`} className="block text-xs sm:text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium w-fit">{line}</a>;
  }
  if (item.title === "Web") {
    return <a key={key} href={`https://${line}`} target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium w-fit">{line}</a>;
  }
  return <p key={key} className="text-xs sm:text-sm text-muted-foreground">{line}</p>;
};

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'Security & Surveillance', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, service, message } = formData;
    const subject = `New Inquiry from ${name} - ${service}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:info@fabulouzz.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const inputClass = "w-full px-3 py-2.5 rounded-lg bg-background/50 border border-border text-foreground text-sm focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 placeholder-muted-foreground";

  return (
    <footer id="contact" className="relative z-10 border-t border-border bg-secondary/30 backdrop-blur-xl">
      {/* Decorative top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Column 1: Brand + Quick Links */}
          <div className="lg:col-span-3">
            <Reveal direction="left">
              <BrandLogo variant="dark" align="start" />
              <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
                Modern technologies for an innovative lifestyle. Your trusted partner in security, automation, and sustainable energy solutions.
              </p>
              <div className="mt-6">
                <h5 className="text-foreground font-bold text-sm mb-3 uppercase tracking-wider">Quick Links</h5>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li><Link to="/#home" className="hover:text-primary transition-colors flex items-center gap-1.5 group"><ChevronRight className="w-3 h-3 text-primary/50 group-hover:translate-x-0.5 transition-transform" />Home</Link></li>
                  <li><Link to="/#solutions" className="hover:text-primary transition-colors flex items-center gap-1.5 group"><ChevronRight className="w-3 h-3 text-primary/50 group-hover:translate-x-0.5 transition-transform" />Solutions</Link></li>
                  <li><Link to="/projects" className="hover:text-primary transition-colors flex items-center gap-1.5 group"><ChevronRight className="w-3 h-3 text-primary/50 group-hover:translate-x-0.5 transition-transform" />Projects</Link></li>
                  <li><Link to="/#sectors" className="hover:text-primary transition-colors flex items-center gap-1.5 group"><ChevronRight className="w-3 h-3 text-primary/50 group-hover:translate-x-0.5 transition-transform" />Sectors</Link></li>
                  <li><Link to="/events" className="hover:text-primary transition-colors flex items-center gap-1.5 group"><ChevronRight className="w-3 h-3 text-primary/50 group-hover:translate-x-0.5 transition-transform" />Events</Link></li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Column 2: Office Addresses */}
          <div className="lg:col-span-4">
            <Reveal direction="up" delay={100}>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-6">Our Offices</h3>
              <div className="space-y-8">
                {offices.map((office, officeIdx) => (
                  <div key={officeIdx}>
                    <h4 className="text-xs sm:text-sm font-bold text-primary mb-3 flex items-center gap-2 uppercase tracking-wider">
                      <span className="text-base">{office.flag}</span> {office.country}
                    </h4>
                    <div className="space-y-3">
                      {office.details.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 group">
                          <div className="p-1.5 bg-primary/10 rounded-md text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-primary/20 flex-shrink-0 mt-0.5">
                            {item.icon}
                          </div>
                          <div>
                            {item.lines.map((line, i) => renderContactLine(item, line, `${officeIdx}-${idx}-${i}`))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Column 3: Contact Form */}
          <div className="lg:col-span-5">
            <Reveal direction="right" delay={200}>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-6">Get In Touch</h3>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input name="name" value={formData.name} onChange={handleChange} type="text" required className={inputClass} placeholder="Your Name *" />
                  <input name="email" value={formData.email} onChange={handleChange} type="email" required className={inputClass} placeholder="Email Address *" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" required className={inputClass} placeholder="Phone Number *" />
                  <select name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                    {SOLUTIONS.map(s => <option key={s.id}>{s.title}</option>)}
                    <option>Other</option>
                  </select>
                </div>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} placeholder="Tell us about your requirements..." />
                <button className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-lime-dark text-primary-foreground font-bold text-sm rounded-lg shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-5 md:py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Fabulouzz Technologies. All Rights Reserved. | Licensed under applicable laws.
          </p>
          <div className="flex gap-4 text-[10px] sm:text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;