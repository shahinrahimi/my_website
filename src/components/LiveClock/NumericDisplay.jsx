import './numericDisplay.css'

import React from 'react';

const NumericDisplay = ({ number }) => {
  
  const marginTop = `-${Number(number) * 50}px`

  return (
    <div className='numeric-display'>
      <div className="numeric-display__display" >
        <ul className="numeric-display__numbers" style={{marginTop: marginTop}}>
          <li className="numeric-display__number">0</li>
          <li className="numeric-display__number">1</li>
          <li className="numeric-display__number">2</li>
          <li className="numeric-display__number">3</li>
          <li className="numeric-display__number">4</li>
          <li className="numeric-display__number">5</li>
          <li className="numeric-display__number">6</li>
          <li className="numeric-display__number">7</li>
          <li className="numeric-display__number">8</li>
          <li className="numeric-display__number">9</li>
        </ul>
      </div>
    </div>
  )
}
export default NumericDisplay