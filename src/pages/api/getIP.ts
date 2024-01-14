import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  res
    .status(200)
    .json({ ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress });
};

export default handler;
