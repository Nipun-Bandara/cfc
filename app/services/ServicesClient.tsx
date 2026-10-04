"use client";

import Features from "../_components/services/Features";
import BlurText from "../_components/BlurText";
import AccountSteps from "../_components/services/AccountSteps";

export default function ServicesClient() {
  return (
    <div>
      <div className="pb-4 pt-32 sm:pt-32 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto">
        <div className="items-center gap-2 mb-4 justify-start">
          <h1 className="flex items-center gap-2 font-header text-primary">
          <span aria-hidden="true">✦</span>
          How we help
        </h1>
        <BlurText
          text="Support that keeps your challenge focused."
          delay={150}
          animateBy="words"
          direction="top"
          className="py-2 font-header text-4xl font-bold"
        />
        <p className="mb-8 max-w-3xl text-textPrimary/80">
          CFC helps you replace guesswork with a repeatable framework for
          navigating funded-account evaluations.
        </p>
        <Features />
      </div>
      <p className="mt-10 text-sm text-textPrimary/60">
        CFC provides educational and process support. Trading involves risk,
        and no outcome or funded-account approval is guaranteed.
      </p>
      <div className="mt-20">
      <AccountSteps/>
      </div>
    </div>
    </div>
  );
}
