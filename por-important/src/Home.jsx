import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroFuturistic from './components/ui/hero-futuristic';
import AboutSection from './components/ui/about-section';
import SkillsSection from './components/ui/skills-section';
import WhyMeSection from './components/ui/why-me-section';
import ProjectsSection from './components/ui/projects-section';
import ContactSection from './components/ui/contact-section';
import ThreeDEffectLoader from './components/ui/3d-effect-loader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 5 seconds initial loading duration to ensure all 3D assets and components are ready
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Full-Screen 3D Preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
          >
            <ThreeDEffectLoader text="INITIALIZING SYSTEM..." />
            
            {/* Subtle Progress Hint */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 flex flex-col items-center gap-2"
            >
              <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4.8, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-red-700 via-red-500 to-red-600 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                />
              </div>
              <span className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase">
                PREPARING ENVIRONMENT // 100%
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-black overflow-hidden">
        <HeroFuturistic startAnimation={!loading} />
        <AboutSection />
        <SkillsSection />
        <WhyMeSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}

