import './menu.css'

const Menu = () => {
  return (
    <div className="menu">
      <input class="menu__toggle" id="menu-toggle" type="checkbox"/>
        
      <ul class="menu__list">
        <li class="menu__item"><a href="#home">Home</a></li>
        <li class="menu__item"><a href="#services">Services</a></li>
        <li class="menu__item"><a href="#portfolio">Portfolio</a></li>
        <li class="menu__item"><a href="#about">About Me</a></li>
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