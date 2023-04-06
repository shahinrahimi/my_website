
import { Tag } from '../../components'

import './card.css'
const Card = ({ service, image }) => {

  
  let content 
  if (!service || !image){
    content = <p>loading...</p>
  } else {
    const {
      title,
      brief,
      tags
    } = service
    const tagsContent = tags.map(tag => {
      return (
        <li className="card__tag" key={tag}>
          <Tag name={tag} />
        </li>
      )
    })
    content = (
      <>
        <div className="card__image">
          <img src={image} alt={title} />
        </div>
        <div className="card__body"> 
          <div className="card__content">
            <div className="card__title">
              <h2>{title}</h2>
            </div>
            <div className="card__brief">
              <p>{brief}</p>
            </div>
          </div>
          <div className="card__footer">
            <ul className="card__tags">
              {tagsContent}
            </ul>
          </div>
          
          
        </div>
        
      </>
    )
    
  }


  return (
    <div className="card">
      {content}
    </div>
  )
}
export default Card