
import { Project } from './types';

export const THEME_COLORS = {
  dark: {
    accent: '#00F2FF',
    bg: '#050505',
    text: '#ffffff',
    glass: 'rgba(255, 255, 255, 0.03)',
    border: 'rgba(255, 255, 255, 0.1)',
  },
  light: {
    accent: '#0066FF',
    bg: '#ffffff',
    text: '#111111',
    glass: 'rgba(0, 0, 0, 0.03)',
    border: 'rgba(0, 0, 0, 0.05)',
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Vortex ERP System',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=800',
    description: 'A massive internal resource planning tool with real-time data sync.',
    tags: ['React', 'PostgreSQL', 'AWS'],
  },
  {
    id: '2',
    title: 'Lumina Fashion Store',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    description: 'High-end streetwear platform with custom 3D garment visualization.',
    tags: ['Next.js', 'Three.js', 'Stripe'],
  },
  {
    id: '3',
    title: 'Aether Crypto Dashboard',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    description: 'Secure wallet tracking and DEX aggregator interface.',
    tags: ['Solidity', 'Ethers.js', 'Tailwind'],
  },
  {
    id: '4',
    title: 'Pulse SaaS Analytics',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Marketing automation dashboard with focus on micro-interactions.',
    tags: ['Framer Motion', 'D3.js', 'TypeScript'],
  }
];

export const TECH_STACK = [
  { name: 'Fullstack Dev', level: 98 },
  { name: 'Cloud Arch', level: 92 },
  { name: 'Cybersecurity', level: 85 },
  { name: 'AI Integration', level: 90 },
  { name: 'UI/UX Design', level: 95 },
  { name: 'Motion Design', level: 90 },
  { name: 'Brand Strategy', level: 88 },
  { name: '3D WebGL', level: 82 },
];

export const PROMPT_EXAMPLES = [
  {
    id: '1',
    label: 'Scalable Architecture',
    logic: 'Applying microservices decomposition and horizontal scaling heuristics.',
    input: 'Design a system that can handle 1M concurrent users for a global fintech platform.',
    output: 'Implementing a k8s cluster with multi-region replication, Redis for state caching, and Kafka for event-driven asynchronous processing...'
  },
  {
    id: '2',
    label: 'Brand Identity',
    logic: 'Synthesizing cyberpunk aesthetics with minimalist structural design.',
    input: 'Create a visual language for a futuristic design studio called "estarp techies".',
    output: 'Primary palette: #00F2FF (Neon Cyan) and #0066FF (Tech Blue). Using high-contrast typography and translucent glassmorphism textures...'
  },
  {
    id: '3',
    label: 'AI Model Tuning',
    logic: 'Optimizing context windows and instruction-tuning for domain-specific tasks.',
    input: 'Fine-tune a large language model to behave as a technical architect.',
    output: 'System Instruction: "You are a world-class senior software engineer...". Applying Chain-of-Thought prompting to improve reasoning on complex codebases...'
  }
];
