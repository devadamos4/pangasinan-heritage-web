import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#manaoag', label: 'Manaoag' },
  { href: '#cape-bolinao', label: 'Cape Bolinao Lighthouse' },
  { href: '#about', label: 'About' },
]

const sectionIds = ['home', 'hundred-islands', 'destinations', 'manaoag', 'cape-bolinao', 'about']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      setScrolled(window.scrollY > 24)

      // Determine which section is currently most in view for nav highlighting
      let current = 'home'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id
        }
      }
      setActive(current)
    }

    // Batch layout reads into one per animation frame instead of running a
    // full getBoundingClientRect() pass on every single scroll event, which
    // forces the browser to do extra synchronous layout work while scrolling.
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleLinkClick() {
    setMenuOpen(false)
  }

  function isActive(href) {
    const id = href.replace('#', '')
    if (id === 'destinations') return active === 'destinations' || active === 'hundred-islands'
    return active === id
  }

  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="container nav-inner">
        <a href="#home" className="nav-brand" onClick={handleLinkClick}>
          <span className="nav-brand-mark">🌴</span>
          <span className="nav-brand-text">Explore Pangasinan</span>
        </a>

        <nav
          id="primary-navigation"
          className={'nav-links' + (menuOpen ? ' open' : '')}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={'nav-link' + (isActive(link.href) ? ' active' : '')}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={'nav-burger' + (menuOpen ? ' open' : '')}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
