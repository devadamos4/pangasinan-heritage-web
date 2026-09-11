import './SectionHero.css'

export default function SectionHero({ image, srcSet, alt, eyebrow, title, id, titleId }) {
  return (
    <div className="dest-hero" id={id}>
      <img
        src={image}
        srcSet={srcSet}
        sizes="100vw"
        alt={alt}
        width="1600"
        height="1000"
        loading="lazy"
        decoding="async"
        className="dest-hero-img"
      />
      <div className="dest-hero-overlay" />
      <div className="container dest-hero-content">
        {eyebrow && <span className="eyebrow dest-hero-eyebrow">{eyebrow}</span>}
        <h1 id={titleId}>{title}</h1>
      </div>
    </div>
  )
}
