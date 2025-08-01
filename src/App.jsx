import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Fractional from './pages/Fractional'
import SlowLiving from './pages/SlowLiving'
import TheUndoing from './pages/TheUndoing'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fractional" element={<Fractional />} />
          <Route path="/slow-living" element={<SlowLiving />} />
          <Route path="/the-undoing" element={<TheUndoing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
