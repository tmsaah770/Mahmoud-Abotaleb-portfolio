import { Terminal, Cpu, Phone, Briefcase, GitBranch } from 'lucide-react';
import meImage from '../../assets/me.jpg';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center py-20 px-6 relative overflow-hidden text-white">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: 'linear-gradient(rgba(194, 0, 0, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(194, 0, 0, 0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-6xl w-full z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Glowing Image/Graphic Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group flex justify-center"
        >
          <div className="absolute inset-0 bg-red-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 border border-white/10 rounded-2xl bg-black/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-600 z-10"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-600 z-10"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-600 z-10"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-600 z-10"></div>
            
            <img src={meImage} alt="Mahmoud" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            
            {/* Scanning line over the box */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600 shadow-[0_0_15px_rgba(194,0,0,1)] animate-[scanMoveY_4s_ease-in-out_infinite_alternate] z-20"></div>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block border border-red-600/50 bg-red-600/10 px-4 py-1.5 rounded-full w-max text-xs tracking-[0.2em] font-bold text-red-500 uppercase">
            SYSTEM.INIT(ABOUT_ME)
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            Architecting <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>The Future</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-red-600 pl-6">
            Results-driven Full-Stack Web Developer with hands-on experience building scalable, responsive, and secure web applications. Proficient in architecting dynamic front-end interfaces using React and Tailwind CSS, paired with robust backend development utilizing PHP and Laravel.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="border border-white/5 bg-white/5 p-4 rounded-xl hover:border-red-600/50 transition-colors group">
              <Terminal className="w-8 h-8 text-red-600 mb-3 group-hover:animate-pulse" />
              <h3 className="text-lg font-bold">Full-Stack</h3>
              <p className="text-sm text-gray-500 mt-1">React, Vite, PHP, Laravel & MySQL.</p>
            </div>
            <div className="border border-white/5 bg-white/5 p-4 rounded-xl hover:border-red-600/50 transition-colors group">
              <Cpu className="w-8 h-8 text-red-600 mb-3 group-hover:animate-pulse" />
              <h3 className="text-lg font-bold">Architecture</h3>
              <p className="text-sm text-gray-500 mt-1">MVC, Component-Driven, CI/CD.</p>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="https://github.com/tmsaah770" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-red-600 hover:text-red-500 transition-colors text-sm font-bold tracking-wider">
              <GitBranch className="w-4 h-4" /> GITHUB
            </a>
            <a href="https://linkedin.com/in/mahmoud-abotaleb-7924a3392" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-red-600 hover:text-red-500 transition-colors text-sm font-bold tracking-wider">
              <Briefcase className="w-4 h-4" /> LINKEDIN
            </a>
            <a href="tel:+201095021098" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-red-600 hover:text-red-500 transition-colors text-sm font-bold tracking-wider">
              <Phone className="w-4 h-4" /> +20 1095021098
            </a>
          </div>

        </motion.div>

      </div>

      <style>
        {`
          @keyframes scanMoveY {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}
      </style>
    </section>
  );
}
