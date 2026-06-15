import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-Cxs3sQL4.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$3 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/pt",
			changefreq: "weekly",
			priority: "0.9"
		},
		{
			path: "/fr",
			changefreq: "weekly",
			priority: "0.9"
		}
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/pt.tsx
var $$splitComponentImporter$2 = () => import("./pt-C4e355ce.js");
var Route$2 = createFileRoute("/pt")({
	head: () => ({
		meta: [
			{ title: "Bella Brow Studio — Design de Sobrancelhas Premium" },
			{
				name: "description",
				content: "Estúdio especializado em design de sobrancelhas, henna, brow lamination e micropigmentação. Realce sua beleza natural."
			},
			{
				property: "og:title",
				content: "Bella Brow Studio — Design de Sobrancelhas Premium"
			},
			{
				property: "og:description",
				content: "Sobrancelhas perfeitas para valorizar sua beleza natural."
			},
			{
				property: "og:locale",
				content: "pt_BR"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/pt"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "/pt"
			},
			{
				rel: "alternate",
				hrefLang: "pt-BR",
				href: "/pt"
			},
			{
				rel: "alternate",
				hrefLang: "fr",
				href: "/fr"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/fr.tsx
var $$splitComponentImporter$1 = () => import("./fr-9fLU8GlF.js");
var Route$1 = createFileRoute("/fr")({
	head: () => ({
		meta: [
			{ title: "Bella Brow Studio — Design de Sourcils Premium" },
			{
				name: "description",
				content: "Studio spécialisé en design de sourcils, henné, brow lamination et microblading. Sublimez votre beauté naturelle."
			},
			{
				property: "og:title",
				content: "Bella Brow Studio — Design de Sourcils Premium"
			},
			{
				property: "og:description",
				content: "Des sourcils parfaits pour sublimer votre beauté naturelle."
			},
			{
				property: "og:locale",
				content: "fr_FR"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/fr"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "/fr"
			},
			{
				rel: "alternate",
				hrefLang: "pt-BR",
				href: "/pt"
			},
			{
				rel: "alternate",
				hrefLang: "fr",
				href: "/fr"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-CufuvSJw.js");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Bella Brow Studio — Design de Sobrancelhas Premium" },
			{
				name: "description",
				content: "Estúdio especializado em design de sobrancelhas, henna, brow lamination e micropigmentação."
			},
			{
				property: "og:title",
				content: "Bella Brow Studio — Design de Sobrancelhas Premium"
			},
			{
				property: "og:description",
				content: "Sobrancelhas perfeitas para valorizar sua beleza natural."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "/"
			},
			{
				rel: "alternate",
				hrefLang: "pt-BR",
				href: "/pt"
			},
			{
				rel: "alternate",
				hrefLang: "fr",
				href: "/fr"
			},
			{
				rel: "alternate",
				hrefLang: "x-default",
				href: "/"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$3.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$4
});
var PtRoute = Route$2.update({
	id: "/pt",
	path: "/pt",
	getParentRoute: () => Route$4
});
var FrRoute = Route$1.update({
	id: "/fr",
	path: "/fr",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	FrRoute,
	PtRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
