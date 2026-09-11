import Reveal from '../components/Reveal.jsx'
import DestinationCard from '../components/DestinationCard.jsx'
import { destinations, images } from '../data/destinations.js'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="home-hero" id="home">
        <img
          src={images.hundredIslandsHero}
          srcSet={images.hundredIslandsHeroSrcSet}
          sizes="100vw"
          alt="Aerial view of the limestone islands of Hundred Islands National Park, Pangasinan"
          className="home-hero-img"
          width="1600"
          height="1000"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div className="home-hero-overlay" />
        <div className="container home-hero-content">
          <Reveal as="span" className="eyebrow home-hero-eyebrow">Pangasinan, Philippines</Reveal>
          <Reveal as="h1" delay={1}>EXPLORE PANGASINAN</Reveal>
          <Reveal as="p" delay={2} className="home-hero-sub">
            Discover the beauty, culture, history, and unforgettable destinations of Pangasinan, Philippines.
          </Reveal>
          <Reveal as="div" delay={3}>
            <a href="#destinations" className="btn btn-light home-hero-btn">
              Explore Destinations ↓
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------- Introduction ---------- */}
      <section className="section intro">
        <div className="container">
          <div className="intro-grid">
            <Reveal as="div" className="intro-text">
              <span className="eyebrow">Welcome</span>
              <h2>Discover Pangasinan</h2>
              <p>
                Pangasinan is a province in the northern Philippines known for its beautiful
                islands, historic churches, coastal destinations, rich culture, and local
                cuisine. From the famous Hundred Islands to the historic Basilica of Manaoag and
                the coastal attractions of Dagupan City, Pangasinan offers diverse experiences
                for travelers.
              </p>
            </Reveal>
            <Reveal as="div" delay={1} className="intro-media">
              <img
                src={images.quezonIsland}
                srcSet={images.quezonIslandSrcSet}
                sizes="(max-width: 860px) 100vw, 50vw"
                alt="Quezon Island, one of the developed islands within Hundred Islands National Park"
                width="900"
                height="600"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Featured Destinations ---------- */}
      <section className="section featured" id="destinations">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Featured Destinations</span>
            <h2>Places you shouldn't miss</h2>
            <p>Three landmarks that capture the natural beauty, faith, and heritage of Pangasinan.</p>
          </Reveal>
          <div className="grid grid-3">
            {destinations.map((dest, i) => (
              <DestinationCard destination={dest} key={dest.id} delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
