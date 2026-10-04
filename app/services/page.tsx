import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "How We Help",
  description:
    "Explore CFC's structured support for forex funded-account challenge phases.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
