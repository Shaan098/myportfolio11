import { achievements, certificates, stats } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="neo-section">
      <div className="neo-wrap">
        <div className="section-intro">
          <div><span className="paper-label">01 / A little context</span><h2 className="section-title mt-5">The person<br />behind the <span className="hand-underline">pixels.</span></h2></div>
          <p>I am a Computer Science student at Lovely Professional University. I build full-stack projects because the best way to learn a system is to make it work.</p>
        </div>
        <div className="about-grid">
          <aside className="about-note"><h3>Currently<br />in Punjab.</h3><p>Learning in public. Writing code that people can actually use. Still very happy when a bug is obvious.</p></aside>
          <div>
            <div className="about-copy">
              <p>My work sits between a clear frontend and a dependable backend. I have built collaborative editing, sprint planning, and online judging tools with React, Node.js, Django, Express.js, MongoDB, and REST APIs.</p>
              <p>I care about the details that make software feel calm: useful errors, predictable flows, and interfaces that do not get in the way.</p>
            </div>
            <div className="stats-neo">{stats.map((stat) => <div className="stat-neo" key={stat.label}><div className="stat-value">{stat.value}</div><div className="stat-label">{stat.label}</div></div>)}</div>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div><h3 className="text-2xl font-syne mb-4">Certificates</h3>{certificates.map((item) => <div className="mb-4" key={item.title}><strong>{item.title}</strong><div className="text-sm">{item.issuer} · {item.date}</div></div>)}</div>
              <div><h3 className="text-2xl font-syne mb-4">Recent wins</h3><ul className="list-disc pl-5 space-y-2">{achievements.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
