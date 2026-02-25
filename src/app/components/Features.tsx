import { motion } from 'motion/react';
import { useInView } from './useInView';
import {
  Network,
  Zap,
  LineChart,
  GitCompare,
  Download,
  CheckCircle,
} from 'lucide-react';

const features = [
  {
    icon: Network,
    title: 'Visual Network Editor',
    description: 'Drag-and-drop interface for building power system topologies.',
  },
  {
    icon: Zap,
    title: 'FastAPI + React Workflow',
    description: 'Seamless integration between backend optimization and frontend visualization.',
  },
  {
    icon: LineChart,
    title: 'Optimization Runs',
    description: 'Execute PyPSA optimization with configurable solvers and parameters.',
  },
  {
    icon: GitCompare,
    title: 'Scenario Comparison',
    description: 'Compare multiple network configurations side-by-side.',
    badge: 'Coming Soon',
  },
  {
    icon: Download,
    title: 'Export Results',
    description: 'Export network data, results, and visualizations in multiple formats.',
  },
  {
    icon: CheckCircle,
    title: 'Engineering-friendly Validation',
    description: 'Built-in checks for network consistency and parameter validity.',
  },
];

export function Features() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="features" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Engineering-Grade Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Purpose-built tools for power systems modeling and renewable energy optimization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.1)' }}
                className="relative group"
              >
                <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    {feature.badge && (
                      <span className="px-2 py-1 text-xs rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
