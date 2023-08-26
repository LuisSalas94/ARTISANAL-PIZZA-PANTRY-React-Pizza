import axios from "axios";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export const getMenu = async () => {
  try {
    const response = await axios.get(`${API_URL}/menu`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get menu");
  }
};
