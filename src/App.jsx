import React from 'react';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import useGitHubUser from './hooks/useGitHubUser';
import { Loader2, AlertCircle, Github } from 'lucide-react';

function App() {
  // Using a custom hook to separate and reuse important logic
  const { userData, repos, loading, error, getUser } = useGitHubUser();

  return (
    <div className="min-h-screen pb-20">
      {/* Header / Navbar */}
      <nav className="border-b border-[#30363d] bg-[#161b22] py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-3">
          <Github className="text-white" size={32} />
          <h1 className="text-xl font-bold text-white tracking-tight">
            GitScanner <span className="text-blue-500 text-sm font-normal">v1.0</span>
          </h1>
        </div>
      </nav>

      {/* Hero Section & Search */}
      <div className="text-center mt-16 mb-8 px-4">
        <h2 className="text-4xl font-extrabold text-white mb-4">Find any GitHub Developer</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Enter a username to fetch their professional profile, stats, and top repositories.
        </p>
      </div>

      <SearchBar onSearch={getUser} />

      {/* Main Content Area */}
      <main className="mt-12">
        {/* Case 1: Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center mt-20 gap-4">
            <Loader2 className="animate-spin text-blue-500" size={48} />
            <p className="text-gray-400 animate-pulse">Fetching developer data...</p>
          </div>
        )}

        {/* Case 2: Error State */}
        {error && !loading && (
          <div className="max-w-md mx-auto mt-10 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
            <AlertCircle size={24} />
            <p className="font-medium">{error}</p>
          </div>
        )}

        {/* Case 3: Success State (User Found) */}
        {!loading && !error && userData && (
          <UserProfile user={userData} repos={repos} />
        )}

        {/* Case 4: Initial State (Welcome Message) */}
        {!loading && !error && !userData && (
          <div className="text-center mt-24 opacity-20 grayscale">
            <Github size={120} className="mx-auto text-gray-500" />
            <p className="mt-4 text-xl">Waiting for your search...</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;