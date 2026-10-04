"use client";

import BlurText from "../BlurText";
import Image from "next/image";
import { Bitcoin,TrendingUpDown, ShieldCheck } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";

const data = [
  {
    value: "forex-trading",
    title: "Forex Trading",
    content:
    "Review the evaluation rules, map the phase objectives, and build a practical plan around the instruments and sessions you trade.",
    icon: TrendingUpDown,
    image: "/expertise/forex.jpeg",
  },
  {
    value: "crypto-trading",
    title: "Crypto Trading",
    content:
    "Create a risk framework that accounts for drawdown limits, position sizing, daily exposure, and the need to preserve your evaluation account.",
    icon: Bitcoin,
    image: "/expertise/crypto.jpeg",
  },
  {
    value: "funded-account-passing",
    title: "Funded Account Passing",
    content:
    "Stay accountable through each challenge phase with structured reviews, decision journaling, and a process built for consistent execution.",
    icon: ShieldCheck,
    image: "/expertise/funded.jpeg",
  },
];

export default function Expertise() {
  const [activeItem, setActiveItem] = useState("");

  const [activeImageId, setActiveImageId] = useState(data[0].value);

  const activeImage = data.find((item) => item.value === activeImageId)?.image;

  return (
    <div className="pt-8 md:pt-12 lg:pt-16 xl:pt-12 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto">
      <h1 className="font-header text-primary flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sparkle"
          aria-hidden="true"
        >
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        </svg>
        What we support
      </h1>
      <BlurText
        text="From rules to results"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl py-2 font-bold font-header"
      />
      <h1 className="text-textPrimary font-light mb-8">
        Practical support for the decisions that matter during a prop firm evaluation.
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-start w-full max-w-7xl mx-auto">
        <div className="w-full md:w-1/2">
          <Accordion
            className="w-full"
            collapsible
            type="single"
            value={activeItem}
            onValueChange={(val) => {
              setActiveItem(val);
              if (val) {
                setActiveImageId(val);
              }
            }}
          >
            {data.map((item) => (
              <AccordionItem
                className="overflow-hidden border bg-backgroundSecondary px-4 rounded-xl mb-4"
                key={item.value}
                value={item.value}
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <item.icon className="size-4 text-textPrimary" />
                    <div className="flex flex-col items-start text-left">
                      <span>{item.title}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="ps-7">
                  <p className="text-textPrimary text-sm ">{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-full aspect-square md:aspect-video rounded-xl overflow-hidden ">
            {activeImage && (
              <Image
                key={activeImage}
                src={activeImage}
                alt="Expertise"
                fill
                className="object-cover transition-opacity duration-500 ease-in-out opacity-100 animate-in fade-in zoom-in-95"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
