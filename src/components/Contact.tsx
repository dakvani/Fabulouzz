import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Security & Surveillance',
    message: ''
  });

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

  return (
    <section id="contact" className="py-16 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-0 bg-card/80 backdrop-blur-xl border border-border rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 text-foreground relative overflow-hidden bg-secondary/50">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-primary rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

            <Reveal direction="left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">Let's Discuss Your Project</h2>
              <p className="text-muted-foreground mb-8 md:mb-12 text-sm sm:text-base md:text-lg leading-relaxed">
                Ready to upgrade your infrastructure? Contact us for a free consultation and quote.
              </p>
            </Reveal>

            <div className="space-y-5 md:space-y-8 relative z-10">
              {[
                { icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />, title: "Our Office", lines: ["17/79(8), Malabar Tower, Coimbatore Main Road", "Near Stadium Bus Stand, Palakkad"] },
                { icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />, title: "Phone", lines: ["+91 9061 239 333", "+91 9333 049 125"] },
                { icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />, title: "Email", lines: ["info@fabulouzz.com"] }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 150} direction="left">
                  <div className="flex items-start gap-3 md:gap-5 group">
                    <div className="p-2.5 md:p-4 bg-primary/10 rounded-lg md:rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-primary/20 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base md:text-lg mb-0.5 md:mb-1 text-foreground">{item.title}</h4>
                      {item.lines.map((line, i) => {
                        const key = `${idx}-${i}`;
                        if (item.title === "Phone") {
                          return (
                            <a
                              key={key}
                              href={`tel:${line.replace(/\s+/g, '')}`}
                              className="block text-xs sm:text-sm md:text-base text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer font-medium w-fit"
                            >
                              {line}
                            </a>
                          );
                        } else if (item.title === "Email") {
                          return (
                            <a
                              key={key}
                              href={`mailto:${line}`}
                              className="block text-xs sm:text-sm md:text-base text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer font-medium w-fit"
                            >
                              {line}
                            </a>
                          );
                        }
                        return <p key={key} className="text-xs sm:text-sm md:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors">{line}</p>;
                      })}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            <Reveal direction="right" delay={200}>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-bold text-muted-foreground mb-1.5 md:mb-2 uppercase tracking-wider">Your Name <span className="text-destructive">*</span></label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-background/50 border border-border text-foreground text-sm md:text-base focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 placeholder-muted-foreground"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-bold text-muted-foreground mb-1.5 md:mb-2 uppercase tracking-wider">Company</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    type="text"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-background/50 border border-border text-foreground text-sm md:text-base focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 placeholder-muted-foreground"
                    placeholder="Your Company (Optional)"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-bold text-muted-foreground mb-1.5 md:mb-2 uppercase tracking-wider">Email Address <span className="text-destructive">*</span></label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-background/50 border border-border text-foreground text-sm md:text-base focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 placeholder-muted-foreground"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-bold text-muted-foreground mb-1.5 md:mb-2 uppercase tracking-wider">Phone Number <span className="text-destructive">*</span></label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-background/50 border border-border text-foreground text-sm md:text-base focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 placeholder-muted-foreground"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-bold text-muted-foreground mb-1.5 md:mb-2 uppercase tracking-wider">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-background/50 border border-border text-foreground text-sm md:text-base focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300"
                  >
                    <option>Security & Surveillance</option>
                    <option>Access Control</option>
                    <option>Home Automation</option>
                    <option>Solar Energy</option>
                    <option>Networking</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-bold text-muted-foreground mb-1.5 md:mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-background/50 border border-border text-foreground text-sm md:text-base focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 placeholder-muted-foreground resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button className="w-full py-3 md:py-4 bg-primary hover:bg-lime-dark text-primary-foreground font-bold text-sm md:text-base rounded-lg shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
