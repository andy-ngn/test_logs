import logger from "@/logger";
import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST" && !!Object.keys(req.body).length) {
    logger.info(req.body);
    return res.send("ok");
  }
  return res.status(405).end();
};
export default handler;
