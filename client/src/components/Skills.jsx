import { skills } from '../data/portfolioData';

export default function Skills() {
  return <section id="skills" className="desk-section desk-skills"><div className="desk-wrap">
    <div className="desk-section-head"><div><div className="desk-kicker">02 / Stuff I know</div><h2 className="desk-heading">Tools on<br />the <em>table.</em></h2></div><p>These are the languages, frameworks, tools, and habits listed on my CV.</p></div>
    <div className="desk-skill-list">{skills.map((skill) => <span className="desk-skill" key={skill.name}>{skill.name}</span>)}</div>
  </div></section>;
}
