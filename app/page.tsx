import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Urgency } from "./Urgency";
import { Reed } from "./Reed";
import { Reference } from "./Reference";

import { Footer } from "./Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Urgency />
      <Reed />
      <Reference />
      <Footer />
    </main>
  );
}
