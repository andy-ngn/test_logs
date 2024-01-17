import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { nanoid } from "nanoid";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  // useEffect(() => {
  //   if (typeof window == "undefined") return;
  //   const now = +new Date();
  //   const currentSessionStr = window.sessionStorage.getItem("trackingSession");
  //   const currentSession = !currentSessionStr
  //     ? { sessionId: nanoid(), exp: +new Date() + 1000 * 60 * 60 * 30 }
  //     : (JSON.parse(currentSessionStr) as { sessionId: string; exp: number });
  //   if (currentSession.exp > now) {
  //   } else {
  //   }
  // }, []);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("focus", () => {
  //       window.sessionStorage.setItem("newSession", JSON.stringify({

  //       }));
  //       // fetch("/api/addLog", {
  //       //   method: "POST",
  //       //   body: JSON.stringify({ type: "focus", time: +new Date() }),
  //       // });
  //     });
  //     window.addEventListener("focusout", () => {});
  //   }
  //   return () => {
  //     if (typeof window !== "undefined") {
  //       window.removeEventListener("focus", () => {});
  //     }
  //   };
  // }, []);
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
