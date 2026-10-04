"use client";

import Features from "../_components/Features";
import BlurText from "../_components/BlurText";

export default function ServicesClient() {
  return (
    <div>
      <div className="pb-4 pt-32 sm:pt-32 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto"><h1 className="font-header text-primary flex items-center gap-2">
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
        How we Help
      </h1>
      <BlurText
        text="Support that keeps your challenge focused."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl py-2 font-bold font-header"
      />
      <h1 className="text-textPrimary font-light mb-8">
        CFC helps you replace guesswork with a repeatable framework for
        navigating funded-account evaluations.
      </h1>
      
      <div className="mt-16">
        <Features />
      </div>
    </div>
    </div>
  );
}
