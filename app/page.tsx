import Image from "next/image";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Urgency } from "./Urgency";
import { Reed } from "./Reed";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Urgency />
      <Reed />
    </main>
  );
}
