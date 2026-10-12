import { timeline } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="timeline" className="neo-section">
      <div className="neo-wrap">
        <div className="section-intro">
          <div><span className="paper-label">04 / The route here</span><h2 className="section-title mt-5">A few<br /><span className="hand-underline">milestones.</span></h2></div>
          <p>School, simulations, and a lot of time spent asking why the code did that.</p>
        </div>
        <div className="timeline-neo">
          {timeline.map((item) => (
            <article className="timeline-item-neo" key={item.id}>
              <div className="timeline-date">{item.year}</div>
              <div className="timeline-card">
                <h3>{item.title}</h3>
                <div className="company">{item.company}</div>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
