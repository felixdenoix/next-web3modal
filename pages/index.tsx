import { Inter } from "next/font/google";
import OpenModalButton from "@/components/openModalButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <h1>hello</h1>
      coucou
      <OpenModalButton />
    </main>
  );
}
