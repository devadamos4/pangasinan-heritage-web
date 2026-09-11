import Reveal from '../components/Reveal.jsx'
import { images } from '../data/destinations.js'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <img
        src={images.bolinaoAlt}
        alt="Coastal scenery near Cape Bolinao, Pangasinan"
        className="about-bg"
        width="900"
        height="600"
        loading="lazy"
        decoding="async"
      />
      <div className="about-overlay" />
      <div className="container about-content">
        <Reveal as="span" className="eyebrow about-eyebrow">About This Guide</Reveal>
        <Reveal as="h2" delay={1}>Plan your trip to Pangasinan</Reveal>
        <Reveal as="p" delay={2}>
          This travel guide highlights three of Pangasinan's most visited landmarks — the
          Hundred Islands, Manaoag Basilica, and Cape Bolinao Lighthouse — so travelers can
          discover the province's natural beauty, religious heritage, and coastal history in one
          place before setting off to explore Alaminos, Manaoag, Bolinao, and beyond.
        </Reveal>
      </div>
    </section>
  )
}
