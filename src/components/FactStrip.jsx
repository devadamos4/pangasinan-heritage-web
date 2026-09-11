import Reveal from './Reveal.jsx'
import './FactStrip.css'

export default function FactStrip({ famousFor, location }) {
  return (
    <div className="fact-strip">
      <div className="container">
        <div className="grid grid-2">
          <Reveal as="div" className="fact-block">
            <span className="fact-label">✨ Famous For</span>
            <p>{famousFor}</p>
          </Reveal>
          <Reveal as="div" delay={1} className="fact-block">
            <span className="fact-label">📍 Location</span>
            <p>{location}</p>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
