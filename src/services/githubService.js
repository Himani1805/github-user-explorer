import axios from 'axios';

// Base URL
const GITHUB_BASE_URL = 'https://api.github.com/users';

// Fetch GitHub User
export const fetchGitHubUser = async (username) => {
    try {
        const response = await axios.get(`${GITHUB_BASE_URL}/${username}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Fetch User Repos
export const fetchUserRepos = async (username) => {
    try {
        const response = await axios.get(`${GITHUB_BASE_URL}/${username}/repos?sort=updated&per_page=6`);
        return response.data;
    } catch (error) {
        throw error;
    }
};