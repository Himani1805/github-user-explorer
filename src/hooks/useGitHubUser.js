import { useState } from 'react';
import { fetchGitHubUser, fetchUserRepos } from '../services/githubService';

const useGitHubUser = () => {
    // 1. useState hook will use state define 
    const [userData, setUserData] = useState(null); 
    const [repos, setRepos] = useState([]);     
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);     

    const getUser = async (username) => {
        // Search start then old data and error will clear
        setLoading(true);
        setError(null);
        
        try {
            // Running API calls in parallel using Promise.all() to improve performance
            const [user, userRepos] = await Promise.all([
                fetchGitHubUser(username),
                fetchUserRepos(username)
            ]);

            setUserData(user);
            setRepos(userRepos);
        } catch (err) {
            // Show "User not found" message when response status is 404
            if (err.response && err.status === 404) {
                setError("User not found. Please check the username.");
            } else {
                setError("Something went wrong. Please try again later.");
            }
            setUserData(null);
        } finally {
            // Stop loading after data is fetched or error occurs
            setLoading(false);
        }
    };

    return { userData, repos, loading, error, getUser };
};

export default useGitHubUser;