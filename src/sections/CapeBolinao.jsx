import SectionHero from '../components/SectionHero.jsx'
import FactStrip from '../components/FactStrip.jsx'
import InfoCard from '../components/InfoCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { getDestination } from '../data/destinations.js'
import './DestinationSection.css'

const dest = getDestination('cape-bolinao')

export default function CapeBolinao() {
  return (
    <section className="dest-section" aria-labelledby="cape-bolinao-heading">
      <SectionHero
        id="cape-bolinao"
        image={dest.hero}
        srcSet={dest.heroSrcSet}
        alt="Cape Bolinao Lighthouse overlooking the coastline in Bolinao, Pangasinan"
        eyebrow="Destination 03 · Bolinao"
        title={dest.name} titleId="cape-bolinao-heading"
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

          <div className="experience" style={{ marginTop: 72 }}>
            <Reveal as="div" className="experience-text">
              <span className="eyebrow">On-Site</span>
              <h2>{dest.experienceTitle}</h2>
              <p>{dest.experience}</p>
            </Reveal>
            <Reveal as="div" delay={1} className="experience-media">
              <img
                src={dest.card}
                srcSet={dest.cardSrcSet}
                sizes="(max-width: 860px) 100vw, 50vw"
                alt="Coastal view from Cape Bolinao Lighthouse, Bolinao, Pangasinan"
                width="900"
                height="600"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
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
