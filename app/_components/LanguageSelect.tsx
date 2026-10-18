"use client";

import { useLanguage } from "./LanguageProvider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select";

const languages = [
  { value: "en", label: "English" },
  { value: "si", label: "සිංහල" },
];

export default function LanguageSelect() {
  const { locale, setLocale, t } = useLanguage();
  return (
    <Select items={languages} value={locale} onValueChange={(value) => {
      if (value === "en" || value === "si") setLocale(value);
    }}>
      <SelectTrigger aria-label={t("Language")} className="min-w-28 border-borderPrimary text-textPrimary">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end" alignItemWithTrigger={false} className="border border-borderPrimary bg-backgroundSecondary p-1 text-textPrimary">
        {languages.map(({ value, label }) => (
          <SelectItem key={value} value={value} lang={value} className="cursor-pointer py-2 data-highlighted:bg-hoverPrimary">
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
