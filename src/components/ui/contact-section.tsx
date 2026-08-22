import { Send, Mail, MapPin, Terminal, Phone, Briefcase, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('TRANSMITTING...');

    const formData = new FormData(form);
    // Convert FormData to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://formsubmit.co/ajax/tmsaah77@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const data = await response.json();

      if (data.success === "true") {
        setStatus('TRANSMISSION SUCCESSFUL!');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Check your email to activate the form for the first time.');
      }
    } catch (error) {
      setStatus('Check your email to activate the form for the first time.');
    }
  };

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden text-white border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-600/10 blur-[100px] pointer-events-none rounded-t-[100%]"></div>

      <div className="max-w-5xl w-full z-10 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div>
            <div className="inline-block border border-red-600/50 bg-red-600/10 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] font-bold text-red-500 uppercase mb-6">
              SYSTEM.CONNECT()
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-4">
              Initiate <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Connection</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Open to new opportunities, collaborations, and challenging projects. Send a message to initiate the handshake protocol.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:text-red-500 transition-colors bg-white/5">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Email</p>
                <p className="text-lg">tmsaah77@gmail.com</p>
              </div>
            </div>
            

            {/* Phone */}
            <a href="tel:+201095021098" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:text-red-500 transition-colors bg-white/5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Phone</p>
                <p className="text-lg hover:text-red-500 transition-colors">+20 1095021098</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/mahmoud-abotaleb-7924a3392" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:text-red-500 transition-colors bg-white/5">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">LinkedIn</p>
                <p className="text-lg hover:text-red-500 transition-colors">Mahmoud Abotaleb</p>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/tmsaah770" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:text-red-500 transition-colors bg-white/5">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">GitHub</p>
                <p className="text-lg hover:text-red-500 transition-colors">tmsaah770</p>
              </div>
            </a>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:text-red-500 transition-colors bg-white/5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Location</p>
                <p className="text-lg">Mit Ghamr, Dakahlia, Egypt</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl relative overflow-hidden group"
        >
          {/* Subtle scan line for form */}
          <div className="absolute top-0 left-0 w-[2px] h-full bg-red-600 shadow-[0_0_10px_rgba(194,0,0,1)] -translate-x-full group-hover:animate-[scanMoveX_3s_ease-in-out_infinite]"></div>
          
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                <Terminal className="w-3 h-3 text-red-500" /> Sender Name
              </label>
              <input 
                type="text" 
                name="name"
                required
                className="bg-transparent border-b border-white/20 pb-2 outline-none focus:border-red-600 transition-colors text-lg"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                <Terminal className="w-3 h-3 text-red-500" /> Comm Link (Email)
              </label>
              <input 
                type="email" 
                name="email"
                required
                className="bg-transparent border-b border-white/20 pb-2 outline-none focus:border-red-600 transition-colors text-lg"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                <Terminal className="w-3 h-3 text-red-500" /> Payload (Message)
              </label>
              <textarea 
                name="message"
                required
                rows={4}
                className="bg-transparent border-b border-white/20 pb-2 outline-none focus:border-red-600 transition-colors text-lg resize-none"
                placeholder="Enter your message here..."
              ></textarea>
            </div>

            {status && (
              <div className={`text-sm font-bold uppercase tracking-widest ${status.includes('SUCCESS') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </div>
            )}

            <button 
              type="submit"
              disabled={status === 'TRANSMITTING...'}
              className="mt-4 w-full py-4 border border-red-600 text-red-500 font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-red-600 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-3">
                Transmit <Send className="w-4 h-4" />
              </span>
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
