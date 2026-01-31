import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageTransition, staggerContainer, fadeInUp } from "@/components/PageTransition";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    issuer: "Sample Issuing Organization",
    date: "2024",
    description: "Comprehensive training covering HTML, CSS, JavaScript, and modern web development practices.",
    image: "/placeholder.svg",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "Backend Development with Node.js",
    issuer: "Sample Issuing Organization",
    date: "2024",
    description: "In-depth course on building RESTful APIs, database integration, and server-side development.",
    image: "/placeholder.svg",
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "Database Management",
    issuer: "Sample Issuing Organization",
    date: "2023",
    description: "Training on SQL, PostgreSQL, MySQL, and database design principles.",
    image: "/placeholder.svg",
    credentialUrl: "#",
  },
];

export default function Certifications() {
  useEffect(() => {
    document.title = "</>TIN | Certifications";
  }, []);

  return (
    <PageTransition>
      <section className="min-h-screen w-full gradient-hero flex items-start justify-center pt-24 pb-16">
        <div className="w-full max-w-6xl px-4 sm:px-6">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-8 w-8 text-primary" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
                Certifications
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and credentials that validate my skills and expertise.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group glass rounded-2xl shadow-card overflow-hidden hover:shadow-hover transition-all duration-300"
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden bg-secondary/50">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Date Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  <p className="mt-1 text-sm text-primary/80 font-medium">
                    {cert.issuer}
                  </p>
                  
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                    {cert.description}
                  </p>

                  {cert.credentialUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        View Credential
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State Message */}
          {certifications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Award className="mx-auto h-16 w-16 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium text-muted-foreground">
                No certifications yet
              </h3>
              <p className="mt-2 text-sm text-muted-foreground/70">
                Certifications will be displayed here once added.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
