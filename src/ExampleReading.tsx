import { useEffect, useRef } from 'react'
import './example-reading.css'

const insights = [
  ['Today’s tone', 'Easy warmth with room for an honest conversation.'],
  ['Where you flow', 'Emotional timing and shared curiosity.'],
  ['Watch for', 'Reading too much into a short reply.'],
  ['Best moment to connect', 'Later today, when the pace feels less rushed.'],
]
const categories = ['Communication rhythm', 'Emotional chemistry', 'Friction points', 'Best move today', 'What not to say', 'Connection forecast']

export default function ExampleReading({ onOpenBirthdays }: { onOpenBirthdays: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const content = contentRef.current
    if (!content || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    content.dataset.reveal = 'pending'
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        content.dataset.reveal = 'visible'
        observer.disconnect()
      }
    }, { threshold: .1 })
    observer.observe(content)
    return () => {
      observer.disconnect()
      delete content.dataset.reveal
    }
  }, [])

  return (
    <section className="example-reading" aria-labelledby="example-heading">
      <div className="example-content" ref={contentRef}>
        <header className="example-intro">
          <p className="example-eyebrow">A GLIMPSE OF YOUR DAILY READ</p>
          <h2 id="example-heading">Your connection has its own weather.</h2>
          <p className="example-support">DoWeClick turns two birthdays into a fresh daily snapshot of where you flow, where you may clash, and when connection comes easiest.</p>
        </header>
        <article className="example-card" aria-labelledby="example-pair" aria-describedby="example-disclaimer">
          <div className="example-card-header">
            <p>EXAMPLE DAILY READING</p>
            <span aria-hidden="true">A moment in your rhythm</span>
          </div>
          <div className="example-card-body">
            <div className="example-summary">
              <h3 id="example-pair">Maya <span>+</span> Alex</h3>
              <p className="example-score">86<span>%</span></p>
              <p className="example-sync"><span aria-hidden="true" />IN SYNC TODAY</p>
              <div className="example-weather" aria-hidden="true"><span /><span /><span /></div>
              <p className="example-score-note">A little more ease.<br />A little more possibility.</p>
            </div>
            <dl className="example-insights">
              {insights.map(([title, description], index) => (
                <div key={title}>
                  <dt><span aria-hidden="true">0{index + 1}</span>{title}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="example-teaser">
            <p>There’s more to your rhythm</p>
            <ul aria-label="More categories in a daily reading">
              {categories.map((category) => <li key={category}>{category}<span aria-hidden="true">↗</span></li>)}
            </ul>
          </div>
          <footer className="example-card-footer">
            <p id="example-disclaimer">An illustrative example.<br />Not a calculated result for you.</p>
            <a className="match-button" href="#compatibility" onClick={onOpenBirthdays}>See Your Daily Match <span aria-hidden="true">↗</span></a>
          </footer>
        </article>
      </div>
    </section>
  )
}
