import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Pencil, Settings, Play } from 'lucide-react';

const steps = [
  {
    icon: Pencil,
    title: 'Design Network',
    description: 'Create your power system topology using the visual editor. Add buses, generators, loads, and transmission lines.',
  },
  {
    icon: Settings,
    title: 'Configure Parameters',
    description: 'Set component specifications, costs, constraints, and optimization objectives through intuitive forms.',
  },
  {
    icon: Play,
    title: 'Run & Inspect',
    description: 'Execute optimization and visualize results including flows, voltages, costs, and emissions in real-time.',
  },
];

export function Workflow() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="workflow" ref={ref} className="py-24 relative bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined workflow from design to results in three steps.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" />

            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative"
                >
                  <div className="text-center">
                    {/* Step number and icon */}
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center relative z-10 bg-background">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          <Icon className="w-8 h-8 text-background" />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                        {idx + 1}
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
