import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout, Home, Portfolio, Services, AboutMe } from './containers'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
