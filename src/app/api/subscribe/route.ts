import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      listIds: [parseInt(listId)],
      updateEnabled: true,
    }),
  });

  if (!res.ok && res.status !== 204) {
    const error = await res.json().catch(() => ({}));
    // 400 avec code "duplicate_parameter" = contact déjà inscrit, on traite ça comme un succès
    if (error?.code === "duplicate_parameter") {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "Erreur Brevo" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
