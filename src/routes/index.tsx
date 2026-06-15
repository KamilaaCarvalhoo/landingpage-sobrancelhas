import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";
import "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bella Brow Studio — Design de Sobrancelhas Premium" },
      { name: "description", content: "Estúdio especializado em design de sobrancelhas, henna, brow lamination e micropigmentação." },
      { property: "og:title", content: "Bella Brow Studio — Design de Sobrancelhas Premium" },
      { property: "og:description", content: "Sobrancelhas perfeitas para valorizar sua beleza natural." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "alternate", hrefLang: "pt-BR", href: "/pt" },
      { rel: "alternate", hrefLang: "fr", href: "/fr" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
  }),
  component: () => <Landing />,
});
