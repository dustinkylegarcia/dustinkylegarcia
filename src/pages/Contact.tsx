import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PageTransition, fadeInUp } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MessageSquare, User } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  useEffect(() => {
    document.title = "</>TIN | Contact";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <PageTransition>
      <section className="min-h-screen w-full gradient-hero flex items-start justify-center pt-24 pb-16">
        <div className="w-full max-w-xl px-4 sm:px-6 text-center">
          {/* Page Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient"
          >
            Contact Me
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-sm sm:text-base text-muted-foreground"
          >
            Have a question or want to work together? Feel free to reach out.
          </motion.p>

          {/* Contact Form */}
          <motion.form
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            onSubmit={handleSubmit}
            className="mt-8 glass rounded-2xl p-6 sm:p-8 shadow-card space-y-5 text-left"
          >
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <User size={14} />
                Your Name
              </label>
              <Input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50 border-border focus:border-primary transition-colors"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Mail size={14} />
                Your Email
              </label>
              <Input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50 border-border focus:border-primary transition-colors"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <MessageSquare size={14} />
                Your Message
              </label>
              <Textarea
                rows={4}
                placeholder="Tell me about your project or just say hi!"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                type="submit"
                size="lg"
                className="w-full gradient-accent text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </PageTransition>
  );
}
