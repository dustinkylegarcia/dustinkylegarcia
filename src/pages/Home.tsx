import { useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { PageTransition, staggerContainer, fadeInUp } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const techStack = ["Node.js", "Express", "MySQL", "PostgreSQL", "React", "Tailwind"];

export default function Home() {
  useEffect(() => {
    document.title = "</>TIN | Home";
  }, []);

  return (
    <PageTransition>
      <section className="min-h-screen w-full gradient-hero flex items-center justify-center pt-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full max-w-6xl px-6 text-center"
        >
          {/* Role Badge */}
          <motion.span
            variants={fadeInUp}
            className="inline-block mb-6 px-4 py-2 text-xs sm:text-sm font-medium
                       text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            Entry-Level / Junior Web Developer
          </motion.span>

          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="text-gradient">
              <Typewriter
                words={["a Back-End Developer", "a Web Developer", "Dustin Kyle"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 mx-auto text-muted-foreground
                       text-sm sm:text-base md:text-lg
                       max-w-xl md:max-w-2xl"
          >
            I build modern web applications using the tech stack I know,
            with a focus on clean APIs and scalable back-end systems.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 text-xs sm:text-sm
                           bg-secondary text-secondary-foreground rounded-full
                           border border-border cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="gradient-accent text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="/Garcia_CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
