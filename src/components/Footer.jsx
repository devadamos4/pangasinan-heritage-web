import './Footer.css'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#manaoag', label: 'Manaoag' },
  { href: '#cape-bolinao', label: 'Cape Bolinao Lighthouse' },
  { href: '#about', label: 'About' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Explore Pangasinan</h3>
          <p>Discover the beauty, culture, history, and destinations of Pangasinan, Philippines.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="footer-meta">
          <span>Pangasinan, Philippines 🇵🇭</span>
        </div>
      </div>
      <p className="footer-copyright">© 2026 Explore Pangasinan. All Rights Reserved.</p>
    </footer>
  )
}
