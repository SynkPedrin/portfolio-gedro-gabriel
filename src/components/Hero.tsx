import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import pedroPhoto from "@/assets/pedro-photo.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
    })
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    rotate: [0, 2, -2, 0],
    transition: { duration: 6, repeat: Infinity, ease: [0.45, 0, 0.55, 1] as const }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive gradient that follows mouse */}
      <motion.div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(30,184,138,0.4) 0%, transparent 70%)",
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-jade/40 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

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
          <motion.div 
            className="flex items-center gap-2 justify-center lg:justify-start mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-jade" />
            </motion.div>
            <p className="text-jade tracking-[0.3em] uppercase text-sm font-medium">
              Full Stack Developer
            </p>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
            style={{ perspective: 1000 }}
          >
            <motion.span 
              className="block text-foreground"
              initial="hidden"
              animate="visible"
            >
              {"PEDRO".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block hover:text-jade transition-colors cursor-default"
                  whileHover={{ scale: 1.2, y: -5 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
            <motion.span 
              className="block text-gradient"
              initial="hidden"
              animate="visible"
            >
              {"GABRIEL".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i + 5}
                  variants={letterVariants}
                  className="inline-block hover:text-white transition-colors cursor-default"
                  whileHover={{ scale: 1.2, y: -5 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
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
              <motion.span
                key={tech}
                className="px-4 py-2 glass text-sm font-medium text-foreground/80 cursor-default"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(30, 184, 138, 0.2)",
                  borderColor: "rgba(30, 184, 138, 0.4)"
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo with 3D effect */}
        <motion.div 
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          style={{ perspective: 1000 }}
        >
          <motion.div 
            className="relative"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            animate={floatingAnimation}
          >
            {/* Multi-layer glow effect */}
            <motion.div 
              className="absolute inset-0 bg-jade/40 blur-3xl rounded-full scale-75"
              animate={{ 
                scale: [0.75, 0.85, 0.75],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute inset-0 bg-jade/20 blur-2xl rounded-full scale-90"
              animate={{ 
                scale: [0.9, 1, 0.9],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            
            {/* Orbiting elements */}
            <motion.div
              className="absolute top-0 left-1/2 w-3 h-3 bg-jade rounded-full"
              animate={{ 
                rotate: 360,
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "0 180px" }}
            />
            <motion.div
              className="absolute top-0 left-1/2 w-2 h-2 bg-jade/60 rounded-full"
              animate={{ 
                rotate: -360,
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "0 220px" }}
            />
            
            <motion.img
              src={pedroPhoto}
              alt="Pedro Gabriel"
              className="relative z-10 w-[280px] md:w-[350px] lg:w-[400px] drop-shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.span 
          className="text-muted-foreground text-xs tracking-widest uppercase"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Role para explorar
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 bg-jade/50 blur-md rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <ChevronDown className="w-5 h-5 text-jade relative z-10" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
