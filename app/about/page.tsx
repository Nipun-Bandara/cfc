import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About CFC",
  description:
    "Learn about CFC's approach to helping forex traders navigate prop firm evaluations.",
};

export default function AboutPage() {
  return <AboutClient />;
}
