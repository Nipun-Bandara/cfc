import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Start Your Challenge Plan",
  description:
    "Tell CFC about your funded-account challenge and receive guidance for your next phase.",
};

export default function ContactPage() {
  return <ContactClient />;
}
