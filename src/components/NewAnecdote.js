import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const NewAnecdote = (props) => {
    const dispatch = useDispatch()
    const addAnecdote = (event) => {
        event.prevenDefault()
        console.log(createAnecdote(event.target.content.value))
        dispatch(createAnecdote(event.target.content.value))
        event.target.content.value = ''
    };

  return (
    <form onSubmit={addAnecdote}>
      <input name="content" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewAnecdote;
