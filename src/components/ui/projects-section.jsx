import { ExternalLink, Code } from 'lucide-react';
import Wazen from "../../assets/Wazen.png";
import TmsaahShop from "../../assets/TMSAAH-SHOP.png";
import Ehyaaa from "../../assets/Ehyaa.png";
import Timzee from "../../assets/Timzee.png";
import FreshMeal from "../../assets/Fresh-Meal.png";
import Dhora from "../../assets/Dhora.png";
import { motion } from 'framer-motion';



const projects = [
{
  title: 'WAZEN ERP (وازن)',
  subtitle: '(ADVANCED CLOUD ERP & SMART POS SYSTEM)',
  desc: 'An enterprise-grade, cloud-based ERP and smart POS management system engineered for retail enterprises and multi-branch businesses, deployed and live-hosted on a cloud server. Developed with Laravel 12, PHP 8.2+, Tailwind CSS 4, and MySQL. Features high-speed shift-based point of sale (POS) with real-time barcode scanning, multi-method payments, hold-cart capabilities, and thermal (80mm) / standard (A4) receipt printing. Includes multi-branch inventory matrix with automated stock transfers and audit adjustments, customer credit and debt installment tracking, daily operational expense management, and real-time Profit & Loss financial analytics. Fully secured with granular Role-Based Access Control (RBAC via Spatie) across Admin, Branch Manager, and Cashier tiers.',
  tech: ['Laravel 12', 'PHP 8.2+', 'Tailwind CSS 4', 'MySQL 8', 'Smart POS', 'Spatie RBAC', 'Alpine.js', 'Vite', 'Cloud Hosting'],
  image: Wazen,
  link: 'https://wazen1-001-site1.etempurl.com/',
  github: 'https://github.com/tmsaah770/WAZEN-ERP',
  demoCredentials: 'admin@wazen.com | password123'
},
{
  title: 'TMSAAH SHOP',
  subtitle: '(LUXE STORE)',
  desc: 'A premium full-stack luxury fashion e-commerce platform deployed and live-hosted on a public web server, accessible to all users worldwide. Engineered with a modern decoupled architecture featuring a reactive React 19 SPA (Vite & Tailwind CSS) and a robust Laravel 12 RESTful API backend with MySQL, Sanctum authentication, and dual payment gateways (Stripe & PayPal). Includes an advanced, full-featured Admin Dashboard delivering complete control and comprehensive management over products, categories, orders, customers, and store operations.',
  tech: ['React 19', 'Laravel 12', 'MySQL', 'Stripe & PayPal', 'Tailwind CSS', 'REST API', 'Web Hosting'],
  image: TmsaahShop,
  link: 'https://tmsaah-shop.ehyaa.site/',
  github: 'https://github.com/tmsaah770/TmsaaH-Shop'
},
{
  title: 'EHYAA (إحياء)',
  desc: 'Comprehensive full-stack web application featuring a high-performance React SPA and a secure Laravel API backend with JWT authentication and automated MySQL migrations.',
  tech: ['React', 'Laravel', 'MySQL', 'REST API'],
  image: Ehyaaa,
  link: 'https://ehyaa.site',
  github: 'https://github.com/tmsaah770/EHYAA'
},
{
  title: 'TIMZEE',
  desc: 'Modern, responsive luxury timepiece e-commerce store with a mobile-first philosophy. Features dynamic product filtering and a stateful persistent shopping cart.',
  tech: ['React', 'Vite', 'Tailwind CSS'],
  image: Timzee,
  link: 'https://tmsaah770.github.io/TmsaaH',
  github: 'https://github.com/tmsaah770/TmsaaH/tree/main/pro2'
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
}];


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
          className="flex flex-col items-center w-full">
          
          <div className="inline-block border border-red-600/50 bg-red-600/10 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] font-bold text-red-500 uppercase mb-6">
            SYSTEM.EXECUTE(PROJECTS)
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-center mb-16">
            Selected <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Works</span>
          </h2>
        </motion.div>

        <div className="flex flex-col items-center gap-10 w-full">
          {projects.map((project, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="group relative bg-black/60 border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-500 hover:shadow-[0_0_35px_rgba(194,0,0,0.2)] flex flex-col w-[90%] lg:w-[80%] items-center">
            
              {/* Image Container */}
              <div className="relative w-full min-h-[260px] sm:min-h-[320px] lg:min-h-[360px] overflow-hidden bg-black/40 flex items-center justify-center">
                <div className="absolute inset-0 bg-red-600/15 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity  duration-500"></div>
                <img
                src={project.image}
                alt={project.title}
                className="w-full  object-cover  " />
              
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-between items-center w-full text-center border-t border-white/10 bg-black/40 backdrop-blur-sm">
                <div className="w-full flex flex-col items-center">
                  <div className="flex items-center justify-center gap-2 mb-4 w-full">
                    <span className="text-xs text-center font-mono text-red-500 tracking-[0.2em] uppercase font-bold">
                      PROJECT // 0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wider mb-4 group-hover:text-red-500 transition-colors">
                    <span>{project.title}</span>
                    {project.subtitle &&
                  <span className="block text-lg lg:text-xl font-semibold text-gray-400 group-hover:text-red-400 transition-colors mt-1">
                        {project.subtitle}
                      </span>
                  }
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base mb-6 leading-relaxed max-w-3xl">
                    {project.desc}
                  </p>
                </div>
                
                <div className="w-full flex flex-col items-center">
                  <div className="flex flex-wrap justify-center w-full gap-2 mb-6">
                    {project.tech.map((t, index) =>
                  <span key={index} className="text-xs font-mono text-red-400 bg-red-950/30 px-3 py-1 rounded-md border border-red-900/50">
                        {t}
                      </span>
                  )}
                  </div>

                  {project.demoCredentials && (
                    <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-gray-300 bg-white/[0.04] border border-white/10 px-4 py-2 rounded-xl mb-4 shadow-inner">
                      <span className="text-red-400 font-bold tracking-wider uppercase flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Demo Access:
                      </span>
                      <span className="text-gray-200 font-semibold select-all bg-black/40 px-2 py-0.5 rounded border border-white/5">
                        {project.demoCredentials}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center w-full gap-4 pt-4 border-t border-white/10">
                    <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-red-500 transition-colors">
                    
                      <ExternalLink className="w-4 h-4 text-red-500" /> Live Demo
                    </a>
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors ml-auto">
                    
                      <Code className="w-4 h-4" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}