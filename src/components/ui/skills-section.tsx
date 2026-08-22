import { Code2, Database, Layout, Server, Smartphone, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Frontend', icon: <Layout className="w-6 h-6" />, desc: 'React, Vite, Tailwind CSS, JS (ES6+)' },
  { name: 'Backend', icon: <Server className="w-6 h-6" />, desc: 'PHP, Laravel, RESTful APIs, MySQL' },
  { name: 'Tools & DevOps', icon: <Code2 className="w-6 h-6" />, desc: 'Git, GitHub, Postman, Web Hosting' },
  { name: 'Architecture', icon: <Database className="w-6 h-6" />, desc: 'MVC, Component-Driven, CI/CD' },
  { name: 'UI/UX', icon: <Smartphone className="w-6 h-6" />, desc: 'Responsive Design, HTML5, CSS3' },
  { name: 'Optimization', icon: <Zap className="w-6 h-6" />, desc: 'Clean & Secure Code Standards' },
];

export default function SkillsSection() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden text-white">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl w-full z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full"
        >
          <div className="inline-block border border-red-600/50 bg-red-600/10 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] font-bold text-red-500 uppercase mb-6">
            SYSTEM.LOAD(SKILLS)
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-center mb-16">
            Technical <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group relative bg-white/[0.02] border border-white/10 p-6 rounded-2xl overflow-hidden hover:bg-white/[0.04] transition-colors"
            >
              {/* Scan Effect on Hover */}
              <div className="absolute top-0 left-0 w-[2px] h-full bg-red-600 shadow-[0_0_10px_rgba(194,0,0,1)] -translate-x-full group-hover:animate-[scanMoveX_1.5s_ease-in-out_infinite]"></div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-600/10 text-red-500 border border-red-600/20 group-hover:border-red-600/50 transition-colors">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scanMoveX {
            0% { left: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }
        `}
      </style>
    </section>
  );
}
