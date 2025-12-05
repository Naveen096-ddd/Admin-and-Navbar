import axios from 'axios';
const API_URL = 'http://localhost:3001/users';
const fetchApplications = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    return [];
  }
};
export { fetchApplications };