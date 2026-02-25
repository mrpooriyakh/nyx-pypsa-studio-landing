import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';
import { NetworkVisualization } from './NetworkVisualization';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Early Beta Access</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Model Renewable Energy Systems{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                Visually
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl">
              Build, simulate, and optimize PyPSA-based power networks with an intuitive interface.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245, 158, 11, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-accent text-accent-foreground flex items-center justify-center gap-3 text-lg shadow-lg shadow-accent/20 transition-shadow"
              >
                <Download className="w-5 h-5" />
                Download Pre-release
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-card border border-border text-foreground flex items-center justify-center gap-3 text-lg hover:bg-muted transition-colors"
              >
                <FileText className="w-5 h-5" />
                View Documentation
              </motion.button>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="px-3 py-1 rounded bg-muted/50 border border-border font-mono">
                v0.1.0-beta.1
              </div>
              <span>•</span>
              <span>Compatible with PyPSA 0.25+</span>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
              <div className="relative">
                <NetworkVisualization />
              </div>
              {/* Mock UI overlay */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-background/60 border border-border">
                  <span className="text-sm text-muted-foreground">Network Status</span>
                  <span className="text-sm text-primary">Optimal Solution</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded bg-background/40 border border-border text-center">
                    <div className="text-xs text-muted-foreground">Buses</div>
                    <div className="text-sm font-semibold text-secondary">6</div>
                  </div>
                  <div className="p-2 rounded bg-background/40 border border-border text-center">
                    <div className="text-xs text-muted-foreground">Generators</div>
                    <div className="text-sm font-semibold text-primary">2</div>
                  </div>
                  <div className="p-2 rounded bg-background/40 border border-border text-center">
                    <div className="text-xs text-muted-foreground">Loads</div>
                    <div className="text-sm font-semibold text-accent">2</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
