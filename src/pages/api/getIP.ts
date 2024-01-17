import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userAgent = req.headers["user-agent"];

  res.status(200).json({ ip, userAgent });
};

export default handler;
