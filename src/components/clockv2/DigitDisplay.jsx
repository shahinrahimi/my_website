import { useState, useEffect } from 'react'
import './digitDisplay.css'
// it is a carousel
const DigitDisplay = ({ number, index='0'}) => {
  const [counter, setCounter] = useState(null)
  useEffect(()=>{
    if (counter === null){
      return setCounter(parseInt(number))
    }
    setCounter(counter => counter+1)
  },[number])

  let tz = 31
  let style = {
    transform: `translateZ(-${tz}px) rotateX(${0}deg) `
  }
  // Change Style if counter is not null
  if (counter){
    style = {
      transform: `translateZ(-${tz}px) rotateX(-${counter*36}deg) `
    }

    const cells = document.querySelectorAll('.carousel__cell')
    for (let i=0; i<cells.length; i++){
      const cell = cells[0]
      if (i===parseInt(number)){
        cell.style.opacity = 1
      }else{
        cell.style.opacity = 0
      }
    }
    console.log(cells)
  }
  return (
    <div className="digitDisplay">
      <div className="digitDisplay__carousel" style={style}>
        <div className="carousel__cell" ><p>{index}</p></div>
        <div className="carousel__cell" ><p>{1}</p></div>
        <div className="carousel__cell" ><p>{2}</p></div>
        <div className="carousel__cell" ><p>{3}</p></div>
        <div className="carousel__cell" ><p>{4}</p></div>
        <div className="carousel__cell" ><p>{5}</p></div>
        <div className="carousel__cell" ><p>{6}</p></div>
        <div className="carousel__cell" ><p>{7}</p></div>
        <div className="carousel__cell" ><p>{8}</p></div>
        <div className="carousel__cell" ><p>{9}</p></div>
      </div>
    </div>
  )
}

export default DigitDisplay