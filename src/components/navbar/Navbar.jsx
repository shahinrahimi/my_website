import Menu from './Menu'
import Profile from './Profile'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__profile">
        <Profile />
      </div>
      <div className="navbar__menu">
        <Menu />
      </div>
    </nav>
  )
}

export default Navbar