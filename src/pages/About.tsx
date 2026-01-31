import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageTransition, staggerContainer, fadeInUp } from "@/components/PageTransition";
import {
  Code,
  Layout,
  Server,
  Database,
  GitBranch,
  Wrench,
} from "lucide-react";

const frontendSkills = [
  { name: "React", icon: Code },
  { name: "Tailwind CSS", icon: Layout },
  { name: "JavaScript", icon: Code },
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Layout },
];

const backendSkills = [
  { name: "Node.js", icon: Server },
  { name: "Express", icon: Server },
  { name: "REST APIs", icon: GitBranch },
];

const otherTools = [
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "VS Code", icon: Code },
  { name: "MongoDB", icon: Database },
];

const skillCategories = [
  { title: "Frontend", icon: Layout, skills: frontendSkills },
  { title: "Backend", icon: Server, skills: backendSkills },
  { title: "Other Tools", icon: Wrench, skills: otherTools },
];

export default function About() {
  useEffect(() => {
    document.title = "</>TIN | About";
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
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient text-center mb-12"
          >
            About Me
          </motion.h1>

          {/* Profile + About */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <motion.div variants={fadeInUp} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 gradient-primary rounded-2xl blur-xl opacity-20" />
                <img
                  src="/profile.jpg"
                  alt="Dustin Kyle Garcia"
                  className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64
                             object-cover rounded-2xl shadow-card"
                />
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div variants={fadeInUp} className="text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                Hi, I&apos;m Dustin Kyle
              </h2>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">
                Aspiring Full Stack Developer with hands-on experience building back-end
                systems using Node.js and PostgreSQL, and a strong interest in creating
                innovative technology solutions.
              </p>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">
                A graduate of the Polytechnic University of the Philippines – Sto. Tomas Campus
                with a Bachelor's degree in Information Technology, awarded{" "}
                <span className="font-medium text-foreground">Cum Laude</span>.
                I bring a strong leadership background and a consistent record of academic
                excellence as a President's Lister.
              </p>
            </motion.div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + categoryIndex * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl shadow-card p-6 text-center hover:shadow-hover transition-shadow duration-300"
                >
                  <h3 className="flex items-center justify-center gap-2
                                 text-lg sm:text-xl font-semibold text-primary mb-4">
                    <category.icon size={20} />
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm
                                   bg-primary/10 text-primary rounded-full"
                      >
                        <skill.icon size={12} />
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
