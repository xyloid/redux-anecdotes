import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";

const Ancedote = ({ anecdote, handleClick }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  );
};

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector((state) => state.anecdotes);

  const vote = (id) => {
    console.log("vote", id);
    dispatch(voteAnecdote(id));
  };

  return (
    <ul>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((a) => (
          <Ancedote
            key={a.id}
            anecdote={a}
            handleClick={() => {
              vote(a.id);
            }}
          />
        ))}
    </ul>
  );
};

export default AnecdoteList;
