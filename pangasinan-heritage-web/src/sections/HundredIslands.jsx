import SectionHero from '../components/SectionHero.jsx'
import FactStrip from '../components/FactStrip.jsx'
import InfoCard from '../components/InfoCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { getDestination } from '../data/destinations.js'
import './DestinationSection.css'

const dest = getDestination('hundred-islands')

export default function HundredIslands() {
  return (
    <section className="dest-section" aria-labelledby="hundred-islands-heading">
      <SectionHero
        id="hundred-islands"
        image={dest.hero}
        srcSet={dest.heroSrcSet}
        alt="Limestone islands and turquoise water at Hundred Islands National Park, Alaminos, Pangasinan"
        eyebrow="Destination 01 · Alaminos City"
        title={dest.name} titleId="hundred-islands-heading"
      />

      <FactStrip famousFor={dest.famousFor} location={dest.location} />

      <div className="section">
        <div className="container">
          <Reveal as="div" className="dest-desc">
            <p>{dest.description}</p>
          </Reveal>

          <Reveal as="div" className="section-head" style={{ marginTop: 64 }}>
            <span className="eyebrow">Things to Do</span>
            <h2>Activities</h2>
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
