import { useTranslation } from "react-i18next";
import { setLanguage, type Lang } from "@/i18n";
import { Link } from "@tanstack/react-router";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.language?.startsWith("fr") ? "fr" : "pt") as Lang;
  const options: { code: Lang; flag: string; label: string }[] = [
    { code: "pt", flag: "🇧🇷", label: "PT" },
    { code: "fr", flag: "🇫🇷", label: "FR" },
  ];
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-cream/70 backdrop-blur p-1 text-xs">
      {options.map((o) => {
        const active = current === o.code;
        return (
          <Link
            key={o.code}
            to={`/${o.code}`}
            preload={false}
            onClick={() => setLanguage(o.code)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full transition ${
              active ? "bg-primary text-primary-foreground" : "hover:bg-nude text-muted-foreground"
            }`}
            aria-label={`Switch to ${o.label}`}
          >
            <span aria-hidden>{o.flag}</span>
            <span className="font-medium tracking-wider">{o.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
