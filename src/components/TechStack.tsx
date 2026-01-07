import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", level: 95 },
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 85 },
  { name: "PHP", level: 90 },
  { name: "MySQL", level: 88 },
  { name: "Bootstrap 5", level: 92 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "Git", level: 85 },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-jade/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-jade text-sm font-medium tracking-widest uppercase mb-4 block">
            Habilidades
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass glass-hover p-6 text-center group cursor-pointer"
            >
              <h3 className="font-semibold text-foreground group-hover:text-jade transition-colors mb-3">
                {tech.name}
              </h3>
              
              {/* Progress Bar */}
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-jade to-jade-glow rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
              
              <span className="text-xs text-muted-foreground mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
