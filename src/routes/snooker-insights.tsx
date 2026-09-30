import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink, Eyebrow, PageShell } from "../components/site-shell";
export const Route = createFileRoute("/snooker-insights")({ head: () => ({ meta: [
  { title: "Snooker Insights | JN Snooker" }, { name: "description", content: "Practical snooker coaching breakdowns, practice ideas and match-play insights from John Nicholson." },
  { property: "og:title", content: "Snooker Insights | JN Snooker" }, { property: "og:description", content: "A growing library of clear, practical snooker coaching ideas." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: InsightsPage });
function InsightsPage(){return <PageShell><section className="page-hero insights-hero"><div className="container"><Eyebrow>Coaching insights</Eyebrow><h1>SEE THE GAME<br/><span>DIFFERENTLY.</span></h1><p className="page-lead">Short coaching breakdowns, practice ideas and snooker insights will be added here as John's content library grows.</p><ArrowLink to="/book-snooker-coaching">Ask John a question</ArrowLink></div></section></PageShell>}