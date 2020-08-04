import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const vote = async (id)=>{
    const res = await axios.get(`${baseUrl}/${id}`)
    console.log('get by id', res)
    let anecdote = res.data
    const newVotes = {...anecdote,votes:anecdote.votes + 1};
    const response = await axios.put(`${baseUrl}/${id}`,newVotes)
    return response
}

export default { getAll, createNew, vote };
