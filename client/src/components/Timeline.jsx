import { timeline } from '../data/portfolioData';

export default function Timeline() {
  return <section id="timeline" className="desk-section"><div className="desk-wrap">
    <div className="desk-section-head"><div><div className="desk-kicker">04 / The route here</div><h2 className="desk-heading">A few<br /><em>milestones.</em></h2></div><p>University, job simulations, and the places where I picked up a useful lesson.</p></div>
    <div className="desk-timeline">{timeline.map((item) => <article className="desk-timeline-item" key={item.id}><div className="desk-timeline-date">{item.year}</div><div className="desk-timeline-card"><h3>{item.title}</h3><strong>{item.company}</strong><p>{item.description}</p></div></article>)}</div>
  </div></section>;
}
