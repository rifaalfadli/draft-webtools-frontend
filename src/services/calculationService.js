import axios from "axios";

export const calculateData = async (payload) => {
  const response = await axios.post(
    "http://localhost:3001/calculations",
    payload,
  );
  return response.data;
};
