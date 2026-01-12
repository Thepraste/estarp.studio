
import React, { useState } from 'react';
import { AppMode } from '../types';

interface ContactProps {
  mode: AppMode;
}

const Contact: React.FC<ContactProps> = ({ mode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const isDev = mode === 'developer';
  const accentColor = isDev ? '#00F2FF' : '#BF00FF';

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:otivictorp@gmail.com?subject=${encodeURIComponent(formData.subject || 'Inquiry from estarp.studio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `*Inquiry from estarp.studio*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    const waLink = `https://wa.me/2348180722926?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(waLink, '_blank');
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-extrabold mb-6 tracking-tighter">
            Initialize <span className={isDev ? 'gradient-text-dev' : 'gradient-text-creative'}>Communication</span>.
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
            Ready to deploy your next vision? Whether it's a technical architecture or a high-energy visual campaign, I am ready to collaborate.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Email Protocol</p>
                <p className="text-white/80 font-medium">otivictorp@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Neural Link (WhatsApp)</p>
                <p className="text-white/80 font-medium">+234 818 072 2926</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-10 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-10 pointer-events-none" style={{ backgroundColor: accentColor }} />
          
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Identity</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Coordinate</label>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Subject</label>
              <input 
                type="text" 
                placeholder="Brief Overview"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Manifesto</label>
              <textarea 
                rows={4}
                placeholder="Details of your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <button 
                onClick={handleEmailSubmit}
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 ${isDev ? 'bg-[#00F2FF] text-black shadow-[0_0_20px_rgba(0,242,255,0.3)]' : 'bg-[#BF00FF] text-white shadow-[0_0_20px_rgba(191,0,255,0.3)]'}`}
              >
                Transmit Email
              </button>
              <button 
                onClick={handleWhatsAppSubmit}
                className="w-full py-4 rounded-xl font-bold border border-white/10 glass transition-all duration-300 transform hover:scale-[1.02] hover:bg-white/10 flex items-center justify-center gap-2"
              >
                Instant WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
