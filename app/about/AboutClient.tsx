"use client";

import { ShieldCheck, Target, Users } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Rules first",
    description:
      "Every plan starts with the prop firm's objectives, drawdown limits, trading hours, and restrictions.",
  },
  {
    icon: ShieldCheck,
    title: "Risk before reward",
    description:
      "We focus on position sizing, daily loss protection, and repeatable decisions instead of rushed targets.",
  },
  {
    icon: Users,
    title: "Accountability",
    description:
      "You get a clear process and practical check-ins to help you stay consistent through each phase.",
  },
];

export default function AboutClient() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 md:px-12">
      <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
        About CFC
      </p>
      <h1 className="mt-4 max-w-4xl font-header text-5xl font-semibold leading-tight text-textPrimary md:text-7xl">
        A calmer, clearer way to approach your funded-account challenge.
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-textPrimary/70">
        CFC supports forex traders who want structure during prop firm
        evaluations. We help turn complex rules and ambitious targets into a
        practical process built around preparation, risk control, and
        consistency.
      </p>
      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {principles.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="rounded-xl border border-borderPrimary bg-backgroundSecondary p-6"
          >
            <Icon className="size-6 text-primary" aria-hidden="true" />
            <h2 className="mt-6 font-header text-2xl font-semibold text-textPrimary">
              {title}
            </h2>
            <p className="mt-3 leading-7 text-textPrimary/70">{description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
