import { motion } from 'motion/react';
import { useInView } from './useInView';
import { AlertCircle, MessageSquare, Bell } from 'lucide-react';

export function PreReleaseNotice() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl bg-gradient-to-br from-card to-muted/30 border border-border p-8 md:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold">Early Beta Release</h2>
              </div>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                This is an early beta version of Nyx PyPSA Studio. Some features are still in development, and you may encounter bugs or incomplete functionality. We welcome your feedback to help shape the future of the product.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg bg-primary text-primary-foreground flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-shadow"
                >
                  <MessageSquare className="w-5 h-5" />
                  Report Feedback
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg bg-card border border-border text-foreground flex items-center justify-center gap-2 hover:bg-muted transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  Join Updates
                </motion.button>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Active development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span>Frequent updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span>Community-driven</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
