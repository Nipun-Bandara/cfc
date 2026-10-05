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
        <h1 className="text-textPrimary font-light mb-8">
          CFC helps you replace guesswork with a repeatable framework for
          navigating funded-account evaluations.
        </h1>
        <Features />
      </div>
      <h1 className="text-textPrimary font-light mb-8">
        CFC provides educational and process support. Trading involves risk,
        and no outcome or funded-account approval is guaranteed.
      </h1>
      <div className="mt-10">
      <AccountSteps/>
      </div>
    </div>
    </div>
  );
}
