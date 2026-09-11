import { useEffect, useRef, useState } from 'react'

/**
 * Wraps children and adds a "reveal" fade/slide-up animation the first time
 * the element scrolls into view. Pass `as` to change the wrapper tag and
 * `delay` (1-3) to stagger multiple items in a grid.
 */
export default function Reveal({ children, as: Tag = 'div', delay, className = '', ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay ? ` reveal-delay-${delay}` : ''

  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? ' in-view' : ''}${delayClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  )
}
