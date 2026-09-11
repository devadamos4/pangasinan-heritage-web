import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './sections/Home.jsx'
import HundredIslands from './sections/HundredIslands.jsx'
import Manaoag from './sections/Manaoag.jsx'
import CapeBolinao from './sections/CapeBolinao.jsx'
import About from './sections/About.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Home />
        <HundredIslands />
        <Manaoag />
        <CapeBolinao />
        <About />
      </main>
      <Footer />
    </>
  )
}
