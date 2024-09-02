"use client";

// src/context/TranslationContext.tsx
import { ReactNode, createContext, useContext, useState } from "react";
import enTranslations from "../locales/en/common.json";
import mxTranslations from "../locales/mx/common.json";

type TranslationContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations: any = {
  en: enTranslations,
  es: mxTranslations,
};

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<string>("en");

  const t = (key: string) => {
    return translations[locale][key] || key;
  };

  return <TranslationContext.Provider value={{ locale, setLocale, t }}>{children}</TranslationContext.Provider>;
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
