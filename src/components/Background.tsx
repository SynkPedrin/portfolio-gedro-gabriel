import { motion } from "framer-motion";
import jadeMarble from "@/assets/jade-marble.png";

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Jade Marble Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2 }}
      >
        <img
          src={jadeMarble}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/85" />

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-jade/10 via-transparent to-jade-dark/10 animate-gradient"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(160 40% 45% / 0.1) 0%, transparent 50%, hsl(160 35% 25% / 0.1) 100%)",
            "linear-gradient(225deg, hsl(160 40% 45% / 0.1) 0%, transparent 50%, hsl(160 35% 25% / 0.1) 100%)",
            "linear-gradient(315deg, hsl(160 40% 45% / 0.1) 0%, transparent 50%, hsl(160 35% 25% / 0.1) 100%)",
            "linear-gradient(45deg, hsl(160 40% 45% / 0.1) 0%, transparent 50%, hsl(160 35% 25% / 0.1) 100%)",
            "linear-gradient(135deg, hsl(160 40% 45% / 0.1) 0%, transparent 50%, hsl(160 35% 25% / 0.1) 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" 
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, hsl(0 0% 0%) 100%)",
        }}
      />
    </div>
  );
};

export default Background;
