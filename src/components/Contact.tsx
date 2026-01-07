import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/SynkPedrin",
    label: "@SynkPedrin",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/",
    label: "Pedro Gabriel",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:pgvenegeroles09@gmail.com",
    label: "pgvenegeroles09@gmail.com",
  },
];

const Contact = () => {
  return (
    <footer id="contact" className="py-32 relative">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-jade to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-jade text-sm font-medium tracking-widest uppercase mb-4 block">
            Contato
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Vamos <span className="text-gradient">Conectar</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover px-8 py-6 flex items-center gap-4 group w-full md:w-auto justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <link.icon className="w-6 h-6 text-jade" />
              <div className="text-left">
                <span className="block text-xs text-muted-foreground uppercase tracking-wider">
                  {link.name}
                </span>
                <span className="font-medium text-foreground group-hover:text-jade transition-colors">
                  {link.label}
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center pt-10 border-t border-border"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Pedro Gabriel. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
