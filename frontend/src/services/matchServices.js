import axios from 'axios';

const baseUrl = '/api/matches';

const getAllMatches = async () => {
  const res = await axios.get(baseUrl);
  return res.data.matches;
};

export default {
  getAllMatches,
};
