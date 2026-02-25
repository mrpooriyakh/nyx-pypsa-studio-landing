import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  type: 'bus' | 'generator' | 'load';
}

interface Connection {
  from: number;
  to: number;
}

export function NetworkVisualization() {
  const [pulsePhase, setPulsePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const nodes: Node[] = [
    { id: 1, x: 100, y: 80, type: 'generator' },
    { id: 2, x: 200, y: 50, type: 'bus' },
    { id: 3, x: 300, y: 80, type: 'bus' },
    { id: 4, x: 250, y: 150, type: 'load' },
    { id: 5, x: 400, y: 100, type: 'generator' },
    { id: 6, x: 150, y: 180, type: 'load' },
  ];

  const connections: Connection[] = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
    { from: 2, to: 6 },
  ];

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'generator':
        return '#10b981';
      case 'load':
        return '#f59e0b';
      case 'bus':
        return '#06b6d4';
      default:
        return '#06b6d4';
    }
  };

  return (
    <svg
      viewBox="0 0 500 250"
      className="w-full h-full"
      style={{ filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))' }}
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
          <stop offset={`${pulsePhase}%`} stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Connections */}
      {connections.map((conn, idx) => {
        const fromNode = nodes.find((n) => n.id === conn.from);
        const toNode = nodes.find((n) => n.id === conn.to);
        if (!fromNode || !toNode) return null;

        return (
          <motion.line
            key={idx}
            x1={fromNode.x}
            y1={fromNode.y}
            x2={toNode.x}
            y2={toNode.y}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: idx * 0.1 }}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, idx) => (
        <g key={node.id}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="20"
            fill={getNodeColor(node.type)}
            fillOpacity="0.2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="8"
            fill={getNodeColor(node.type)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="20"
            fill="none"
            stroke={getNodeColor(node.type)}
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, delay: idx * 0.3, repeat: Infinity }}
          />
        </g>
      ))}
    </svg>
  );
}
