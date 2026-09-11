import Reveal from './Reveal.jsx'
import './DestinationCard.css'

export default function DestinationCard({ destination, delay }) {
  return (
    <Reveal as="div" delay={delay} className="dest-card">
      <div className="dest-card-media">
        <img
          src={destination.card}
          srcSet={destination.cardSrcSet}
          sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
          alt={`${destination.name}, Pangasinan`}
          width="900"
          height="600"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="dest-card-body">
        <h3>{destination.name}</h3>
        <p className="dest-card-desc">{destination.shortDesc}</p>
        <p className="dest-card-location">📍 {destination.location}</p>
        <a href={`#${destination.id}`} className="btn btn-primary">
          Discover More →
        </a>
      </div>
    </Reveal>
  )
}
