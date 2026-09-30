import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, coachingAreas, Eyebrow, PageShell, processSteps } from "../components/site-shell";

export const Route = createFileRoute("/snooker-coaching")({
  head: () => ({ meta: [
    { title: "Snooker Coaching Darlington & County Durham | JN Snooker" },
    { name: "description", content: "One-to-one snooker coaching in Darlington for beginners, improving and competitive players. Improve technique, cue action, positional play and match play." },
    { property: "og:title", content: "Snooker Coaching Darlington & County Durham | JN Snooker" },
    { property: "og:description", content: "Personal snooker coaching shaped around your game, from fundamentals to match preparation." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: CoachingPage,
});

const services = [
  ["One-to-one coaching", "A focused session built around your current game, goals and playing level."],
  ["Cue action & technique", "Refine alignment, grip and delivery to build a repeatable action."],
  ["Aiming & cue-ball control", "Read angles more clearly and learn to move the cue ball with purpose."],
  ["Positional play & break building", "Connect shots, develop routes and give each visit more structure."],
  ["Safety & tactical awareness", "Make stronger choices when attack is not the right option."],
  ["Match preparation", "Create routines that support good decisions and reliable technique under pressure."],
  ["Beginner coaching", "Build sound fundamentals and a practical understanding of how the game works."],
  ["Practice planning", "Turn table time into focused work with drills you can repeat independently."],
];

function CoachingPage() { return <PageShell>
  <section className="page-hero"><div className="container page-hero-grid"><div><Eyebrow>Personal coaching · Darlington</Eyebrow><h1>SNOOKER COACHING<br/><span>IN DARLINGTON.</span></h1></div><p className="page-lead">Every player's game is different. Coaching should be too. Sessions focus on the changes that will make the clearest difference to how you play.</p></div></section>
  <section className="section"><div className="container"><div className="section-heading"><Eyebrow>What we can work on</Eyebrow><h2>A MORE COMPLETE<br/>GAME.</h2></div><div className="editorial-services">{services.map(([title, copy], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
  <section className="section section-raised"><div className="container"><div className="section-heading"><Eyebrow>The session</Eyebrow><h2>ASSESS. IDENTIFY.<br/>COACH. PRACTISE.</h2></div><div className="process-grid">{processSteps.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
  <section className="section"><div className="container"><div className="section-heading compact"><Eyebrow>Development areas</Eyebrow><h2>YOUR GAME.<br/>BROKEN DOWN.</h2></div><div className="area-grid">{coachingAreas.map((area) => <span key={area}>{area}</span>)}</div></div></section>
  <section className="section pricing"><div className="container"><div className="section-heading"><Eyebrow>Coaching options</Eyebrow><h2>TIME SPENT<br/>WITH PURPOSE.</h2></div><div className="pricing-list">{[["One-to-one session","Price available on enquiry"],["Player development session","Price available on enquiry"],["Custom coaching","Speak with John"]].map(([t,p], i) => <div key={t}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p><ArrowLink to="/book-snooker-coaching">Enquire</ArrowLink></div>)}</div></div></section>
  <section className="final-cta"><div className="container"><Eyebrow>Ready to work on your game?</Eyebrow><h2>YOUR NEXT BREAK<br/>STARTS HERE.</h2><p>Tell John where your game is now and what you'd like to improve.</p><ArrowLink to="/book-snooker-coaching">Book a coaching session</ArrowLink></div></section>
  </PageShell>; }