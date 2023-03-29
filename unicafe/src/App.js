import { useState } from 'react'

const StatisticLine = props => <tr><td>{props.text}:</td> <td>{props.value}</td></tr>
const Statistics = props => {
  const total = TotalCount(props.good, props.neutral, props.bad)

  return( 
    total > 0 ? (
      <div>
        <table>
          <h2>Statistics:</h2>
          <tbody>
        <StatisticLine text="Good" value={props.good} /> 
        <StatisticLine text="Neutral" value={props.neutral} /> 
        <StatisticLine text="Bad" value={props.bad} /> 
        <StatisticLine text="Total" value={TotalCount(props.good, props.neutral, props.bad)} />
        <StatisticLine text="Average" value={Average(TotalCount(props.good, props.neutral, props.bad), props.good, props.bad)} /> 
        <StatisticLine text="Positive" value={Positive(TotalCount(props.good, props.neutral, props.bad), props.good) + "%"} /> 
      </tbody>
      </table>
      </div>
    ) : (<p>No feedback given</p>)
    )

}

const Display = props => <div>{props.value}</div>

const TotalCount = (good, neutral, bad) => {
  const Total = good + neutral + bad
  return Total
}

const Average = (Total, good, bad) => {

  const avg =  (good - bad) / Total

  return avg
}
const Positive = (Total, good) => {
  const Perce = good / Total * 100
  return Perce

}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>

)
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App