import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { createMessage } from "../reducers/notificationReducer";

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

  //   const anecdotes = useSelector((state) => state.anecdotes);
  //   const pattern = useSelector((state)=>state.pattern)
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter.trim() === "") {
      return anecdotes;
    } else {
      return anecdotes.filter((a) => a.content.includes(filter));
    }
  });

  const vote = (a) => {
    console.log("vote", a.id);
    dispatch(voteAnecdote(a.id));

    dispatch(createMessage(a.content, 3));
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
              vote(a);
            }}
          />
        ))}
    </ul>
  );
};

export default AnecdoteList;
