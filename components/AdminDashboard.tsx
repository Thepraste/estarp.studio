
import React, { useState } from 'react';
import { Project, AppMode } from '../types';

interface AdminDashboardProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  onClose: () => void;
  mode: AppMode;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ projects, setProjects, onClose, mode }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Form state for new project
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    category: 'web',
    mode: 'developer',
    thumbnail: '',
    description: '',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'prasteadmin' && password === 'Barbos@0000') {
      setIsAuth(true);
      setError('');
    } else {
      setError('Invalid credentials access denied.');
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.thumbnail) return;

    const projectToAdd: Project = {
      id: Date.now().toString(),
      title: newProject.title!,
      category: newProject.category as any,
      mode: newProject.mode as any,
      thumbnail: newProject.thumbnail!,
      description: newProject.description || '',
      tags: newProject.tags || [],
    };

    setProjects([projectToAdd, ...projects]);
    setNewProject({
      title: '',
      category: 'web',
      mode: 'developer',
      thumbnail: '',
      description: '',
      tags: []
    });
    setTagInput('');
  };

  const accentColor = mode === 'developer' ? '#00F2FF' : '#BF00FF';

  if (!isAuth) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl">
        <div className="glass p-8 rounded-3xl w-full max-w-md border-t-2 transition-all duration-500" style={{ borderColor: accentColor }}>
          <h2 className="text-2xl font-bold mb-6 tracking-tight">System Authentication</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 block">Terminal User</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 text-white"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 block">Access Cipher</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 text-white"
                placeholder="Password"
              />
            </div>
            {error && <p className="text-red-500 text-xs font-mono">{error}</p>}
            <div className="flex gap-3 pt-2">
              <button type="submit" className="flex-1 py-3 rounded-xl font-bold transition-all text-black" style={{ backgroundColor: accentColor }}>
                Login
              </button>
              <button type="button" onClick={onClose} className="px-6 py-3 rounded-xl font-bold border border-white/10 glass">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl overflow-y-auto">
      <div className="glass p-8 rounded-[2.5rem] w-full max-w-5xl my-auto relative border-t-2" style={{ borderColor: accentColor }}>
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <h2 className="text-3xl font-extrabold mb-8 tracking-tighter">Admin <span style={{ color: accentColor }}>Dashboard</span></h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Add Project */}
          <section>
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-white/40 mb-6">Create New Project</h3>
            <form onSubmit={handleAddProject} className="space-y-4">
              <input 
                placeholder="Project Title"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30"
                value={newProject.title}
                onChange={e => setNewProject({...newProject, title: e.target.value})}
              />
              <div className="grid grid-cols-2 gap-4">
                <select 
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:outline-none"
                  value={newProject.category}
                  onChange={e => setNewProject({...newProject, category: e.target.value as any})}
                >
                  <option value="web">Web Dev</option>
                  <option value="video">Motion</option>
                  <option value="graphics">Design</option>
                  <option value="prompt">AI/Prompt</option>
                </select>
                <select 
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:outline-none"
                  value={newProject.mode}
                  onChange={e => setNewProject({...newProject, mode: e.target.value as any})}
                >
                  <option value="developer">Developer Mode</option>
                  <option value="creative">Creative Mode</option>
                </select>
              </div>
              <input 
                placeholder="Image URL (Thumbnail)"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30"
                value={newProject.thumbnail}
                onChange={e => setNewProject({...newProject, thumbnail: e.target.value})}
              />
              <textarea 
                placeholder="Short Description"
                rows={2}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30"
                value={newProject.description}
                onChange={e => setNewProject({...newProject, description: e.target.value})}
              />
              <div className="flex gap-2">
                <input 
                  placeholder="Tags (comma separated)"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30"
                  value={tagInput}
                  onChange={e => {
                    setTagInput(e.target.value);
                    setNewProject({...newProject, tags: e.target.value.split(',').map(t => t.trim()).filter(t => t !== '')});
                  }}
                />
              </div>
              <button type="submit" className="w-full py-4 rounded-xl font-bold transition-all text-black mt-4" style={{ backgroundColor: accentColor }}>
                Deploy Project
              </button>
            </form>
          </section>

          {/* List Projects */}
          <section>
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-white/40 mb-6">Live Repository ({projects.length})</h3>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {projects.map(p => (
                <div key={p.id} className="glass p-4 rounded-2xl flex items-center justify-between group border border-white/5 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-4">
                    <img src={p.thumbnail} className="w-12 h-12 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <div>
                      <p className="font-bold text-sm leading-none mb-1">{p.title}</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">{p.category} | {p.mode}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDelete(p.id)}
                    className="p-2 text-white/20 hover:text-red-500 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
