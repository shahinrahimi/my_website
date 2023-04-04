import './home.css'

const Home = () => {
  return (
    <section className="home">
      <h3>Hi There, I'm Shahin</h3>
      <h1>Freelancer Developer</h1>
      <p>I love o code and helping people turn their ideas into life</p>
      <ul className="home__icons">
        <li className="home__icon"><a href="https://twitter.com/Rahimi3d"><i class="fa-brands fa-twitter"></i></a></li>
        <li className="home__icon"><a href="https://github.com/shahinrahimi"><i class="fa-brands fa-github"></i></a></li>
        <li className="home__icon"><a href="https://www.linkedin.com/in/shahinrahimideveloper/"><i class="fa-brands fa-linkedin"></i></a></li>
      </ul>
    </section>
  )
}
export default Home