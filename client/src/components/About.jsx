import { achievements, certificates, stats } from '../data/portfolioData';

export default function About() {
  return <section id="about" className="desk-section"><div className="desk-wrap">
    <div className="desk-section-head"><div><div className="desk-kicker">01 / Why I do this</div><h2 className="desk-heading">I like seeing<br />an idea <em>work.</em></h2></div><p>Most of my learning happens when I turn a rough idea into something another person can use. The rough edges usually teach me the most.</p></div>
    <div className="desk-about"><aside className="desk-about-card"><h3>Notes from the desk</h3><p>I am studying Computer Science at Lovely Professional University. I like building full-stack projects and understanding what happens between the button and the database.</p><div className="photo-placeholder">[ADD PHOTO HERE]</div></aside>
      <div><p className="desk-copy">I have built a real-time collaborative editor, a sprint and bug tracker, and an online judge platform. I use React on the frontend and Node.js or Django behind it. I have also worked with JWT, WebSockets, CRDTs, REST APIs, and MongoDB.</p>
        <div className="desk-stats">{stats.map((stat) => <div className="desk-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
        <div className="desk-cert-grid"><div><h3>Certificates</h3>{certificates.map((item) => <p key={item.title}><strong>{item.title}</strong><br /><span className="text-sm text-[#766957]">{item.issuer} · {item.date}</span></p>)}</div><div><h3>Things I have kept up</h3><ul className="desk-list">{achievements.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
      </div>
    </div>
  </div></section>;
}
