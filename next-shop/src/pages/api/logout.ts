import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  res
    .status(200)
    .setHeader(
      "Set-Cookie",
      cookie.serialize("jwt", "", {
        path: "/api",
        expires: new Date(0), //needs a previous date to expire the token
      })
    )
    .json({});
};

export default handler;
