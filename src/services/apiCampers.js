import axios from "axios";

axios.defaults.baseURL = "https://65a97cf5219bfa3718695755.mockapi.io";

export const fetchCampers = async () => {
  const { data } = await axios.get(`campers`);
  return data;
};
