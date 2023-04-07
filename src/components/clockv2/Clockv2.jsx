import './clockv2.css'
import React from 'react'
import { useClock } from '../../hooks/useClock'
import DigitDisplay from './DigitDisplay'

const Clockv2 = () => {
  let cellSize = 20
  let numberOfCells = 10

  // const tz = Math.round( ( cellSize / 2 ) /  Math.tan( Math.PI / numberOfCells ) );
  let tz = 31
  // console.log(tz)

  const {
    date,
    secsDigits,
    minsDigits,
    hoursDigits,
  } = useClock()

  return (
    <div className="clockv2">
      <div className="clockv2__display">
        
        <DigitDisplay number={hoursDigits[0]}/>
        <DigitDisplay number={hoursDigits[1]}/>
        <DigitDisplay index={":"}/>
        <DigitDisplay number={minsDigits[0]}/>
        <DigitDisplay number={minsDigits[1]}/>
        <DigitDisplay index={":"}/>
        <DigitDisplay number={secsDigits[0]}/>
        <DigitDisplay number={secsDigits[1]}/>
        
      </div>
    </div>
  )
}
export default Clockv2