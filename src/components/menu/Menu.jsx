import './menu.css'
import { Link } from 'react-router-dom'
import { useToggle } from '../../hooks/useToggleMenu'


const Menu = () => {
  const [toggleMenu, setToggleMenu] = useToggle(false)

  const handleToggle = () => {
    setToggleMenu(!toggle)
  }


  return (
    <div className="menu">
    <input className='menu__toggle' type='checkbox' checked={toggleMenu} onChange={handleToggle}/>
      <ul className="menu__list">
        <li className="menu__item"><Link onClick={handleToggle} to="/">Home</Link></li>
        <li className="menu__item"><Link onClick={handleToggle} to="/services">Services</Link></li>
        <li className="menu__item"><Link onClick={handleToggle} to="/portfolio">Portfolio</Link></li>
        <li className="menu__item"><Link onClick={handleToggle} to="/aboutme">About</Link></li>
        <li className="menu__item">
          <button>Let's Build</button>
        </li>
      </ul>

      <div className='menu__btn-container'>
          <div className='menu__btn'></div>
      </div>
      
    </div>
  )
}
export default Menu