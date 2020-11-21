import axios from 'axios';

const baseUrl = '/api/matches';

const getAllMatches = async () => {
  const res = await axios.get(baseUrl);
  return res.data.matches;
};

const addMatch = async (match) => {
  const res = await axios.post(baseUrl, match);
  return res.data.match;
};

const editMatch = async (match) => {
  const id = match._id;
  delete match._id;
  const res = await axios.put(`${baseUrl}/${id}`, match);
  return res.data.match;
};

const deleteMatch = async (id) => {
  const res = await axios.delete(`${baseUrl}/${id}`);
  return res.data.msg;
};

export default {
  getAllMatches,
  deleteMatch,
  addMatch,
  editMatch,
};
