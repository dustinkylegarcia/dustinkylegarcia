import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageTransition, staggerContainer, fadeInUp } from "@/components/PageTransition";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "My GitHub Portfolio",
    description: "A collection of my projects and experiments.",
    link: "https://dustinkylegarcia.github.io/",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80", // GitHub themed image
  },
  {
    title: "Valorant Cards API",
    description: "A web app consuming a public API with JSON responses.",
    link: "https://dustinkylegarcia.github.io/API/",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80", // Gaming/API themed
  },
  {
    title: "Embed Video Page",
    description: "A page using YouTube embed API with structured content.",
    link: "https://dustinkylegarcia.github.io/MIDTERM/",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80", // Video/Media themed
  },
  {
    title: "Japan Famous Places",
    description: "A static website showcasing popular destinations in Japan.",
    link: "https://dustinkylegarcia.github.io/Japan/",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80", // Japan themed
  },
  {
    title: "First Portfolio Project",
    description: "My first Portfolio project using JavaScript and CSS in Vercel",
    link: "https://dustinkylegarcia.vercel.app",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80", // Code/Development themed
  },
  {
    title: "Gastos Tracker",
    description: "My first small project that lets you track your expenses.",
    link: "https://gastostrackerph.lovable.app",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80", // Finance/Tracking themed
  },
  {
    title: "Pag-ibig Properties",
    description: "A landing page for real estate website showcasing properties for sale and rent.",
    link: "https://pagibigproperties.lovable.app",
    image: "https://plus.unsplash.com/premium_photo-1679582754971-5a2d8ae7e6fa?q=80&w=1170", // Finance/Tracking themed
  },
  {
    title: "Nexus Gaming",
    description: "A landing page for a gaming website showcasing upcoming games and events.",
    link: "https://nexusgamingph.lovable.app",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1265", // Gaming themed
  },
  {
    title: "Restaurant Landing Page",
    description: "A landing page for a restaurant website showcasing menu and reservations.",
    link: "https://dkmgrestaurant.lovable.app",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80", // Restaurant themed
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
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
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
                className="group glass rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer block"
              >
                {/* Image Container with Overlay */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  
                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating External Link Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 10, y: -10 }}
                    whileHover={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
                  >
                    <ExternalLink size={18} className="text-primary" />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Call to Action */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    <span>View Live Demo</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    >
                      <ExternalLink size={14} />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}