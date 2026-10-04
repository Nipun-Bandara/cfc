import { Metadata } from "next";
import StoriesClient from "./StoriesClient";

export const metadata: Metadata = {
  title: "Client Stories",
  description:
    "See how disciplined planning and accountability help traders approach funded-account challenges with confidence.",
};

export default function StoriesPage() {
  return <StoriesClient />;
}
