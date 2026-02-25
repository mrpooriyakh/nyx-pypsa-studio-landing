import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Cpu, Repeat, Sun, GraduationCap } from 'lucide-react';

const useCases = [
  {
    icon: Cpu,
    title: 'Microgrids',
    description: 'Design and optimize isolated or grid-connected microgrids with renewable integration.',
  },
  {
    icon: Repeat,
    title: 'Transmission Planning',
    description: 'Analyze transmission network expansion and congestion management strategies.',
  },
  {
    icon: Sun,
    title: 'Renewable Integration',
    description: 'Study high-penetration renewable scenarios and storage requirements.',
  },
  {
    icon: GraduationCap,
    title: 'Academic Modeling',
    description: 'Educational tool for power systems courses and research projects.',
  },
];

export function UseCases() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="use-cases" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Built For Real Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From academic research to industrial planning, Nyx PyPSA Studio adapts to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
