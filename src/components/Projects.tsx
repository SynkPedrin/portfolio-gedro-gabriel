import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

import projectOrvynFinance from "@/assets/project-orvyn-finance.png";
import projectOrvynSistemas from "@/assets/project-orvyn-sistemas.png";
import projectOrvynEvents from "@/assets/project-orvyn-events.png";
import projectGaleriaArte from "@/assets/project-galeria-arte.png";

const projects = [
  {
    id: 1,
    title: "Orvyn Finance",
    description: "Sistema de gestão financeira inteligente com IA integrada que auxilia o usuário com previsões de gastos e insights financeiros personalizados. Dashboard interativo com autenticação segura e controle completo de finanças.",
    image: projectOrvynFinance,
    tags: ["Next.js", "React", "MySQL", "PHP", "AI"],
    github: "https://github.com/SynkPedrin",
    highlight: "Powered by AI",
  },
  {
    id: 2,
    title: "Orvyn Sistemas",
    description: "Plataforma de cursos premium com e-commerce integrado, sistema de progressão de aprendizado e interface moderna.",
    image: projectOrvynSistemas,
    tags: ["Next.js", "Bootstrap 5", "JavaScript", "MySQL"],
    github: "https://github.com/SynkPedrin",
  },
  {
    id: 3,
    title: "Orvyn Events",
    description: "Sistema completo de gerenciamento de eventos com controle de organizadores, participantes, inscrições e palestras.",
    image: projectOrvynEvents,
    tags: ["PHP", "MySQL", "Bootstrap 5", "JavaScript"],
    github: "https://github.com/SynkPedrin",
  },
  {
    id: 4,
    title: "Galeria de Arte",
    description: "Galeria virtual elegante para exposição de obras de arte com navegação intuitiva e destaque mensal de artistas.",
    image: projectGaleriaArte,
    tags: ["React", "JavaScript", "CSS3"],
    github: "https://github.com/SynkPedrin",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
  const imageX = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? -50 : 50, 0, index % 2 === 0 ? 50 : -50]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? -3 : 3, 0, index % 2 === 0 ? 3 : -3]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y, scale }}
      className="min-h-screen py-20 flex items-center"
    >
      <div className={`container mx-auto px-6 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
        {/* Project Image */}
        <motion.div 
          className="flex-1 relative group cursor-pointer"
          style={{ x: imageX, rotate }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Animated Glow */}
          <motion.div 
            className="absolute inset-0 bg-jade/30 blur-3xl rounded-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Floating particles effect */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-jade/20 rounded-full blur-2xl"
            animate={{ 
              y: [0, -20, 0], 
              x: [0, 10, 0],
              scale: [1, 1.2, 1] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-jade/15 rounded-full blur-xl"
            animate={{ 
              y: [0, 15, 0], 
              x: [0, -8, 0],
              scale: [1, 1.3, 1] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          <div className="relative overflow-hidden rounded-2xl glass p-2">
            {/* AI Badge for highlighted projects */}
            {project.highlight && (
              <motion.div
                className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-jade/90 backdrop-blur-sm rounded-full flex items-center gap-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs font-bold text-white tracking-wider uppercase">
                  {project.highlight}
                </span>
              </motion.div>
            )}
            
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
            />
            
            {/* Shine effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
              whileHover={{ translateX: "200%" }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Hover Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent rounded-xl flex items-end p-6"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-5 py-3 flex items-center gap-2 text-sm font-medium border border-jade/30 hover:bg-jade/30 transition-all"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                Ver no GitHub
                <ExternalLink className="w-3 h-3" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Project Info */}
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-jade text-sm font-medium tracking-widest uppercase inline-block"
            whileHover={{ letterSpacing: "0.25em" }}
            transition={{ duration: 0.3 }}
          >
            Projeto 0{index + 1}
          </motion.span>
          
          <motion.h3 
            className="text-4xl md:text-5xl font-bold text-foreground"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            {project.description}
          </p>

          <motion.div 
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                className={`px-3 py-1 text-xs font-medium border rounded-full transition-all cursor-default ${
                  tag === "AI" 
                    ? "bg-jade/20 text-jade border-jade/40 shadow-[0_0_15px_rgba(30,184,138,0.3)]" 
                    : "bg-jade/10 text-jade border-jade/20"
                }`}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-jade transition-colors group"
            whileHover={{ x: 10 }}
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">Acessar Repositório</span>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative">
      {/* Section Header */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-jade text-sm font-medium tracking-widest uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
        </motion.div>
      </div>

      {/* Project Cards */}
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  );
};

export default Projects;
