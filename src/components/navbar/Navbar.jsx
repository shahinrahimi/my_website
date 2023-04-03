
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__profile">
        <div className="profile__image">
        </div>
        <div className="profile__name">{` { ${"shahin"} } `}</div>
      </div>

      <ul className="navbar__links">
        <li className="navbar__link"><a href="#home">Home</a></li>
        <li className="navbar__link"><a href="#services">Services</a></li>
        <li className="navbar__link"><a href="#portfolio">Portfolio</a></li>
        <li className="navbar__link"><a href="#about">About Me</a></li>
        <li className="navbar__link navbar__link--btn"><a href="#build">Let's Build</a></li>
      </ul>

    </nav>
  )
}

export default Navbar