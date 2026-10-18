"use client";

import { useLanguage } from "@/app/_components/LanguageProvider";

import { Timeline } from "../Timeline";

export default function AccountSteps() {
  const { t } = useLanguage();
  const steps = [
    {
      title: t("Understand prop firm rules"),
      content: (
        <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("Review the profit target, drawdown limits, minimum trading days, and every restriction before starting the challenge.")}</p>
      ),
    },
    {
      title: t("Build a trading plan"),
      content: (
        <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("Create a practical plan for your account size, preferred sessions, position sizing, risk per trade, and daily loss limit.")}</p>
      ),
    },
    {
      title: t("Complete Phase 1"),
      content: (
        <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("Follow the plan with discipline, track each session, and focus on consistent decisions instead of rushing toward the profit target.")}</p>
      ),
    },
    {
      title: t("Complete Phase 2"),
      content: (
        <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("Protect the progress you have made and adapt your execution to the second phase requirements while keeping risk under control.")}</p>
      ),
    },
    {
      title: t("Maintain your funded account"),
      content: (
        <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("Continue using the same risk controls, trading routine, and review process after funding to support consistent performance.")}</p>
      ),
    },
  ];
  return <Timeline data={steps} />;
}
