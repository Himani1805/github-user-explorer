import React from 'react';
import { Users, Book, Link as LinkIcon, MapPin, Star } from 'lucide-react';

const UserProfile = ({ user, repos }) => {
    // If no user data, return null
    if (!user) return null;

    return (
        <div className="max-w-4xl mx-auto p-4 mt-8 animate-in fade-in duration-500">
            {/* Profile Header Section */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 md:flex items-center gap-8 shadow-2xl">
                <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500/20 shadow-lg mx-auto md:mx-0"
                />

                <div className="mt-4 md:mt-0 text-center md:text-left flex-1">
                    <h1 className="text-2xl font-bold text-white">{user.name || user.login}</h1>
                    <p className="text-blue-400 font-mono">@{user.login}</p>
                    <p className="mt-2 text-gray-400 leading-relaxed">{user.bio || "This user has not added a bio yet."}</p>

                    {/* Location & Links */}
                    <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-500">
                        {user.location && (
                            <span className="flex items-center gap-1"><MapPin size={16} /> {user.location}</span>
                        )}
                        {user.blog && (
                            <a href={user.blog} target="_blank" className="flex items-center gap-1 text-blue-400 hover:underline"><LinkIcon size={16} /> Website</a>
                        )}
                    </div>

                    {/* Stats Badges */}
                    <div className="mt-6 flex justify-center md:justify-start gap-4">
                        <div className="text-center px-4 py-2 bg-[#0d1117] rounded-lg border border-[#30363d]">
                            <p className="text-xs text-gray-500 uppercase">Followers</p>
                            <p className="text-lg font-bold text-white">{user.followers}</p>
                        </div>
                        <div className="text-center px-4 py-2 bg-[#0d1117] rounded-lg border border-[#30363d]">
                            <p className="text-xs text-gray-500 uppercase">Following</p>
                            <p className="text-lg font-bold text-white">{user.following}</p>
                        </div>
                        <div className="text-center px-4 py-2 bg-[#0d1117] rounded-lg border border-[#30363d]">
                            <p className="text-xs text-gray-500 uppercase">Repos</p>
                            <p className="text-lg font-bold text-white">{user.public_repos}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Repositories Grid */}
            <h2 className="text-xl font-semibold mt-10 mb-4 text-gray-500 flex items-center gap-2">
                <Book size={20} className="text-blue-500" /> Popular Repositories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repos.map(repo => (
                    <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-[#161b22] border border-[#30363d] rounded-xl hover:border-blue-500/50 transition-all group"
                    >
                        <h3 className="text-blue-400 font-bold group-hover:underline truncate">{repo.name}</h3>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{repo.description || "No description provided."}</p>
                        <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                            <span className="flex items-center gap-1"><Star size={14} className="text-yellow-500" /> {repo.stargazers_count}</span>
                            <span>{repo.language || "Plain Text"}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default UserProfile;