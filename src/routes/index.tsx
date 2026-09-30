import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Minus, Play } from "lucide-react";
import { ArrowLink, coachingAreas, Eyebrow, PageShell, processSteps } from "../components/site-shell";

const hero = "/images/john-nicholson-hero.webp";
const heroHd = "/images/jn-snooker-hero-hd.png";
const logo = "/images/jn-snooker-logo.png";
const portrait = "/images/john-nicholson-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Snooker Coach Darlington | John Nicholson Snooker Coaching" },
      { name: "description", content: "Looking for snooker coaching in Darlington? Improve cue action, positional play, break building and match confidence with John Nicholson Snooker Coaching." },
      { property: "og:title", content: "Snooker Coach Darlington | John Nicholson Snooker Coaching" },
      { property: "og:description", content: "Practical one-to-one snooker coaching focused on technique, consistency and smarter match play." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "preload", as: "image", href: heroHd, fetchPriority: "high" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org", "@graph":[{ "@type":"Person", name:"John Nicholson", jobTitle:"Snooker Coach", areaServed:["Darlington","County Durham","North East England"] },{ "@type":"Service", name:"One-to-one snooker coaching", provider:{ "@type":"Person", name:"John Nicholson" }, areaServed:"Darlington, County Durham and North East England" },{ "@type":"WebSite", name:"John Nicholson Snooker Coaching" }] }) }]
  }), component: HomePage,
});

const disciplines = [
  ["01", "Cue action", "Develop a smoother, repeatable delivery and stronger fundamentals."],
  ["02", "Positional play", "Improve cue-ball control, angles and your ability to stay in position."],
  ["03", "Tactical play", "Develop better safety choices, shot selection and match awareness."],
  ["04", "Match confidence", "Build routines that help your technique survive pressure."],
];
const players = [
  ["Beginner", "Build correct fundamentals from the beginning and understand how the game works."],
  ["Improving player", "Identify weaknesses, improve consistency and develop smarter practice habits."],
  ["Competitive player", "Sharpen match play, break building, tactical awareness and decision making."],
];

const comparisonRows = [
  ["Personal assessment", false, false, true],
  ["Advice shaped around your game", false, false, true],
  ["Immediate, practical feedback", false, true, true],
  ["Clear drills to take away", false, false, true],
  ["Support for technique and match play", false, true, true],
];

const sessionOutcomes = [
  ["01", "A clearer diagnosis", "Understand which habits are limiting your consistency and why they happen."],
  ["02", "Focused adjustments", "Work on a small number of practical changes rather than rebuilding everything."],
  ["03", "Purposeful practice", "Leave with drills and routines that make your time at the table more productive."],
];

const coachingValues = [
  ["Observe", "See what is really happening in your setup, delivery and decisions."],
  ["Simplify", "Turn complex issues into a small number of changes you can trust."],
  ["Repeat", "Build a practice method that makes better habits feel natural."],
  ["Compete", "Carry your technique and decision-making into match conditions."],
];

const faqs = [
  ["01", "Is this for competitive players?", "Yes. Sessions are built for players who want clearer technique, smarter decisions and a game that holds up when it matters."],
  ["02", "Can beginners still book?", "Absolutely. Coaching starts from where you are now — first principles through to match-ready habits."],
  ["03", "What should I bring?", "Your cue if you have one, and a clear idea of the part of your game you most want to improve."],
  ["04", "Will I leave with practice?", "Yes. Every session ends with focused, repeatable work you can continue between visits."],
  ["05", "Where do sessions take place?", "Coaching is based in Darlington, serving players across County Durham and the wider North East."],
];

