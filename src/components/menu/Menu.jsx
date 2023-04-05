import './menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
      <input class="menu__toggle" id="menu-toggle" type="checkbox"/>
        
      <ul class="menu__list">
        <li class="menu__item"><Link to="/">Home</Link></li>
        <li class="menu__item"><Link to="/services">Services</Link></li>
        <li class="menu__item"><Link to="/portfolio">Portfolio</Link></li>
        <li class="menu__item"><Link to="/aboutme">About</Link></li>
        <li class="menu__item">
          <button>Let's Build</button>
        </li>
      </ul>

      <div class='menu__btn-container'>
          <div class='menu__btn'></div>
      </div>
      
    </div>
  )
}
export default Menu