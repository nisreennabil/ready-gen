import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, TranslationKey } from "@/lib/translations";

export type Language = "en" | "ar";

export interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: TranslationKey) => string;
}

const getStoredLanguage = (): Language => {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("rg_lang");
  return saved === "ar" || saved === "en" ? saved : "en";
};

const createFallbackLanguageContext = (): LanguageContextType => {
  const fallbackLang = getStoredLanguage();

  return {
    lang: fallbackLang,
    setLang: () => {
      if (typeof window !== "undefined" && import.meta.env.DEV) {
        console.warn("LanguageProvider is missing; language switching is temporarily disabled.");
      }
    },
    t: (key: TranslationKey) => translations[fallbackLang][key] ?? translations.en[key] ?? key,
  };
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(getStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("rg_lang", lang);
  }, [lang]);

  const setLang = (l: Language) => setLangState(l);

  const t = (key: TranslationKey): string => {
    return translations[lang][key] ?? translations.en[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    if (import.meta.env.DEV) {
      console.warn("useLanguage was used outside LanguageProvider; falling back to default language context.");
    }

    return createFallbackLanguageContext();
  }

  return ctx;
};
