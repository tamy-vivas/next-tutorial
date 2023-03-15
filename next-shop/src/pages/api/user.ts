import type { NextApiRequest, NextApiResponse } from "next";
import { fetchJson } from "../../lib/api";

const CMS_URL: string = process.env.CMS_URL || "http://localhost:1337";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).end();
    return;
  }

  try {
    const user = await fetchJson(`${CMS_URL}/users/me`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });

    res.status(200).json({
      id: user.id,
      name: user.name,
    });
  } catch (error) {
    res.status(401).end();
  }
};

export default handler;
