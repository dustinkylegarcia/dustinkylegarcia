import { motion } from "framer-motion";

export default function IntroLoader() {
  return (
    <motion.div
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        {/* LOGO */}
        <motion.div 
          className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center"
          animate={{ 
            boxShadow: [
              "0 0 0 0 hsl(var(--primary) / 0.4)",
              "0 0 0 20px hsl(var(--primary) / 0)",
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-gradient font-bold text-xl">&lt;/&gt;</span>
        </motion.div>

        <div className="flex flex-col">
          <h1 className="text-foreground text-2xl font-semibold tracking-wide">
            DUSTIN KYLE
          </h1>
          <span className="text-muted-foreground text-sm">Portfolio</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
