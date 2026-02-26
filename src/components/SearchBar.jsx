import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
    // Using local state to control the text input value
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        if (username.trim()) {
            onSearch(username); // Pass username to parent component
        }
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-2xl mx-auto mt-10 px-4"
        >
            <div className="relative group">
                {/* Search Icon */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                    <Search size={20} />
                </div>

                {/* Input Field */}
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Search GitHub username (e.g. torvalds)..."
                    className="block w-full pl-10 pr-3 py-4 bg-[#161b22] border border-[#30363d] rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-lg"
                />

                {/* Search Button */}
                <button
                    type="submit"
                    className="absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition-colors cursor-pointer"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBar;