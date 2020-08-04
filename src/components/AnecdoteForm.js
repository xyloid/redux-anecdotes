import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch();
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = "";
    const res = await anecdoteService.createNew(content)
    dispatch(createAnecdote(res));
    
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="content" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
