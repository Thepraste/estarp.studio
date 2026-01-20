
import React, { useState } from 'react';
import { Project, ThemeMode, AdminUser } from '../types';

interface AdminDashboardProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  adminUsers: AdminUser[];
  setAdminUsers: React.Dispatch<React.SetStateAction<AdminUser[]>>;
  onClose: () => void;
  theme: ThemeMode;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  projects, 
  setProjects, 
  adminUsers, 
  setAdminUsers, 
  onClose, 
  theme 
}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'portfolio' | 'access'>('portfolio');

  // Project Form State
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    thumbnail: '',
    description: '',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');

  // User Management State
  const [newUser, setNewUser] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = adminUsers.find(u => u.username === loginUser && u.password === loginPass);
    if (user) {
      setIsAuth(true);
      setError('');
    } else {
      setError('System rejection: Unauthorized credentials.');
    }
  };

  const handleDeleteProject = (id: string) => {
    if (window.confirm('Confirm repository deletion?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.thumbnail) return;

    const projectToAdd: Project = {
      id: Date.now().toString(),
      title: newProject.title!,
      thumbnail: newProject.thumbnail!,
      description: newProject.description || '',
      tags: newProject.tags || [],
    };

    setProjects([projectToAdd, ...projects]);
    setNewProject({ title: '', thumbnail: '', description: '', tags: [] });
    setTagInput('');
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUser.username || !newUser.password) return;
    if (adminUsers.some(u => u.username === newUser.username)) {
      alert('Operator ID already exists in the system.');
      return;
    }

    const userToAdd: AdminUser = {
      id: Date.now().toString(),
      username: newUser.username,
      password: newUser.password,
      createdAt: new Date().toISOString()
    };

    setAdminUsers([...adminUsers, userToAdd]);
    setNewUser({ username: '', password: '' });
  };

  const handleDeleteUser = (id: string) => {
    if (adminUsers.length <= 1) {
      alert('Protocol Error: System requires at least one active operator.');
      return;
    }
    if (window.confirm('Revoke access for this operator?')) {
      setAdminUsers(adminUsers.filter(u => u.id !== id));
    }
  };

  if (!isAuth) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl">
        <div className="glass p-10 rounded-[2.5rem] w-full max-w-md border-t-2" style={{ borderColor: 'var(--accent-color)' }}>
          <h2 className="text-3xl font-extrabold mb-8 tracking-tighter text-white">Agency Admin</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-2 block">Operator ID</label>
              <input 
                type="text" 
                value={loginUser}
                onChange={(e) => setLoginUser(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 text-white"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-2 block">Security Token</label>
              <input 
                type="password" 
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 text-white"
                placeholder="Password"
              />
            </div>
            {error && <p className="text-red-500 text-xs font-mono">{error}</p>}
            <div className="flex gap-4 pt-4">
              <button 
                type="submit" 
                className="flex-1 py-4 rounded-xl font-bold transition-all text-white" 
                style={{ backgroundColor: 'var(--accent-color)' }}
              >
                Access Console
              </button>
              <button type="button" onClick={onClose} className="px-8 py-4 rounded-xl font-bold border border-white/10 glass text-white">
                Abort
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl overflow-y-auto">
      <div className="glass p-12 rounded-[3rem] w-full max-w-6xl my-auto relative border-t-2 min-h-[80vh]" style={{ borderColor: 'var(--accent-color)', color: 'white' }}>
        <button onClick={onClose} className="absolute top-8 right-8 p-3 hover:bg-white/10 rounded-full transition-colors text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <div className="flex items-center gap-12 mb-12">
          <h2 className="text-4xl font-extrabold tracking-tighter">Command Center</h2>
          <div className="flex gap-2 bg-white/5 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab('portfolio')}
              className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'portfolio' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60'}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => setActiveTab('access')}
              className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'access' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60'}`}
            >
              Access Control
            </button>
          </div>
        </div>

        {activeTab === 'portfolio' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <section className="lg:col-span-5 text-white">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold opacity-30 mb-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-color)' }} />
                New Portfolio Project
              </h3>
              <form onSubmit={handleAddProject} className="space-y-5">
                <input 
                  placeholder="Client Name / Project Title"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 text-white"
                  value={newProject.title}
                  onChange={e => setNewProject({...newProject, title: e.target.value})}
                />
                <input 
                  placeholder="Cover Image URL"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 text-white"
                  value={newProject.thumbnail}
                  onChange={e => setNewProject({...newProject, thumbnail: e.target.value})}
                />
                <textarea 
                  placeholder="Project Brief"
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 resize-none text-white"
                  value={newProject.description}
                  onChange={e => setNewProject({...newProject, description: e.target.value})}
                />
                <input 
                  placeholder="Tech Tags (comma separated)"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 text-white"
                  value={tagInput}
                  onChange={e => {
                    setTagInput(e.target.value);
                    setNewProject({...newProject, tags: e.target.value.split(',').map(t => t.trim()).filter(t => t !== '')});
                  }}
                />
                <button 
                  type="submit" 
                  className="w-full py-5 rounded-2xl font-bold transition-all text-white mt-4 hover:scale-[1.02]" 
                  style={{ backgroundColor: 'var(--accent-color)' }}
                >
                  Commit to Repository
                </button>
              </form>
            </section>

            <section className="lg:col-span-7">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold opacity-30 mb-8">Active Deployment ({projects.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-4">
                {projects.map(p => (
                  <div key={p.id} className="glass p-5 rounded-2xl border border-white/5 flex flex-col justify-between group">
                    <div className="flex items-center gap-4 mb-4">
                      <img src={p.thumbnail} className="w-14 h-14 rounded-xl object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                      <div className="overflow-hidden">
                        <p className="font-bold text-sm truncate">{p.title}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleDeleteProject(p.id)}
                      className="w-full py-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all text-xs font-bold"
                    >
                      Remove Project
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <section className="lg:col-span-5 text-white">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold opacity-30 mb-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-color)' }} />
                Generate New Credentials
              </h3>
              <form onSubmit={handleAddUser} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-30 ml-2">Operator ID</label>
                  <input 
                    placeholder="e.g. jdoe_architect"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 text-white"
                    value={newUser.username}
                    onChange={e => setNewUser({...newUser, username: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-30 ml-2">Security Token</label>
                  <input 
                    type="text"
                    placeholder="Define secure password"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 text-white"
                    value={newUser.password}
                    onChange={e => setNewUser({...newUser, password: e.target.value})}
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-5 rounded-2xl font-bold transition-all text-white mt-4 hover:scale-[1.02]" 
                  style={{ backgroundColor: 'var(--accent-color)' }}
                >
                  Authorize New Operator
                </button>
              </form>
            </section>

            <section className="lg:col-span-7">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold opacity-30 mb-8">Authorized System Operators ({adminUsers.length})</h3>
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-4">
                {adminUsers.map(u => (
                  <div key={u.id} className="glass p-6 rounded-2xl border border-white/5 flex items-center justify-between group">
                    <div className="flex items-center gap-5">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-lg opacity-40">
                        {u.username.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-lg">{u.username}</p>
                        <p className="text-[9px] opacity-30 uppercase tracking-[0.2em]">Authorized: {new Date(u.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="hidden group-hover:block transition-all text-[10px] font-mono opacity-20">
                        {u.password.replace(/./g, '*')}
                      </div>
                      <button 
                        onClick={() => handleDeleteUser(u.id)}
                        className="p-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all disabled:opacity-20"
                        disabled={adminUsers.length <= 1}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl flex gap-4 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                <p className="text-xs leading-relaxed text-yellow-500/80">
                  <strong>Security Advisory:</strong> Passwords are stored in local plaintext for session persistence. Ensure your workstation is secure. Revoking an operator immediately terminates their access protocol.
                </p>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
