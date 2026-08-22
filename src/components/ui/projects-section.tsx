import { ExternalLink, Code } from 'lucide-react';
import Ehyaaa from "../../assets/Ehyaa.png";
import Timzee from "../../assets/Timzee.png";
import FreshMeal from "../../assets/Fresh-Meal.png";
import Dhora from "../../assets/Dhora.png";
import { motion } from 'framer-motion';



const projects = [
  {
    title: 'EHYAA (إحياء)',
    desc: 'Comprehensive full-stack web application featuring a high-performance React SPA and a secure Laravel API backend with JWT authentication and automated MySQL migrations.',
    tech: ['React', 'Laravel', 'MySQL', 'REST API'],
    image: Ehyaaa,
    link: 'https://ehyaa.site',
    github: 'https://github.com/tmsaah770'
  },
  {
    title: 'TIMZEE',
    desc: 'Modern, responsive luxury timepiece e-commerce store with a mobile-first philosophy. Features dynamic product filtering and a stateful persistent shopping cart.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    image: Timzee,
    link: 'https://tmsaah770.github.io/TmsaaH',
    github: 'https://github.com/tmsaah770'
  },
  {
    title: 'FRESH MEAL',
    desc: 'A vibrant and modern food delivery or restaurant landing page showcasing an interactive layout and responsive design.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: FreshMeal,
    link: 'https://tmsaah770.github.io/Fresh-Meal/',
    github: 'https://github.com/tmsaah770/Fresh-Meal'
  },
  {
    title: 'DHORA',
    desc: 'A beautifully designed interactive web interface demonstrating front-end capabilities, smooth animations, and clean layouts.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: Dhora,
    link: 'https://tmsaah770.github.io/Dhora/',
    github: 'https://github.com/tmsaah770/Dhora'
  }
];

export default function ProjectsSection() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden text-white">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl w-full z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full"
        >
          <div className="inline-block border border-red-600/50 bg-red-600/10 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] font-bold text-red-500 uppercase mb-6">
            SYSTEM.EXECUTE(PROJECTS)
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-center mb-16">
            Selected <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group relative bg-black border border-white/10 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(194,0,0,0.2)] flex flex-col"
            >
              {/* Image Container */}
              <div className="relative  h-[300px] overflow-hidden">
                <div className="absolute inset-0 bg-red-600/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full  object-cover    transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold uppercase tracking-wider mb-3 group-hover:text-red-500 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, index) => (
                    <span key={index} className="text-xs font-mono text-red-400 bg-red-950/30 px-2 py-1 rounded border border-red-900/50">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-red-500 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-white transition-colors ml-auto">
                    <Code className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
