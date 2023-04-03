import React from "react"
import Display from "./Display"
import './clock.css'

const getTwoDigit = (amount) => {
  const twoDigit = amount.toLocaleString(
    'en-Us',
      {
        minimumIntegerDigits:2,
        useGrouping: false
      }
  )
  return [twoDigit[0], twoDigit[1]]
}

class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }

  }

  // whenever runs after the component output has been rendered to the DOM.
  componentDidMount(){
    //console.log('Clock mounted.')
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  // whenever the DOM produced by the Clock is removed.
  componentWillUnmount(){
    //console.log('Clock will mounted.')
    clearInterval(this.timerID)
  }

  tick() {
    //console.log('tick')
    this.setState({ date: new Date() })
  }

  render(){
    const date = this.state.date
    const secsDigits = getTwoDigit(date.getSeconds())
    const minsDigits = getTwoDigit(date.getMinutes())
    const hoursDigits = getTwoDigit(date.getHours())

    return (
      <div className="clock">
        <ul className="clock__screen">
          {/* hours */}
          <li><Display number={hoursDigits[0]}/></li>
          <li><Display number={hoursDigits[1]}/></li>
          <li>:</li>
          {/* mins */}
          <li><Display number={minsDigits[0]}/></li>
          <li><Display number={minsDigits[1]}/></li>
          <li>:</li>
          {/* secs */}
          <li><Display number={secsDigits[0]}/></li>
          <li><Display number={secsDigits[1]}/></li>
        </ul>
      </div>
    )
  }
}

export default Clock