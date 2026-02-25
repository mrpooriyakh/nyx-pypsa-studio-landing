import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Download, FileText } from 'lucide-react';

export function FinalCTA() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Start Testing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Nyx PyPSA Studio
            </span>{' '}
            Today
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join energy engineers and researchers building the next generation of renewable energy systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(245, 158, 11, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-xl bg-accent text-accent-foreground flex items-center justify-center gap-3 text-lg font-semibold shadow-2xl shadow-accent/30 transition-shadow"
            >
              <Download className="w-6 h-6" />
              Download Beta
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-xl bg-card border-2 border-border text-foreground flex items-center justify-center gap-3 text-lg font-semibold hover:bg-muted hover:border-primary/50 transition-all"
            >
              <FileText className="w-6 h-6" />
              Get Release Notes
            </motion.button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>No installation hassles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>Cross-platform support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Regular updates</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
