import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState<Record<string, any>>({});
  const [error, setError] = useState<string>("");
  useEffect(() => {
    fetch("/api/getIP")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {!!data && (
        <div>
          Data:
          <div>
            {Object.entries(data).map(([key, value]) => {
              return (
                <div key={key}>
                  {key}:{value}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
}
