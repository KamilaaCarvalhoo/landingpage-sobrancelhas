import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "@/locales/pt.json";
import fr from "@/locales/fr.json";

export const SUPPORTED = ["pt", "fr"] as const;
export type Lang = (typeof SUPPORTED)[number];

function detectInitial(): Lang {
  if (typeof window === "undefined") return "pt";
  const stored = localStorage.getItem("lang");
  if (stored === "pt" || stored === "fr") return stored;
  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("fr") ? "fr" : "pt";
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      pt: { translation: pt },
      fr: { translation: fr },
    },
    lng: detectInitial(),
    fallbackLng: "pt",
    interpolation: { escapeValue: false },
  });
}

export function setLanguage(lang: Lang) {
  if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  i18n.changeLanguage(lang);
  if (typeof document !== "undefined") document.documentElement.lang = lang;
}

export default i18n;
