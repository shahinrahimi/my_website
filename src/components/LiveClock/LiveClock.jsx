import React from "react"
import NumericDisplay from "./NumericDisplay"
import './liveClock.css'

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

class LiveClock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }

  }

  // whenever runs after the component output has been rendered to the DOM.
  componentDidMount(){
    //console.log('LiveClock mounted.')
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  // whenever the DOM produced by the Clock is removed.
  componentWillUnmount(){
    //console.log('LiveClock will mounted.')
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
          <li><NumericDisplay number={hoursDigits[0]}/></li>
          <li><NumericDisplay number={hoursDigits[1]}/></li>
          <li>:</li>
          {/* mins */}
          <li><NumericDisplay number={minsDigits[0]}/></li>
          <li><NumericDisplay number={minsDigits[1]}/></li>
          <li>:</li>
          {/* secs */}
          <li><NumericDisplay number={secsDigits[0]}/></li>
          <li><NumericDisplay number={secsDigits[1]}/></li>
        </ul>
      </div>
    )
  }
}

export default LiveClock