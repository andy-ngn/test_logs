import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { LRUCache } from "lru-cache";
import { nanoid } from "nanoid";
import type { NextApiHandler } from "next";
// type UserSession = {
//   iat: number;
//   exp: number;
//   id: string;
// };
// const sessionCache = new LRUCache({
//   maxSize: 10000,
// });

const handler: NextApiHandler = async (req, res) => {
  const authOptions: AuthOptions = {
    secret: "sadsasd",
    debug: true,
    providers: [
      Credentials({
        authorize: async (credentials) => {
          return { id: "1", email: "test" };
        },

        credentials: {
          password: { label: "Password", type: "password" },
          username: { label: "Username", type: "text" },
        },
      }),
    ],
    callbacks: {
      session: async ({ session, token, trigger, user }) => {
        // const exp = new Date(new Date().getTime() + 1 * 1000).toISOString();
        // if (session) {
        //   session.expires = exp;
        // }

        //   console.log("all: ", { newSession, session, token, trigger, user });
        return session;
      },
    },
    events: {
      session: ({ session, token }) => {
        // const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
      },
    },
  };
  return NextAuth(req, res, authOptions);
};

export default handler;
