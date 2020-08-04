import anecdoteService from "../services/anecdotes";

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const data = await anecdoteService.createNew(content);
    dispatch({
      type: "NEW_ANECDOTE",
      data,
    });
  };
};

export const voteAnecdote = (id) => {
  return {
    type: "VOTE",
    data: { id },
  };
};

export const initAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    });
  };
};

// const initialState = anecdotesAtStart.map(asObject);

const reducer = (state = [], action) => {
  console.log("state now: ", state);
  console.log("action", action);
  switch (action.type) {
    case "NEW_ANECDOTE": {
      console.log("data ", action.data);
      return state.concat(action.data);
    }
    case "VOTE": {
      const id = action.data.id;
      const voted = state.find((a) => a.id === id);
      const updated = {
        ...voted,
        votes: voted.votes + 1,
      };
      return state
        .map((a) => (a.id === id ? updated : a))
        .sort((a, b) => b.votes - a.votes);
    }
    case "INIT_ANECDOTES":
      return action.data;
    default:
      return state;
  }
};

export default reducer;
