import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Eyebrow, PageShell } from "../components/site-shell";

export const Route = createFileRoute("/book-snooker-coaching")({ head: () => ({ meta: [
  { title: "Book Snooker Coaching Darlington | John Nicholson" }, { name: "description", content: "Enquire about one-to-one snooker coaching with John Nicholson in Darlington, County Durham." },
  { property: "og:title", content: "Book Snooker Coaching Darlington | John Nicholson" }, { property: "og:description", content: "Tell John about your game and arrange a personal coaching session in Darlington." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: BookingPage });

function BookingPage() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return <PageShell><section className="booking-page"><div className="container booking-grid"><div className="booking-intro"><Eyebrow>Coaching enquiry</Eyebrow><h1>LET'S WORK ON<br/><span>YOUR GAME.</span></h1><p>Tell John a little about your current level and what you'd like to improve.</p><div className="booking-location"><span>Based in</span><strong>Darlington, County Durham</strong></div></div>
  {sent ? <div className="form-success" role="status"><Check size={32}/><Eyebrow>Enquiry prepared</Eyebrow><h2>THANK YOU.</h2><p>Your details have been captured. Direct email delivery can be connected when John supplies the preferred contact address.</p><button className="button button-outline" onClick={() => setSent(false)}>Send another enquiry</button></div> :
  <form className="booking-form" onSubmit={submit}><div className="form-field"><label htmlFor="name">Name</label><input id="name" name="name" required autoComplete="name" /></div><div className="form-field"><label htmlFor="email">Email</label><input id="email" name="email" required type="email" autoComplete="email" /></div><div className="form-field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div><div className="form-field"><label htmlFor="level">Current playing level</label><select id="level" name="level" required defaultValue=""><option value="" disabled>Select your level</option><option>Beginner</option><option>Improving</option><option>Club Player</option><option>Competitive Player</option><option>Other</option></select></div><div className="form-field form-wide"><label htmlFor="improve">What would you like to improve?</label><input id="improve" name="improve" required /></div><div className="form-field form-wide"><label htmlFor="time">Preferred day / time</label><input id="time" name="time" /></div><div className="form-field form-wide"><label htmlFor="message">Message</label><textarea id="message" name="message" rows={5} /></div><button className="button button-primary form-submit" type="submit">Send coaching enquiry <ArrowRight size={16}/></button></form>}
  </div></section></PageShell>;
}