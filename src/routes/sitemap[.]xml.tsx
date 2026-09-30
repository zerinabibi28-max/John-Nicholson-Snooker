import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: () => {
  const base = "https://id-preview--3f48df3a-4ac3-485f-ae1e-393fa8fd4689.lovable.app";
  const paths = ["", "/snooker-coaching", "/about-john", "/book-snooker-coaching", "/snooker-insights"];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${base}${path}</loc></url>`).join("")}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
} } } });