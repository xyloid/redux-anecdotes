const initialMessage = "Welcome to the Anecdotes";

const reducer = (state = initialMessage, action) => {
  switch (action.type) {
    case "MESSAGE": {
      return action.data.message;
    }
    default:
      return state;
  }
};

export const createMessage = (message, seconds) => {
  console.log("seconds ", seconds);
  return async (dispatch) => {
    dispatch({
      type: "MESSAGE",
      data: { message: `You voted '${message}'` },
    });
    setTimeout(() => {
      dispatch({ type: "MESSAGE", data: { message: "" } });
    }, seconds * 1000);
  };
};

export default reducer;
