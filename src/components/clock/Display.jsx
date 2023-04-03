import './display.css'

import React from 'react';

const Display = ({ number }) => {
  
  const marginTop = `-${Number(number) * 50}px`

  return (
    <div className='display'>
      <div className="display__display" >
        <ul className="display__numbers" style={{marginTop: marginTop}}>
          <li className="display__number">0</li>
          <li className="display__number">1</li>
          <li className="display__number">2</li>
          <li className="display__number">3</li>
          <li className="display__number">4</li>
          <li className="display__number">5</li>
          <li className="display__number">6</li>
          <li className="display__number">7</li>
          <li className="display__number">8</li>
          <li className="display__number">9</li>
        </ul>
      </div>
    </div>
  )
}
export default Display