import { skills } from '../data/portfolioData';

export default function Skills() {
  const categories = ['languages', 'frameworks', 'tools', 'soft skills'];
  return (
    <section id="skills" className="neo-section alt">
      <div className="neo-wrap">
        <div className="section-intro">
          <div><span className="paper-label">02 / The toolbox</span><h2 className="section-title mt-5">Things I<br /><span className="hand-underline">know.</span></h2></div>
          <p>Not a list of buzzwords. These are the tools I have used to make real things, break them, and fix them.</p>
        </div>
        <div className="skill-board">
          {categories.map((category) => (
            <div className="skill-group" key={category}>
              <h3>{category}</h3>
              <div className="skill-list">{skills.filter((skill) => skill.category === category).map((skill) => <span className="skill-chip" key={skill.name}>{skill.name}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
