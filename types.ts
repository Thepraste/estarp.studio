
export type AppMode = 'developer' | 'creative';

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'video' | 'graphics' | 'prompt';
  mode: AppMode;
  thumbnail: string;
  videoUrl?: string;
  description: string;
  tags: string[];
}

export interface PromptExample {
  id: string;
  label: string;
  input: string;
  logic: string;
  output: string;
}

export interface AdminState {
  isLoggedIn: boolean;
  showModal: boolean;
}
