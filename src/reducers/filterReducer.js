const reducer = (state="", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.data.pattern;
    default:
      return state;
  }
};

export const setFilter = (pattern) => {
  return {
    type: "SET_FILTER",
    data: { pattern },
  };
};

export default reducer;
