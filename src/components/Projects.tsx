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
    description: "Sistema de gestão financeira inteligente com autenticação segura, dashboard interativo e controle completo de finanças pessoais.",
    image: projectOrvynFinance,
    tags: ["Next.js", "React", "MySQL", "PHP"],
    github: "https://github.com/SynkPedrin",
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
          className="flex-1 relative group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 bg-jade/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative overflow-hidden rounded-2xl glass p-2">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-end p-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 py-2 flex items-center gap-2 text-sm font-medium hover:bg-jade/20 transition-colors"
              >
                <Github className="w-4 h-4" />
                Ver no GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Info */}
        <div className="flex-1 space-y-6">
          <span className="text-jade text-sm font-medium tracking-widest uppercase">
            Projeto 0{index + 1}
          </span>
          
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-jade/10 text-jade border border-jade/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-jade transition-colors group"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">Acessar Repositório</span>
            <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </div>
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
