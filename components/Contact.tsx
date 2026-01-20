
import React, { useState } from 'react';
import { ThemeMode } from '../types';

interface ContactProps {
  theme: ThemeMode;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return alert('Please provide your identity credentials.');
    const mailtoLink = `mailto:estarptechies@gmail.com?subject=${encodeURIComponent(formData.subject || 'Project Brief: estarp.dev')}&body=${encodeURIComponent(`Client: ${formData.name}\nContact: ${formData.email}\n\nBrief:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return alert('Identity identification required.');
    const whatsappMsg = `*Project Brief: estarp.dev*\n\n*Client:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Brief:*\n${formData.message}`;
    const waLink = `https://wa.me/2348180722926?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(waLink, '_blank');
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-6xl font-extrabold mb-8 tracking-tighter leading-none">
            Scale Your <br />
            <span className="gradient-text">Business</span> Now.
          </h2>
          <p className="opacity-40 text-xl mb-12 max-w-lg leading-relaxed font-light">
            We are currently accepting new high-impact projects. Our team is ready to audit your current stack and propose a futuristic solution.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 glass rounded-2xl border-l-4" style={{ borderColor: 'var(--accent-color)' }}>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold mb-2">Technical HQ</p>
              <p className="opacity-80 font-medium">estarptechies@gmail.com</p>
            </div>
            <div className="p-6 glass rounded-2xl border-l-4" style={{ borderColor: 'var(--accent-color)' }}>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold mb-2">Instant Hotline</p>
              <p className="opacity-80 font-medium">+234 818 072 2926</p>
            </div>
          </div>
        </div>

        <div className="glass p-12 rounded-[3.5rem] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 blur-[150px] opacity-10 pointer-events-none" style={{ backgroundColor: 'var(--accent-color)' }} />
          
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-30 ml-2">Full Identity</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-current opacity-5 border-none rounded-2xl px-5 py-4 focus:outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-30 ml-2">Digital Coordinate</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-current opacity-5 border-none rounded-2xl px-5 py-4 focus:outline-none transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-30 ml-2">Project Classification</label>
              <input 
                type="text" 
                placeholder="E-commerce Expansion / SaaS Build"
                className="w-full bg-current opacity-5 border-none rounded-2xl px-5 py-4 focus:outline-none transition-colors"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-30 ml-2">Project Brief</label>
              <textarea 
                rows={5}
                placeholder="Tell us about your goals..."
                className="w-full bg-current opacity-5 border-none rounded-2xl px-5 py-4 focus:outline-none transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <button 
                onClick={handleEmailSubmit}
                className="w-full py-5 rounded-2xl font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-white shadow-xl"
                style={{ backgroundColor: 'var(--accent-color)' }}
              >
                Launch Protocol
              </button>
              <button 
                onClick={handleWhatsAppSubmit}
                className="w-full py-5 rounded-2xl font-bold border border-current opacity-40 hover:opacity-100 glass transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                Instant Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
