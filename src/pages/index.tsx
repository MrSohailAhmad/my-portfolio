import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import About from "./components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-bg-color ${inter.className}`}>
      <Header />
      <HeroSec />
      <About />
    </main>
  );
}
