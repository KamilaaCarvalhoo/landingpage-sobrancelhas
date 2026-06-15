import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";
import "@/i18n";

export const Route = createFileRoute("/fr")({
  head: () => ({
    meta: [
      { title: "Bella Brow Studio — Design de Sourcils Premium" },
      { name: "description", content: "Studio spécialisé en design de sourcils, henné, brow lamination et microblading. Sublimez votre beauté naturelle." },
      { property: "og:title", content: "Bella Brow Studio — Design de Sourcils Premium" },
      { property: "og:description", content: "Des sourcils parfaits pour sublimer votre beauté naturelle." },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/fr" },
    ],
    links: [
      { rel: "canonical", href: "/fr" },
      { rel: "alternate", hrefLang: "pt-BR", href: "/pt" },
      { rel: "alternate", hrefLang: "fr", href: "/fr" },
    ],
  }),
  component: () => <Landing lang="fr" />,
});
