import Hero from "./_components/home/Hero";

import About from "./_components/home/About";
import Expertise from "./_components/home/Expertise";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Get structured support for your forex funded-account challenge, from evaluation planning to disciplined execution.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Expertise />
    </div>
  );
}
