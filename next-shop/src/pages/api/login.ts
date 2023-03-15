import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { fetchJson } from "../../lib/api";

const CMS_URL: string = process.env.CMS_URL || "http://localhost:1337";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const { email, password } = req.body;

  try {
    //http://localhost:1337/auth/local
    const { jwt, user } = await fetchJson(`${CMS_URL}/auth/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier: email, password }),
    });
    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", jwt, {
          path: "/api",
          httpOnly: true,
        })
      )
      .json({ id: user.id, name: user.username });
  } catch (error) {
    res.status(401).end();
  }
};

export default handler;
