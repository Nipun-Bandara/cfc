"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import sinhala from "@/lib/i18n/si.json";

export type Locale = "en" | "si";
const storageKey = "cfc-language";
const changeEvent = "cfc-language-change";
let currentLocale: Locale | undefined;

function getLocale(): Locale {
  if (currentLocale) return currentLocale;
  try {
    return localStorage.getItem(storageKey) === "si" ? "si" : "en";
  } catch {
    return "en";
  }
}

function subscribe(callback: () => void) {
  const onStorage = () => {
    currentLocale = undefined;
    callback();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(changeEvent, callback);
  };
}

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (english: string) => string;
} | null>(null);

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getLocale, () => "en" as const);
  const setLocale = useCallback((value: Locale) => {
    currentLocale = value;
    try {
      localStorage.setItem(storageKey, value);
    } catch {
      // The switcher still works when browser storage is unavailable.
    }
    window.dispatchEvent(new Event(changeEvent));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale,
    // English is the source copy and fallback for any new untranslated text.
    t: (english: string) => locale === "si"
      ? sinhala[english as keyof typeof sinhala] ?? english
      : english,
  }), [locale, setLocale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
