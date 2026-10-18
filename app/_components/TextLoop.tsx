"use client";

import { useLanguage } from "@/app/_components/LanguageProvider";

import { motion } from "motion/react";

export const TextLoop = () => {
  const { t } = useLanguage();

  const text =
    t("Forex Trading ✦ Crypto Trading ✦ Funded Account Trading ✦ ");

  const OneBlock = () => (
    <>
      <span className="text-4xl font-semibold uppercase text-textLoop">
        {text}
      </span>
      <span className="text-4xl font-semibold uppercase text-textLoop">
        {text}
      </span>
      <span className="text-4xl font-semibold uppercase text-textLoop">
        {text}
      </span>
      <span className="text-4xl font-semibold uppercase text-textLoop">
        {text}
      </span>
    </>
  );

  return (
    <div className="relative flex w-full overflow-hidden border-y border-borderPrimary bg-transparent py-8">
      <motion.div
        className="flex flex-nowrap whitespace-nowrap"
        initial={{ x: "-50%" }}
        animate={{ x: "0%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 100,
        }}
        style={{ width: "max-content" }}
      >
        <div className="flex items-center flex-shrink-0">
          <OneBlock />
        </div>
        <div className="flex items-center flex-shrink-0">
          <OneBlock />
        </div>
      </motion.div>
    </div>
  );
};
