const initialMessage = "Welcome to the Anecdotes";

const reducer = (state = initialMessage, action) => {
  switch (action.type) {
      case 'MESSAGE':{
            return action.data.message;
      }
    default:
      return state;
  }
};

export const createMessage=(message)=>{
    return {
        type:'MESSAGE',
        data:{
            message:message
        }
    }
}

export default reducer;
