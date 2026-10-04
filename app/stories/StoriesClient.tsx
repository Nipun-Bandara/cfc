"use client";

import BlurText from "../_components/BlurText";
import Testimonials from "../_components/stories/Testimonials";

const stories = [
  {
    label: "Preparation",
    title: "Start with the rules, not the target",
    description:
      "A clear review of the firm's drawdown, consistency, and trading restrictions gives every decision a useful context.",
  },
  {
    label: "Execution",
    title: "Protect the account through the phase",
    description:
      "A defined risk plan helps reduce emotional decisions and keeps a difficult trading day from becoming a failed evaluation.",
  },
  {
    label: "Review",
    title: "Build a process you can repeat",
    description:
      "Regular reviews turn individual trades into lessons that can improve the next session and the next challenge.",
  },
];

export default function StoriesClient() {
  return (
    <div>
      <div className="pb-4 pt-32 sm:pt-32 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto">
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
            Our approach
          </h1>
          <BlurText
            text="Progress is built one disciplined decision at a time."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl py-2 font-bold font-header"
          />
      <div className="mt-16 space-y-4">
        {stories.map((story, index) => (
          <article
            key={story.label}
            className="grid gap-4 rounded-xl border border-borderPrimary bg-backgroundSecondary p-6 md:grid-cols-[120px_1fr_1fr] md:items-start md:p-8"
          >
            <span className="font-mono text-sm text-primary">
              0{index + 1} / {story.label}
            </span>
            <h2 className="font-header text-2xl font-semibold text-textPrimary">
              {story.title}
            </h2>
            <p className="leading-7 text-textPrimary/70">{story.description}</p>
          </article>
        ))}
      </div>
      <Testimonials />
      </div>
    </div>
  );
}
