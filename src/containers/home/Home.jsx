import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Home = () => {
  return (
    <section className="home">
      <h3>Hi There, I'm Shahin</h3>
      <h1>Freelancer Developer</h1>
      <p>I love o code and helping people turn their ideas into life</p>
      <ul className="home__icons">
        <li className="home__icon"><a href="https://twitter.com/Rahimi3d"><FontAwesomeIcon icon={faTwitter}/></a></li>
        <li className="home__icon"><a href="https://github.com/shahinrahimi"><FontAwesomeIcon icon={faGithub}/></a></li>
        <li className="home__icon"><a href="https://www.linkedin.com/in/shahinrahimideveloper/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
      </ul>
    </section>
  )
}
export default Home