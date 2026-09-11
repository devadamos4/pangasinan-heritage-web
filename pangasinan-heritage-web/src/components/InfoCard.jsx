import Reveal from './Reveal.jsx'
import './InfoCard.css'

export default function InfoCard({ icon, label, delay }) {
  return (
    <Reveal as="div" delay={delay} className="info-card">
      <span className="info-card-icon" aria-hidden="true">{icon}</span>
      <span className="info-card-label">{label}</span>
    </Reveal>
  )
}
