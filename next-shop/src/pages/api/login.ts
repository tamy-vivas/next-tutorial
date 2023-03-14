import type { NextApiRequest, NextApiResponse } from "next";
import { fetchJson } from "../../lib/api";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const { email, password } = req.body;

  try {
    const { jwt, user } = await fetchJson("http://localhost:1337/auth/local", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier: email, password }),
    });
    res.status(200).json({ id: user.id, name: user.username });
  } catch (error) {
    res.status(401).end();
  }
};

export default handler;
