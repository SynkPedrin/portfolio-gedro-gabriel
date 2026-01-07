import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import pedroPhoto from "@/assets/pedro-photo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p 
            className="text-jade tracking-[0.3em] uppercase text-sm mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <span className="block text-foreground">PEDRO</span>
            <span className="block text-gradient">GABRIEL</span>
          </motion.h1>
          
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            20 Anos • Criando experiências digitais modernas com código limpo e design impactante.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {["Next.js", "React", "PHP", "MySQL"].map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-2 glass text-sm font-medium text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div 
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-jade/30 blur-3xl rounded-full scale-75" />
            
            <motion.img
              src={pedroPhoto}
              alt="Pedro Gabriel"
              className="relative z-10 w-[280px] md:w-[350px] lg:w-[400px] drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-muted-foreground text-xs tracking-widest uppercase">
          Role para explorar
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-jade" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
