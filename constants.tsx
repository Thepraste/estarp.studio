
import { Project, PromptExample } from './types';

export const COLORS = {
  dev: '#00F2FF',
  creative: '#BF00FF',
  bg: '#050505',
  glass: 'rgba(255, 255, 255, 0.03)',
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus OS Interface',
    category: 'web',
    mode: 'developer',
    thumbnail: 'https://picsum.photos/seed/web1/800/600',
    description: 'A React-based operating system simulation with complex state management.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    id: '2',
    title: 'Cyberpunk Vision Reel',
    category: 'video',
    mode: 'creative',
    thumbnail: 'https://picsum.photos/seed/vid1/800/600',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'High-energy edit featuring complex 3D tracking and VFX.',
    tags: ['After Effects', 'Cinema 4D', 'Premiere'],
  },
  {
    id: '3',
    title: 'LLM Orchestration Layer',
    category: 'prompt',
    mode: 'developer',
    thumbnail: 'https://picsum.photos/seed/prompt1/800/600',
    description: 'Custom Python middleware for multi-agent LLM coordination.',
    tags: ['Python', 'OpenAI', 'LangChain'],
  },
  {
    id: '4',
    title: 'Neon Brand Identity',
    category: 'graphics',
    mode: 'creative',
    thumbnail: 'https://picsum.photos/seed/graph1/800/600',
    description: 'Complete visual system for a futuristic tech startup.',
    tags: ['Illustrator', 'Typography', 'Branding'],
  },
  {
    id: '5',
    title: 'Interactive Data Mesh',
    category: 'web',
    mode: 'developer',
    thumbnail: 'https://picsum.photos/seed/web2/800/600',
    description: 'Real-time D3.js visualization of global network traffic.',
    tags: ['D3.js', 'TypeScript', 'WebGL'],
  },
  {
    id: '6',
    title: 'Abstract Motion Loops',
    category: 'video',
    mode: 'creative',
    thumbnail: 'https://picsum.photos/seed/vid2/800/600',
    description: 'A series of 3D loops exploring fluid dynamics and light.',
    tags: ['Houdini', 'Redshift', 'Octane'],
  },
];

export const PROMPT_EXAMPLES: PromptExample[] = [
  {
    id: 'p1',
    label: 'Creative Storytelling',
    input: 'Write a story about a robot.',
    logic: 'Chain-of-thought engineering with specific stylistic constraints and character depth anchors.',
    output: 'System: Act as a high-concept sci-fi novelist. [Constraint: Zero clichés]. [Anchor: Emotional decay]. Result: The clockwork heart of Unit-74 didn’t break; it simply ran out of meaningful seconds...',
  },
  {
    id: 'p2',
    label: 'Workflow Automation',
    input: 'Summarize these emails.',
    logic: 'Recursive summarization with action-item extraction and urgency scoring logic.',
    output: 'Processing 45 nodes... Identified 3 critical bottlenecks. Actionable: Update Jira #402, Schedule sync with DevOps. Sentiment: Neutral-to-Urgent.',
  }
];

export const TECH_STACK = [
  { name: 'React', level: 95, category: 'dev' },
  { name: 'TypeScript', level: 90, category: 'dev' },
  { name: 'Next.js', level: 85, category: 'dev' },
  { name: 'Python', level: 80, category: 'dev' },
  { name: 'After Effects', level: 95, category: 'creative' },
  { name: 'Premiere Pro', level: 90, category: 'creative' },
  { name: 'Photoshop', level: 85, category: 'creative' },
  { name: 'Blender', level: 75, category: 'creative' },
];
