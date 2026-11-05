import { ExternalLink, Code } from 'lucide-react';
import Wazen from "../../assets/Wazen.png";
import TmsaahShop from "../../assets/TMSAAH-SHOP.png";
import Ehyaaa from "../../assets/Ehyaa.png";
import Timzee from "../../assets/Timzee.png";
import { motion } from 'framer-motion';



const projects = [
  {
    title: 'TMSAAH SHOP',
    subtitle: '(LUXE STORE)',
    desc: 'A full-stack luxury fashion store, live on a public server. A React 19 front end (Vite, Tailwind CSS) talks to a Laravel 12 REST API with MySQL and Sanctum authentication. Checkout supports Stripe and PayPal, currently in test mode and ready to switch to live keys. The admin dashboard manages products, categories, orders, and customers.',
    tech: ['React 19', 'Laravel 12', 'MySQL', 'Sanctum', 'Stripe & PayPal (test mode)', 'Tailwind CSS', 'REST API'],
    image: TmsaahShop,
    link: 'https://tmsaah-app.ehyaa.site/',
    github: 'https://github.com/tmsaah770/TmsaaH-Shop'
  },
  {
    title: 'WAZEN ERP (وازن)',
    subtitle: '(CLOUD ERP & POS SYSTEM)',
    desc: 'A multi-branch ERP and point-of-sale system built solo with Laravel 12 and MySQL. The POS handles shifts with cash reconciliation, barcode search, split payment methods, held invoices, and thermal or A4 receipts. Inventory covers a stock matrix across branches, transfers, and adjustments, plus customer credit, expenses, a live dashboard, and profit and loss reports. Access is controlled by roles (Admin, Branch Manager, Cashier) using Spatie Permission.',
    tech: ['Laravel 12', 'PHP 8.2+', 'Tailwind CSS 4', 'MySQL 8', 'Spatie RBAC', 'Alpine.js', 'Vite'],
    image: Wazen,
    link: 'https://wazen1-001-site1.etempurl.com/',
    github: 'https://github.com/tmsaah770/WAZEN-ERP',
    demoCredentials: 'admin@wazen.com | password123'
  },
  {
    title: 'EHYAA (إحياء)',
    subtitle: '(B2B WASTE MARKETPLACE)',
    desc: 'My graduation project, which I built as the sole developer. A marketplace that connects industrial waste suppliers with recycling factories. Suppliers list materials by type, quantity, and location. Buyers filter the market, order, track shipments, and rate the supplier. A React 19 SPA with role-based routes, backed by a PHP (PDO) REST API on MySQL.',
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'MUI', 'PHP (PDO)', 'MySQL', 'REST API'],
    image: Ehyaaa,
    link: 'https://ehyaa.site',
    github: 'https://github.com/tmsaah770/EHYAA'
  },
  {
    title: 'TIMZEE',
    subtitle: '(FRONTEND ONLY)',
    desc: 'A responsive luxury watch store front end with a mobile-first layout, dynamic product filtering, and a persistent shopping cart. This project has no backend.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    image: Timzee,
    link: 'https://tmsaah770.github.io/TmsaaH',
    github: 'https://github.com/tmsaah770/TmsaaH/tree/main/pro2'
  }];

const practiceProjects = [
  {
    title: 'FRESH MEAL',
    desc: 'Responsive restaurant landing page.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://tmsaah770.github.io/Fresh-Meal/',
    github: 'https://github.com/tmsaah770/Fresh-Meal'
  },
  {
    title: 'DHORA',
    desc: 'Responsive multi-section landing page with animations.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://tmsaah770.github.io/Dhora/',
    github: 'https://github.com/tmsaah770/Dhora'
  }];


export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen bg-black flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden text-white">

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

        {/* Small early projects, kept compact so the four main projects stay in focus */}
        <div className="w-[90%] lg:w-[80%] mt-16">
          <h3 className="text-xl font-bold uppercase tracking-wider text-gray-300 mb-6 text-center">
            Practice projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {practiceProjects.map((project) =>
              <div
                key={project.title}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-red-600/50 transition-colors">
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-wider">{project.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) =>
                    <span key={t} className="text-xs font-mono text-red-400 bg-red-950/30 px-3 py-1 rounded-md border border-red-900/50">
                      {t}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-red-500 transition-colors">
                    <ExternalLink className="w-4 h-4 text-red-500" /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors ml-auto">
                    <Code className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}