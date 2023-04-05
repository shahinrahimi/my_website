import { Menu, Avatar } from '../../components'

import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__avatar">
        <Avatar />
      </div>
      <div className="navbar__menu">
        <Menu />
      </div>
    </nav>
  )
}

export default Navbar