function HomePage() { return <PageShell>
  <section className="home-hero" aria-label="John Nicholson professional snooker coaching">
    <img src={heroHd} alt="John Nicholson professional snooker coaching" width="1440" height="810" fetchPriority="high" decoding="async" />
  </section>
  <div className="hero-action-bar"><div className="container"><p>One-to-one coaching · Darlington · County Durham · North East</p><div><ArrowLink to="/book-snooker-coaching">Book a session</ArrowLink><ArrowLink to="/snooker-coaching" secondary>Explore coaching</ArrowLink></div></div></div>
  <section className="section" id="approach"><div className="container statement-grid"><div><Eyebrow>The approach</Eyebrow><h2>SMALL CHANGES.<br/>BETTER DECISIONS.<br/><span>MORE CONSISTENCY.</span></h2></div><div className="rich-copy"><p>Good coaching isn't about changing everything at once.</p><p>It's about identifying what is limiting your game, understanding why it happens, and building repeatable habits that hold up under pressure.</p><Link className="text-link" to="/snooker-coaching">How coaching works <ArrowRight size={16}/></Link></div></div></section>
  <section className="section section-raised"><div className="container"><div className="section-heading"><Eyebrow>Coaching disciplines</Eyebrow><h2>BUILD A MORE<br/>COMPLETE GAME.</h2></div><div className="discipline-grid">{disciplines.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowRight size={18}/></article>)}</div></div></section>
  <section className="cinematic-break"><div className="cinematic-portrait"><img src={portrait} alt="John Nicholson with the complete JN Snooker identity" width="1000" height="1000" loading="lazy" decoding="async"/></div><div className="cinematic-copy"><Eyebrow>The standard</Eyebrow><p>CONTROL.</p><p>CLARITY.</p><p>COMMITMENT.</p><span>Focused coaching. Repeatable improvement.</span></div></section>
  <section className="section"><div className="container"><div className="section-heading"><Eyebrow>Player development</Eyebrow><h2>COACHING BUILT<br/>AROUND YOUR GAME.</h2></div><div className="player-list">{players.map(([title,copy],i)=><Link key={title} to="/snooker-coaching"><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p><ArrowRight/></Link>)}</div></div></section>
  <section className="coach-feature"><div className="container coach-editorial"><div className="coach-identity"><Eyebrow>Your coach</Eyebrow><h2>JOHN<br/><span>NICHOLSON</span></h2></div><div className="coach-copy"><img className="coach-logo" src={logo} alt="JN Snooker — John Nicholson Snooker Coaching" width="900" height="600" loading="lazy" decoding="async"/><p>John's coaching philosophy is straightforward: understand the player first, identify what is holding the game back, then create practical adjustments that can be repeated away from the coaching session.</p><p>The goal is to make improvement understandable, measurable and repeatable.</p><ArrowLink to="/about-john">Meet John</ArrowLink></div></div></section>
  <section className="section section-raised"><div className="container"><div className="section-heading"><Eyebrow>The session</Eyebrow><h2>A SIMPLE PROCESS.<br/>REAL DEVELOPMENT.</h2></div><div className="process-grid">{processSteps.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
  <section className="section"><div className="container"><div className="section-heading compact"><Eyebrow>Areas we can work on</Eyebrow><h2>YOUR GAME.<br/>BROKEN DOWN.</h2></div><div className="area-grid">{coachingAreas.map((area)=><span key={area}>{area}</span>)}</div></div></section>
  <section className="section comparison-section"><div className="container"><div className="comparison-heading"><div><Eyebrow>Why personal coaching</Eyebrow><h2>THE DIFFERENCE IS<br/><span>IN THE DETAIL.</span></h2></div><p>General advice can point you in a direction. One-to-one coaching identifies what is happening in your game and turns it into a practical plan.</p></div><div className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th scope="col">What helps you improve</th><th scope="col">Practising alone</th><th scope="col">General tips</th><th scope="col" className="comparison-featured">1-to-1 coaching</th></tr></thead><tbody>{comparisonRows.map(([label, solo, tips, coaching]) => <tr key={String(label)}><th scope="row">{label}</th>{[solo, tips, coaching].map((included, index) => <td key={index} className={index === 2 ? "comparison-featured" : ""}>{included ? <Check aria-label="Included" size={20}/> : <Minus aria-label="Not included" size={18}/>}</td>)}</tr>)}</tbody></table></div><div className="comparison-action"><p>Focused on your technique, your decisions and your next stage of development.</p><ArrowLink to="/book-snooker-coaching">Book one-to-one coaching</ArrowLink></div></div></section>
  <section className="section session-outcomes"><div className="container"><div className="section-heading"><Eyebrow>Beyond the session</Eyebrow><h2>LEAVE WITH<br/>A CLEAR PLAN.</h2></div><div className="outcome-grid">{sessionOutcomes.map(([n,title,copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
  <section className="development-band"><div className="container"><div className="development-intro"><Eyebrow>The development cycle</Eyebrow><h2>FROM FIRST LOOK<br/>TO MATCH TABLE.</h2></div><div className="development-track">{coachingValues.map(([title,copy], index) => <article key={title}><span>{String(index + 1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>
  <section className="session-focus"><div className="container session-focus-grid"><div className="focus-visual"><div className="focus-visual-frame"><img src={logo} alt="JN Snooker — John Nicholson Snooker Coaching" width="900" height="600" loading="lazy" decoding="async"/></div></div><div className="focus-note"><Eyebrow>One table. One player. One plan.</Eyebrow><h2>COACHING<br/><span className="focus-hollow">WITHOUT</span><br/><span>THE NOISE.</span></h2><p>Every session is centred on the part of your game that will create the most useful change now.</p><ul className="focus-list"><li><span className="focus-check"><Check size={14} aria-hidden="true"/></span>Direct observation</li><li><span className="focus-check"><Check size={14} aria-hidden="true"/></span>Simple explanations</li><li><span className="focus-check"><Check size={14} aria-hidden="true"/></span>Repeatable routines</li></ul><span className="focus-rule" aria-hidden="true"/><ArrowLink to="/book-snooker-coaching">Book a session</ArrowLink></div></div></section>
  <section className="media-feature"><div className="media-visual"><img src={hero} alt="Professional snooker coaching with John Nicholson" width="1440" height="480" loading="lazy" decoding="async"/><span className="play-button"><Play fill="currentColor"/></span></div><div className="media-copy"><Eyebrow>Coaching insights</Eyebrow><h2>SEE THE GAME<br/>DIFFERENTLY.</h2><p>Short coaching breakdowns, practice ideas and snooker insights can be added here as John's content library grows.</p><ArrowLink to="/snooker-insights" secondary>View coaching insights</ArrowLink></div></section>
  <section className="championship-faq" aria-labelledby="championship-faq-heading">
    <div className="container championship-faq-grid">
      <div className="championship-faq-intro">
        <Eyebrow>Championship FAQ</Eyebrow>
        <h2 id="championship-faq-heading">ASKED AT<br/><span>THE TABLE.</span></h2>
        <p>Clear answers for players who take their game seriously — from first session through competitive play.</p>
        <div className="championship-faq-mark" aria-hidden="true">
          <span>JN</span>
          <span>STANDARD</span>
        </div>
      </div>
      <div className="championship-faq-list">
        {faqs.map(([num, question, answer], index) => (
          <details key={question} open={index === 0}>
            <summary>
              <span className="faq-num">{num}</span>
              <span className="faq-q">{question}</span>
              <ChevronDown size={18} aria-hidden="true" />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
  <section className="principle-strip"><div className="container"><p>Better habits</p><span aria-hidden="true"/><p>Smarter choices</p><span aria-hidden="true"/><p>Stronger match play</p></div></section>
  <section className="section location-section"><div className="container statement-grid"><div><Eyebrow>North East England</Eyebrow><h2>SNOOKER COACHING<br/><span>IN DARLINGTON.</span></h2></div><div className="rich-copy"><p>One-to-one snooker coaching for players in Darlington, County Durham and surrounding areas across the North East.</p><div className="location-links"><span>Darlington</span><span>County Durham</span><span>North East England</span></div></div></div></section>
  <section className="final-cta final-cta-framed"><div className="container"><div className="final-cta-frame"><Eyebrow>Ready to work on your game?</Eyebrow><h2>BOOK A SESSION<br/>WITH JOHN NICHOLSON.</h2><ArrowLink to="/book-snooker-coaching">Book coaching</ArrowLink></div></div></section>
  </PageShell>; }