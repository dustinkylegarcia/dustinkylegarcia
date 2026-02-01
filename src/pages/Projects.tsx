import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageTransition, staggerContainer, fadeInUp } from "@/components/PageTransition";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "My GitHub Portfolio",
    description: "A collection of my projects and experiments.",
    link: "https://dustinkylegarcia.github.io/",
  },
  {
    title: "Valorant Cards API",
    description: "A web app consuming a public API with JSON responses.",
    link: "https://dustinkylegarcia.github.io/API/",
  },
  {
    title: "Embed Video Page",
    description: "A page using YouTube embed API with structured content.",
    link: "https://dustinkylegarcia.github.io/MIDTERM/",
  },
  {
    title: "Japan Famous Places",
    description: "A static website showcasing popular destinations in Japan.",
    link: "https://dustinkylegarcia.github.io/Japan/",
  },
  {
    title: "First Portfolio Project",
    description: "My first Portfolio project using JavaScript and CSS in Vercel",
    link: "https://dustinkylegarcia.vercel.app",
  },
];

export default function Projects() {
  useEffect(() => {
    document.title = "</>TIN | Projects";
  }, []);

  return (
    <PageTransition>
      <section className="min-h-screen w-full gradient-hero flex items-start justify-center pt-24 pb-16">
        <div className="w-full max-w-6xl px-4 sm:px-6">
          {/* Page Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient text-center mb-10"
          >
            Projects
          </motion.h1>

          {/* Project Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid gap-6 sm:grid-cols-2"
          >
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group glass rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer block"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <motion.div
                    initial={{ opacity: 0.5, x: -4 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.div>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Live Demo
                  <ExternalLink size={14} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
