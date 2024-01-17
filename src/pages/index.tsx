// import Image from "next/image";
import { Inter } from "next/font/google";
// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Link href='/about'>About</Link>
      <button>Click me</button>
    </main>
  );
}
