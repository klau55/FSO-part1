import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  function randomAnecdote(max) {
    return Math.floor(Math.random() * max);
  }

  
  console.log(votes)

  const vote = () => {

    const copy = [...votes]
// increment the value in position 2 by one
    copy[selected] += 1   
    setVotes(copy)

  }
  const top = votes.indexOf(Math.max(...votes));
  console.log(top, "top")


  return (
    <div>
      <h1>Anecdote of the day:</h1>
      {anecdotes[selected]}
      <br />
      Has {votes[selected]} votes
      <br />
      <Button handleClick={() => vote() } text="vote"/>       
      <Button handleClick={() => setSelected(randomAnecdote(anecdotes.length)) } text="next anecdote"/>  
      <br />
      <h1>Anecdote with most votes:</h1>
      {anecdotes[top]}
      <br />
      has {votes[top]} votes
    </div>
  )
}

export default App;
