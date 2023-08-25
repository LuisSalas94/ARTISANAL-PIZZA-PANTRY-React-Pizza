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

export const getOrder = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/order/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get order");
  }
};

/* export const createOrder = async (newOrder) => {
  try {
    const response = await axios.post(`${API_URL}/order`, newOrder, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create order");
  }
}; */

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export const updateOrder = async (id, updateObj) => {
  try {
    await axios.patch(`${API_URL}/order/${id}`, updateObj, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update order");
  }
};
