// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Här kan du koppla på t.ex. nodemailer för att skicka e-post
    console.log("Formulärdata mottagen:", { name, email, message });

    // Simulera framgång
    return res.status(200).json({ success: true });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Metod ${req.method} ej tillåten`);
  }
}