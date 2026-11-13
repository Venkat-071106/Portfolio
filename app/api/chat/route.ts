import { NextResponse } from "next/server";
import { portfolio } from "@/content/data";

function fallback(question: string) {
  const q = question.toLowerCase();
  const project = (id: string) => portfolio.projects.find(item => item.id === id);
  if (/agribot|yesist|rover|farm/.test(q)) { const p = project("agribot"); return p ? `${p.summary} ${p.result}` : "Agribot details are not available in this portfolio."; }
  if (/iit|research|intern|drsformer|derain/.test(q)) return portfolio.experience[0].details.join(" ");
  if (/skill|computer vision|tool|language|stack/.test(q)) return portfolio.skills.filter(group => !group.group.startsWith("HARDWARE")).map(group => `${group.group}: ${group.items.join(", ")}`).join(" · ");
  if (/available|opportunit|role|hire|contact/.test(q)) return `${portfolio.availability}. Email: ${portfolio.email}. LinkedIn: ${portfolio.linkedin}.`;
  if (/project|cliniscan|lung|traffic|portfolio/.test(q)) return portfolio.projects.map(item => `${item.title}: ${item.summary}`).join("\n");
  return `I can answer from ${portfolio.shortName}’s portfolio about ${portfolio.title}, ${portfolio.education.degree}, ${portfolio.experience[0].org}, the projects listed on this site, and availability. I don’t have verified information for that question yet.`;
}

export async function POST(request: Request) {
  const { question } = await request.json();
  if (typeof question !== "string" || question.trim().length < 2 || question.length > 500) return NextResponse.json({ error: "Please enter a question under 500 characters." }, { status: 400 });
  if (!process.env.OPENAI_API_KEY) return NextResponse.json({ answer: fallback(question) });
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", { method: "POST", headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-4o-mini", temperature: 0.2, messages: [{ role: "system", content: `Answer as a concise recruiter assistant using only this JSON. Never infer missing facts. If not covered, say it is not specified and invite contact.\n${JSON.stringify(portfolio)}` }, { role: "user", content: question }] }) });
    if (!response.ok) throw new Error("Model unavailable");
    const data = await response.json();
    return NextResponse.json({ answer: data.choices?.[0]?.message?.content || fallback(question) });
  } catch { return NextResponse.json({ answer: fallback(question) }); }
}
