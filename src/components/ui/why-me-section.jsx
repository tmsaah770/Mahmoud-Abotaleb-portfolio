import { SplineScene } from "./splite";
import { Card } from "./card";
import { Spotlight } from "./spotlight";
import { motion } from 'framer-motion';

export default function WhyMeSection() {
  return (
    <section className="bg-black py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Card className="w-full min-h-[500px] bg-black border-red-600/30 relative overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(194,0,0,0.15)] group">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white" />
          

          <div className="flex  md:flex-row flex-col">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              
              <div className="inline-block border border-red-600/50 bg-red-600/10 px-4 py-1.5 rounded-full w-max text-xs tracking-[0.2em] font-bold text-red-500 uppercase mb-4">
                SYSTEM.MODULE(WHY_ME)
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-6">
                Why Me
              </h2>
              <p className="text-gray-400 text-md leading-relaxed border-l-2 border-red-600 pl-6">
                I'm a junior developer who learns by shipping. Over the past year I built and deployed three full-stack apps: an ERP and POS system, a luxury fashion store, and a B2B marketplace for industrial waste. I also built a watch store front end.
                <br /><br />
                I care about clean database design, readable code, and interfaces that work well on a phone. I'm looking for a junior full-stack role where I can learn from a team and start contributing quickly.
              </p>
            </motion.div>

            {/* Right content - 3D Scene */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex-1 relative min-h-[400px] md:min-h-[500px] pointer-events-none md:pointer-events-auto">
              
              <div className="absolute inset-0 w-full h-full transform scale-[1.1] md:scale-[1.15] origin-bottom mt-10 md:mt-0">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full pointer-events-auto " />
                
              </div>
            </motion.div>
          </div>
        </Card>
      </div>
    </section>);

}