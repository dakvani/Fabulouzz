import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';
import { SOLUTIONS } from '@/data/solutions';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import ScrollProgress from '@/components/ScrollProgress';
import WhatsAppButton from '@/components/WhatsAppButton';

const offices = [
  {
    country: 'India',
    flag: '🇮🇳',
    details: [
      { icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />, title: "Office", lines: ["Fabulouzz Technologies", "Malabar Tower, Near Stadium Bus Stand,", "CBE Main Road, Palakkad", "Kerala, India"] },
      { icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />, title: "Phone", lines: ["+91 90 6123 9 333"] },
      { icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />, title: "Email", lines: ["info@fabulouzz.com"] },
      { icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, title: "Web", lines: ["www.fabulouzz.com"] },
    ],
  },
  {
    country: 'Kingdom of Saudi Arabia',
    flag: '🇸🇦',
    details: [
      { icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />, title: "Office", lines: ["Fabulouzz Technologies", "Al – Aqsa Business Park,", "Al – Rihab Dist,", "Jeddah, 23345, KSA"] },
      { icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />, title: "Phone", lines: ["+966 50 2 918 573"] },
      { icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />, title: "Email", lines: ["support@fabulouzz.com"] },
      { icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, title: "Web", lines: ["www.fabulouzz.com"] },
    ],
  },
];

const renderContactLine = (item: { title: string }, line: string, key: string) => {
  if (item.title === "Phone") {
    return <a key={key} href={`tel:${line.replace(/\s+/g, '')}`} className="block text-sm md:text-base text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium w-fit">{line}</a>;
  }
  if (item.title === "Email") {
    return <a key={key} href={`mailto:${line}`} className="block text-sm md:text-base text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium w-fit">{line}</a>;
  }
  if (item.title === "Web") {
    return <a key={key} href={`https://${line}`} target="_blank" rel="noopener noreferrer" className="block text-sm md:text-base text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium w-fit">{line}</a>;
  }
  return <p key={key} className="text-sm md:text-base text-muted-foreground">{line}</p>;
};

const GetQuote: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', service: 'Security & Surveillance', message: '' });

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, company, email, phone, service, message } = formData;
    const subject = `New Inquiry from ${name} - ${service}`;
    const body = `Name: ${name}%0D%0ACompany: ${company}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:info@fabulouzz.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const inputClass = "w-full px-4 py-3 md:py-3.5 rounded-xl bg-background/50 border border-border text-foreground text-sm md:text-base focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all duration-300 placeholder-muted-foreground";

  return (
    <div className="font-sans bg-background text-foreground selection:bg-primary/30 selection:text-foreground relative overflow-x-hidden subpixel-antialiased">
      <ScrollProgress />
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-primary/10 blur-[120px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
      </div>

      <Navbar isScrolled={isScrolled} />

      <main className="max-w-[100vw] overflow-x-hidden pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Ready to upgrade your infrastructure? Contact us for a free consultation and quote.
              </p>
            </div>
          </Reveal>

          {/* Office Addresses */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {offices.map((office, officeIdx) => (
              <Reveal key={officeIdx} delay={officeIdx * 150} direction={officeIdx === 0 ? 'left' : 'right'}>
                <div className="p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
                  <h3 className="text-base md:text-lg font-bold text-primary mb-5 flex items-center gap-2.5 uppercase tracking-wider">
                    <span className="text-xl md:text-2xl">{office.flag}</span> {office.country}
                  </h3>
                  <div className="space-y-4">
                    {office.details.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="p-2.5 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-primary/20 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm mb-0.5 text-foreground">{item.title}</h4>
                          {item.lines.map((line, i) => renderContactLine(item, line, `${officeIdx}-${idx}-${i}`))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Contact Form */}
          <Reveal direction="up" delay={300}>
            <div className="max-w-2xl mx-auto p-6 sm:p-8 md:p-10 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
              <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">Your Name <span className="text-destructive">*</span></label>
                    <input name="name" value={formData.name} onChange={handleChange} type="text" required className={inputClass} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">Company</label>
                    <input name="company" value={formData.company} onChange={handleChange} type="text" className={inputClass} placeholder="Your Company" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">Email <span className="text-destructive">*</span></label>
                    <input name="email" value={formData.email} onChange={handleChange} type="email" required className={inputClass} placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">Phone <span className="text-destructive">*</span></label>
                    <input name="phone" value={formData.phone} onChange={handleChange} type="tel" required className={inputClass} placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">Service Interested In</label>
                  <select name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                    {SOLUTIONS.map(s => <option key={s.id}>{s.title}</option>)}
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className={`${inputClass} resize-none`} placeholder="Tell us about your requirements..." />
                </div>
                <button className="w-full py-3.5 md:py-4 bg-primary hover:bg-lime-dark text-primary-foreground font-bold text-sm md:text-base rounded-xl shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GetQuote;
