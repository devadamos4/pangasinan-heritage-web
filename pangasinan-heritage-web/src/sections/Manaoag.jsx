import SectionHero from '../components/SectionHero.jsx'
import FactStrip from '../components/FactStrip.jsx'
import InfoCard from '../components/InfoCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { getDestination } from '../data/destinations.js'
import './DestinationSection.css'

const dest = getDestination('manaoag')

export default function Manaoag() {
  return (
    <section className="dest-section" aria-labelledby="manaoag-heading">
      <SectionHero
        id="manaoag"
        image={dest.hero}
        srcSet={dest.heroSrcSet}
        alt="Facade of the Minor Basilica of Our Lady of the Rosary of Manaoag, Pangasinan"
        eyebrow="Destination 02 · Manaoag"
        title={dest.name} titleId="manaoag-heading"
      />

      <FactStrip famousFor={dest.famousFor} location={dest.location} />

      <div className="section">
        <div className="container">
          <Reveal as="div" className="dest-desc">
            <p>{dest.description}</p>
          </Reveal>

          <Reveal as="div" className="section-head" style={{ marginTop: 64 }}>
            <span className="eyebrow">Highlights</span>
            <h2>What makes it special</h2>
          </Reveal>
          <div className="grid grid-6">
            {dest.activities.map((a, i) => (
              <InfoCard key={a.label} icon={a.icon} label={a.label} delay={(i % 3) + 1} />
            ))}
          </div>

          <Reveal as="div" className="why-visit">
            <h2>{dest.whyVisitTitle}</h2>
            <p>{dest.whyVisit}</p>
          </Reveal>

          <a href="#destinations" className="btn back-btn">← Back to Destinations</a>
        </div>
      </div>
    </section>
  )
}
