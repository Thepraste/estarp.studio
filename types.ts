
export type ThemeMode = 'light' | 'dark';

export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  tags: string[];
}

export interface AdminUser {
  id: string;
  username: string;
  password: string;
  createdAt: string;
}

export interface AdminState {
  isLoggedIn: boolean;
  showModal: boolean;
}
