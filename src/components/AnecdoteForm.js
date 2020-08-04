import React from "react";
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = "";
    props.createAnecdote(content);
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

const ConnectedForm = connect(null,{createAnecdote})(AnecdoteForm)

export default ConnectedForm;
