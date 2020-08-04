import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
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

const AnecdoteList = (props) => {
  const dispatch = useDispatch();
  console.log("log props", props);
  //   const anecdotes = useSelector((state) => state.anecdotes);
  //   const pattern = useSelector((state)=>state.pattern)
  const anecdotes = () => {
    if (props.filter.trim() === "") {
      return props.anecdotes;
    } else {
      return props.anecdotes.filter((a) => a.content.includes(props.filter));
    }
  };

  const vote = (a) => {
    console.log("vote", a.id);
    dispatch(voteAnecdote(a.id));

    dispatch(createMessage(a.content, 3));
  };

  return (
    <ul>
      {anecdotes()
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

const mapStateToProps = (state) => {
  // sometimes it is useful to console log from mapStateToProps
  console.log("log state", state);
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  };
};

// export default AnecdoteList;
const ConnectedAnecdoteList = connect(mapStateToProps)(AnecdoteList);
export default ConnectedAnecdoteList;
