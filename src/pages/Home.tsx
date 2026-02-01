import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  PageTransition,
  staggerContainer,
  fadeInUp,
} from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Download,
  ArrowRight,
  Code,
  Layout,
  Server,
  Database,
  GitBranch,
  Wrench,
  Award,
  ExternalLink,
  Calendar,
  Send,
  Mail,
  MessageSquare,
  User,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// Social media links
const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/dustinkylegarcia",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/dustin-kyle-garcia-953682225",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/dustinkyle.garcia",
    color: "hover:text-[#1877F2]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/xdustinkyle",
    color: "hover:text-[#E4405F]",
  },
];

// Skills data
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

// Certifications data
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
    description:
      "Comprehensive training covering HTML, CSS, JavaScript, and modern web development practices.",
    image: "/placeholder.svg",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "Backend Development with Node.js",
    issuer: "Sample Issuing Organization",
    date: "2024",
    description:
      "In-depth course on building RESTful APIs, database integration, and server-side development.",
    image: "/placeholder.svg",
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "Database Management",
    issuer: "Sample Issuing Organization",
    date: "2023",
    description:
      "Training on SQL, PostgreSQL, MySQL, and database design principles.",
    image: "/placeholder.svg",
    credentialUrl: "#",
  },
];

// Code snippets for decoration
const codeSnippets = [
  `const developer = {
  name: "Dustin Kyle",
  role: "Full Stack Dev",
  passion: "Building APIs"
};`,
  `async function fetchData() {
  const res = await api.get('/users');
  return res.data;
}`,
  `SELECT * FROM projects
WHERE status = 'active'
ORDER BY created_at DESC;`,
];

export default function Home() {
  useEffect(() => {
    document.title = "</>TIN | Home";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="min-h-screen w-full gradient-hero flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Floating Code Snippets - Decorative */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {codeSnippets.map((code, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ delay: 1 + index * 0.3, duration: 1 }}
              className={`absolute hidden lg:block text-xs font-mono text-primary/60 whitespace-pre bg-primary/5 p-3 rounded-lg border border-primary/10 ${
                index === 0
                  ? "top-32 left-8"
                  : index === 1
                    ? "top-48 right-12"
                    : "bottom-32 left-16"
              }`}
            >
              {code}
            </motion.div>
          ))}

          {/* Decorative gradient blobs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full max-w-6xl px-6 text-center relative z-10"
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
                words={[
                  "Dustin Kyle",
                  "a Web Developer",
                  "a Backend Developer",
                ]}
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
            focusing on clean APIs, scalable back-end systems, and integrating
            AI-assisted tools to enhance productivity,
            debugging, and system design.
          </motion.p>

          {/* Social Media Links */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 bg-secondary text-muted-foreground rounded-full
                           border border-border transition-all duration-300 ${social.color}
                           hover:shadow-lg hover:border-primary/30`}
                title={social.name}
              >
                <social.icon size={22} />
              </motion.a>
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
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full gradient-hero py-20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient text-center mb-12"
          >
            About Me
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
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
            <motion.div
              variants={fadeInUp}
              className="text-center md:text-left"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-primary">
                Hi, I&apos;m Dustin Kyle
              </h3>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">
                Aspiring Full Stack Developer with hands-on experience building
                back-end systems using Node.js and PostgreSQL, and a strong
                interest in creating innovative technology solutions.
              </p>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">
                A graduate of the Polytechnic University of the Philippines –
                Sto. Tomas Campus with a Bachelor's degree in Information
                Technology, awarded{" "}
                <span className="font-medium text-foreground">Cum Laude</span>.
                I bring a strong leadership background and a consistent record
                of academic excellence as a President's Lister.
              </p>
            </motion.div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 + categoryIndex * 0.1,
                    duration: 0.4,
                  }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl shadow-card p-6 text-center hover:shadow-hover transition-shadow duration-300"
                >
                  <h4
                    className="flex items-center justify-center gap-2
                                 text-lg sm:text-xl font-semibold text-primary mb-4"
                  >
                    <category.icon size={20} />
                    {category.title}
                  </h4>

                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
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

      {/* Certifications Section */}
      <section id="certifications" className="w-full bg-secondary/30 py-20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
                Certifications
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and credentials that validate my
              skills and expertise.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Credential
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full gradient-hero py-20">
        <div className="w-full max-w-xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient"
          >
            Contact Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-sm sm:text-base text-muted-foreground"
          >
            Have a question or want to work together? Feel free to reach out.
          </motion.p>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="mt-8 glass rounded-2xl p-6 sm:p-8 shadow-card space-y-5 text-left"
          >
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <User size={14} />
                Your Name
              </label>
              <Input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-background/50 border-border focus:border-primary transition-colors"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Mail size={14} />
                Your Email
              </label>
              <Input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-background/50 border-border focus:border-primary transition-colors"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <MessageSquare size={14} />
                Your Message
              </label>
              <Textarea
                rows={4}
                placeholder="Tell me about your project or just say hi!"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full gradient-accent text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>
    </PageTransition>
  );
}
