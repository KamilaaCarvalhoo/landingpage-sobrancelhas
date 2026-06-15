import { t as setLanguage } from "./i18n-UjZIiP34.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { Award, Brush, ChevronLeft, ChevronRight, Clock, Eye, Gem, Heart, Instagram, Leaf, MapPin, MessageCircle, Palette, ShieldCheck, Smile, Sofa, Sparkles, Star, Wand2 } from "lucide-react";
//#region src/assets/hero.jpg
var hero_default = "/assets/hero-BoLpFomG.jpg";
//#endregion
//#region src/assets/specialist.jpg
var specialist_default = "/assets/specialist-_-39SL7n.jpg";
//#endregion
//#region src/assets/before1.jpg
var before1_default = "/assets/before1-DqnIWJA-.jpg";
//#endregion
//#region src/assets/after1.jpg
var after1_default = "/assets/after1-DdsreDLg.jpg";
//#endregion
//#region src/assets/before2.jpg
var before2_default = "/assets/before2-CeLuNl4l.jpg";
//#endregion
//#region src/assets/after2.jpg
var after2_default = "/assets/after2-p3DoVjaF.jpg";
//#endregion
//#region src/assets/before3.jpg
var before3_default = "/assets/before3-Cwz0vRNk.jpg";
//#endregion
//#region src/assets/after3.jpg
var after3_default = "/assets/after3-BoheVSMY.jpg";
//#endregion
//#region src/assets/client1.jpg
var client1_default = "/assets/client1-B-H-sQaT.jpg";
//#endregion
//#region src/assets/client2.jpg
var client2_default = "/assets/client2-tXFBNgJi.jpg";
//#endregion
//#region src/assets/client3.jpg
var client3_default = "/assets/client3-DHsPNzCx.jpg";
//#endregion
//#region src/components/BeforeAfter.tsx
function BeforeAfter({ before, after, label, beforeLabel = "Antes", afterLabel = "Depois" }) {
	const [pos, setPos] = useState(50);
	const ref = useRef(null);
	const onMove = (clientX) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const p = (clientX - rect.left) / rect.width * 100;
		setPos(Math.max(0, Math.min(100, p)));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "group",
		children: [/* @__PURE__ */ jsxs("div", {
			ref,
			className: "relative aspect-square w-full overflow-hidden rounded-2xl shadow-luxe select-none",
			onMouseMove: (e) => e.buttons === 1 && onMove(e.clientX),
			onTouchMove: (e) => onMove(e.touches[0].clientX),
			onClick: (e) => onMove(e.clientX),
			children: [
				/* @__PURE__ */ jsx("img", {
					src: after,
					alt: afterLabel,
					className: "absolute inset-0 h-full w-full object-cover",
					loading: "lazy"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 overflow-hidden",
					style: { width: `${pos}%` },
					children: /* @__PURE__ */ jsx("img", {
						src: before,
						alt: beforeLabel,
						className: "absolute inset-0 h-full w-full object-cover",
						style: {
							width: `${100 / (pos / 100)}%`,
							maxWidth: "none"
						},
						loading: "lazy"
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.3)]",
					style: { left: `${pos}%` },
					children: /* @__PURE__ */ jsx("div", {
						className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white border border-gold flex items-center justify-center cursor-ew-resize",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-gold-deep text-xs tracking-widest",
							children: "‹ ›"
						})
					})
				}),
				/* @__PURE__ */ jsx("span", {
					className: "absolute top-3 left-3 bg-ink/70 text-cream text-[10px] tracking-[0.2em] px-2.5 py-1 rounded-full uppercase",
					children: beforeLabel
				}),
				/* @__PURE__ */ jsx("span", {
					className: "absolute top-3 right-3 bg-gold text-ink text-[10px] tracking-[0.2em] px-2.5 py-1 rounded-full uppercase",
					children: afterLabel
				})
			]
		}), label && /* @__PURE__ */ jsx("p", {
			className: "mt-3 text-center text-sm text-muted-foreground tracking-wide",
			children: label
		})]
	});
}
//#endregion
//#region src/components/Reveal.tsx
function Reveal({ children, delay = 0, className = "" }) {
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.style.animationDelay = `${delay}ms`;
					e.target.classList.add("in-view");
					obs.unobserve(e.target);
				}
			});
		}, { threshold: .15 });
		obs.observe(el);
		return () => obs.disconnect();
	}, [delay]);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: `reveal ${className}`,
		children
	});
}
//#endregion
//#region src/components/LanguageSwitcher.tsx
function LanguageSwitcher() {
	const { i18n } = useTranslation();
	const current = i18n.language?.startsWith("fr") ? "fr" : "pt";
	return /* @__PURE__ */ jsx("div", {
		className: "inline-flex items-center gap-1 rounded-full border border-border bg-cream/70 backdrop-blur p-1 text-xs",
		children: [{
			code: "pt",
			flag: "🇧🇷",
			label: "PT"
		}, {
			code: "fr",
			flag: "🇫🇷",
			label: "FR"
		}].map((o) => {
			const active = current === o.code;
			return /* @__PURE__ */ jsxs(Link, {
				to: `/${o.code}`,
				preload: false,
				onClick: () => setLanguage(o.code),
				className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full transition ${active ? "bg-primary text-primary-foreground" : "hover:bg-nude text-muted-foreground"}`,
				"aria-label": `Switch to ${o.label}`,
				children: [/* @__PURE__ */ jsx("span", {
					"aria-hidden": true,
					children: o.flag
				}), /* @__PURE__ */ jsx("span", {
					className: "font-medium tracking-wider",
					children: o.label
				})]
			}, o.code);
		})
	});
}
//#endregion
//#region src/components/Landing.tsx
var PHONE = "5511999999999";
function whatsappUrl(message) {
	return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
function Landing({ lang }) {
	const { t, i18n } = useTranslation();
	const [, setTick] = useState(0);
	useEffect(() => {
		if (lang && i18n.language !== lang) {
			setLanguage(lang);
			setTick((n) => n + 1);
		}
	}, [lang, i18n.language]);
	const wa = whatsappUrl(t("whatsapp.message"));
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ jsx(Nav, {
				wa,
				t
			}),
			/* @__PURE__ */ jsx(Hero, {
				wa,
				t
			}),
			/* @__PURE__ */ jsx(Trust, { t }),
			/* @__PURE__ */ jsx(About, {
				wa,
				t
			}),
			/* @__PURE__ */ jsx(Services, {
				wa,
				t
			}),
			/* @__PURE__ */ jsx(BeforeAfterSection, { t }),
			/* @__PURE__ */ jsx(Benefits, { t }),
			/* @__PURE__ */ jsx(Testimonials, { t }),
			/* @__PURE__ */ jsx(CTA, {
				wa,
				t
			}),
			/* @__PURE__ */ jsx(Footer, {
				wa,
				t
			}),
			/* @__PURE__ */ jsx(FloatWA, {
				wa,
				t
			})
		]
	});
}
function Nav({ wa, t }) {
	return /* @__PURE__ */ jsx("header", {
		className: "fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "flex items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-gold-deep" }), /* @__PURE__ */ jsxs("span", {
						className: "font-display text-xl tracking-wide",
						children: ["Bella", /* @__PURE__ */ jsx("span", {
							className: "text-gold-deep",
							children: " Brow"
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden lg:flex items-center gap-7 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#top",
							className: "hover:text-foreground transition",
							children: t("nav.home")
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#sobre",
							className: "hover:text-foreground transition",
							children: t("nav.about")
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#servicos",
							className: "hover:text-foreground transition",
							children: t("nav.services")
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#resultados",
							className: "hover:text-foreground transition",
							children: t("nav.results")
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#depoimentos",
							className: "hover:text-foreground transition",
							children: t("nav.testimonials")
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 sm:gap-3 shrink-0",
					children: [/* @__PURE__ */ jsx(LanguageSwitcher, {}), /* @__PURE__ */ jsxs("a", {
						href: wa,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-ink transition",
						children: [
							/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
							" ",
							t("nav.book")
						]
					})]
				})
			]
		})
	});
}
function Hero({ wa, t }) {
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		className: "relative pt-28 pb-20 md:pt-36 md:pb-32 bg-gradient-nude",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 opacity-40 pointer-events-none",
			style: { backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.78 0.09 75 / 0.25), transparent 50%), radial-gradient(circle at 80% 60%, oklch(0.85 0.04 65 / 0.4), transparent 60%)" }
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "animate-fade-in",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/60 px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-gold-deep",
						children: [
							/* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
							" ",
							t("hero.badge")
						]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-ink",
						children: [
							t("hero.title_1"),
							" ",
							/* @__PURE__ */ jsx("em", {
								className: "text-gradient-gold not-italic",
								children: t("hero.title_em")
							}),
							" ",
							t("hero.title_2")
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed",
						children: t("hero.subtitle")
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsxs("a", {
							href: wa,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium hover:bg-ink shadow-luxe hover:scale-[1.02] transition",
							children: [
								/* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }),
								" ",
								t("hero.cta_primary")
							]
						}), /* @__PURE__ */ jsx("a", {
							href: "#resultados",
							className: "inline-flex items-center gap-2 rounded-full border border-ink/20 bg-cream/60 backdrop-blur px-7 py-4 font-medium hover:bg-cream transition",
							children: t("hero.cta_secondary")
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex items-center gap-6",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-1",
							children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-5 w-5 fill-gold text-gold" }, i))
						}), /* @__PURE__ */ jsxs("div", {
							className: "text-sm",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-semibold text-ink",
								children: t("hero.rating_main")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground",
								children: t("hero.rating_sub")
							})]
						})]
					})
				]
			}), /* @__PURE__ */ jsx(Reveal, {
				className: "relative",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute -inset-6 bg-gradient-to-br from-gold/20 to-nude/40 rounded-[2.5rem] blur-2xl" }),
						/* @__PURE__ */ jsx("img", {
							src: hero_default,
							alt: "Bella Brow Studio",
							width: 1536,
							height: 1280,
							className: "relative rounded-[2rem] shadow-luxe object-cover aspect-[4/5] w-full"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute -bottom-6 -left-6 bg-cream rounded-2xl shadow-luxe p-5 flex items-center gap-3 max-w-[240px]",
							children: [/* @__PURE__ */ jsx("div", {
								className: "h-12 w-12 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-cream" })
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: t("hero.badge_label")
								}), /* @__PURE__ */ jsx("p", {
									className: "font-display text-base text-ink leading-tight",
									children: t("hero.badge_value")
								})]
							})]
						})
					]
				})
			})]
		})]
	});
}
function Trust({ t }) {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-border/60 bg-cream/50",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8",
			children: [
				{
					num: "+2.5k",
					label: t("trust.clients")
				},
				{
					num: "8+",
					label: t("trust.years")
				},
				{
					num: "15+",
					label: t("trust.certs")
				},
				{
					num: "98%",
					label: t("trust.satisfaction")
				}
			].map((i) => /* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "font-display text-3xl md:text-4xl text-gradient-gold",
					children: i.num
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1 text-xs md:text-sm tracking-widest uppercase text-muted-foreground",
					children: i.label
				})]
			}, i.label))
		})
	});
}
function About({ wa, t }) {
	const bullets = [
		{
			icon: Heart,
			t: t("about.b1")
		},
		{
			icon: Sparkles,
			t: t("about.b2")
		},
		{
			icon: Sofa,
			t: t("about.b3")
		},
		{
			icon: Gem,
			t: t("about.b4")
		}
	];
	return /* @__PURE__ */ jsx("section", {
		id: "sobre",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx("img", {
					src: specialist_default,
					alt: "Bella",
					width: 1024,
					height: 1280,
					loading: "lazy",
					className: "rounded-[2rem] shadow-luxe object-cover aspect-[4/5] w-full"
				}), /* @__PURE__ */ jsx("div", {
					className: "absolute -top-5 -right-5 h-24 w-24 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center text-cream font-display text-center text-sm leading-tight whitespace-pre-line",
					children: t("about.years_badge")
				})]
			}) }), /* @__PURE__ */ jsxs(Reveal, {
				delay: 120,
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs tracking-[0.3em] uppercase text-gold-deep",
						children: t("about.kicker")
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "mt-3 font-display text-4xl md:text-5xl text-ink leading-tight",
						children: [
							t("about.title_1"),
							" ",
							/* @__PURE__ */ jsx("em", {
								className: "text-gradient-gold not-italic",
								children: t("about.title_em")
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-muted-foreground leading-relaxed",
						children: t("about.body")
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-8 grid sm:grid-cols-2 gap-4",
						children: bullets.map((b) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-3 rounded-2xl border border-border bg-cream/40 px-4 py-3",
							children: [/* @__PURE__ */ jsx(b.icon, { className: "h-5 w-5 text-gold-deep shrink-0" }), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium text-ink",
								children: b.t
							})]
						}, b.t))
					}),
					/* @__PURE__ */ jsxs("a", {
						href: wa,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:bg-ink transition",
						children: [
							/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
							" ",
							t("about.cta")
						]
					})
				]
			})]
		})
	});
}
function Services({ wa, t }) {
	const services = [
		{
			key: "design",
			icon: Palette,
			price: "R$ 80"
		},
		{
			key: "henna",
			icon: Leaf,
			price: "R$ 95"
		},
		{
			key: "lamination",
			icon: Brush,
			price: "R$ 180"
		},
		{
			key: "micro",
			icon: Wand2,
			price: "R$ 850"
		},
		{
			key: "maintenance",
			icon: Heart,
			price: "R$ 60"
		},
		{
			key: "consult",
			icon: Eye,
			price: "R$ 120"
		}
	];
	return /* @__PURE__ */ jsx("section", {
		id: "servicos",
		className: "py-24 md:py-32 bg-gradient-nude",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [
				/* @__PURE__ */ jsxs(Reveal, {
					className: "text-center max-w-2xl mx-auto",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-xs tracking-[0.3em] uppercase text-gold-deep",
							children: t("services.kicker")
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "mt-3 font-display text-4xl md:text-5xl text-ink",
							children: [
								t("services.title_1"),
								" ",
								/* @__PURE__ */ jsx("em", {
									className: "text-gradient-gold not-italic",
									children: t("services.title_em")
								}),
								" ",
								t("services.title_2")
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-muted-foreground",
							children: t("services.subtitle")
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
					children: services.map((s, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ jsxs("article", {
							className: "group h-full rounded-3xl bg-card border border-border p-8 shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-all duration-500",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "h-14 w-14 rounded-2xl bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center mb-6 group-hover:scale-110 transition",
									children: /* @__PURE__ */ jsx(s.icon, { className: "h-7 w-7 text-cream" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-2xl text-ink",
									children: t(`services.items.${s.key}.title`)
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm text-muted-foreground leading-relaxed",
									children: t(`services.items.${s.key}.desc`)
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 flex items-center justify-between border-t border-border pt-4",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs uppercase tracking-widest text-muted-foreground",
										children: t("services.from")
									}), /* @__PURE__ */ jsx("span", {
										className: "font-display text-xl text-gold-deep",
										children: s.price
									})]
								})
							]
						})
					}, s.key))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-14 text-center",
					children: /* @__PURE__ */ jsxs("a", {
						href: wa,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium hover:bg-ink shadow-luxe transition",
						children: [
							/* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }),
							" ",
							t("services.cta")
						]
					})
				})
			]
		})
	});
}
function BeforeAfterSection({ t }) {
	const items = [
		{
			before: before1_default,
			after: after1_default,
			label: t("results.labels.henna")
		},
		{
			before: before2_default,
			after: after2_default,
			label: t("results.labels.lamination")
		},
		{
			before: before3_default,
			after: after3_default,
			label: t("results.labels.custom")
		}
	];
	return /* @__PURE__ */ jsx("section", {
		id: "resultados",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "text-center max-w-2xl mx-auto",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs tracking-[0.3em] uppercase text-gold-deep",
						children: t("results.kicker")
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "mt-3 font-display text-4xl md:text-5xl text-ink",
						children: [
							t("results.title_1"),
							" ",
							/* @__PURE__ */ jsx("em", {
								className: "text-gradient-gold not-italic",
								children: t("results.title_em")
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-muted-foreground",
						children: t("results.subtitle")
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: items.map((it, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ jsx(BeforeAfter, {
						before: it.before,
						after: it.after,
						label: it.label,
						beforeLabel: t("results.before"),
						afterLabel: t("results.after")
					})
				}, i))
			})]
		})
	});
}
function Benefits({ t }) {
	const items = [
		{
			key: "natural",
			icon: Sparkles
		},
		{
			key: "personal",
			icon: Heart
		},
		{
			key: "cert",
			icon: Award
		},
		{
			key: "comfort",
			icon: Sofa
		},
		{
			key: "premium",
			icon: Gem
		},
		{
			key: "satisfaction",
			icon: Smile
		}
	];
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 md:py-32 bg-ink text-cream",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "text-center max-w-2xl mx-auto",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs tracking-[0.3em] uppercase text-gold",
					children: t("benefits.kicker")
				}), /* @__PURE__ */ jsxs("h2", {
					className: "mt-3 font-display text-4xl md:text-5xl",
					children: [
						t("benefits.title_1"),
						" ",
						/* @__PURE__ */ jsx("em", {
							className: "text-gradient-gold not-italic",
							children: t("benefits.title_em")
						})
					]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: items.map((b, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ jsxs("div", {
						className: "rounded-3xl border border-cream/10 bg-cream/5 backdrop-blur p-7 h-full hover:bg-cream/10 transition",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "h-12 w-12 rounded-2xl bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center mb-5",
								children: /* @__PURE__ */ jsx(b.icon, { className: "h-6 w-6 text-ink" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-xl",
								children: t(`benefits.items.${b.key}.title`)
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-cream/70 leading-relaxed",
								children: t(`benefits.items.${b.key}.desc`)
							})
						]
					})
				}, b.key))
			})]
		})
	});
}
function Testimonials({ t }) {
	const [idx, setIdx] = useState(0);
	const photos = [
		client1_default,
		client2_default,
		client3_default
	];
	const items = t("testimonials.items", { returnObjects: true }) || [];
	const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
	const next = () => setIdx((i) => (i + 1) % items.length);
	return /* @__PURE__ */ jsx("section", {
		id: "depoimentos",
		className: "py-24 md:py-32 bg-gradient-nude",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-5xl mx-auto px-6",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "text-center",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs tracking-[0.3em] uppercase text-gold-deep",
					children: t("testimonials.kicker")
				}), /* @__PURE__ */ jsxs("h2", {
					className: "mt-3 font-display text-4xl md:text-5xl text-ink",
					children: [
						t("testimonials.title_1"),
						" ",
						/* @__PURE__ */ jsx("em", {
							className: "text-gradient-gold not-italic",
							children: t("testimonials.title_em")
						})
					]
				})]
			}), /* @__PURE__ */ jsxs(Reveal, {
				className: "mt-14",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ jsx("div", {
								className: "flex transition-transform duration-700 ease-out",
								style: { transform: `translateX(-${idx * 100}%)` },
								children: items.map((it, i) => /* @__PURE__ */ jsx("div", {
									className: "min-w-full px-2",
									children: /* @__PURE__ */ jsxs("article", {
										className: "bg-card rounded-3xl shadow-luxe p-8 md:p-12 text-center max-w-3xl mx-auto",
										children: [
											/* @__PURE__ */ jsx("img", {
												src: photos[i % photos.length],
												alt: it.name,
												loading: "lazy",
												width: 96,
												height: 96,
												className: "mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-gold/30"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "mt-4 flex justify-center gap-1",
												children: [...Array(5)].map((_, j) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }, j))
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "mt-6 font-display text-xl md:text-2xl text-ink leading-snug italic",
												children: [
													"“",
													it.text,
													"”"
												]
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mt-6 text-sm tracking-widest uppercase text-muted-foreground",
												children: it.name
											})
										]
									})
								}, i))
							})
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: prev,
							"aria-label": t("testimonials.prev"),
							className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 h-12 w-12 rounded-full bg-cream shadow-soft flex items-center justify-center hover:bg-gold hover:text-cream transition",
							children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: next,
							"aria-label": t("testimonials.next"),
							className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 h-12 w-12 rounded-full bg-cream shadow-soft flex items-center justify-center hover:bg-gold hover:text-cream transition",
							children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5" })
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-8 flex justify-center gap-2",
					children: items.map((_, i) => /* @__PURE__ */ jsx("button", {
						onClick: () => setIdx(i),
						"aria-label": `${i + 1}`,
						className: `h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold-deep" : "w-2 bg-ink/20"}`
					}, i))
				})]
			})]
		})
	});
}
function CTA({ wa, t }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 md:py-32 relative overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-gold/20 via-nude to-cream" }), /* @__PURE__ */ jsxs(Reveal, {
			className: "relative max-w-4xl mx-auto px-6 text-center",
			children: [
				/* @__PURE__ */ jsx(ShieldCheck, { className: "h-10 w-10 text-gold-deep mx-auto" }),
				/* @__PURE__ */ jsxs("h2", {
					className: "mt-6 font-display text-4xl md:text-6xl text-ink leading-[1.05]",
					children: [
						t("cta.title_1"),
						" ",
						/* @__PURE__ */ jsx("em", {
							className: "text-gradient-gold not-italic",
							children: t("cta.title_em")
						}),
						" ",
						t("cta.title_2")
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 text-lg text-muted-foreground max-w-xl mx-auto",
					children: t("cta.subtitle")
				}),
				/* @__PURE__ */ jsxs("a", {
					href: wa,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-10 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-9 py-5 text-lg font-medium hover:bg-ink shadow-luxe hover:scale-[1.03] transition",
					children: [
						/* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" }),
						" ",
						t("cta.button")
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-xs tracking-widest uppercase text-muted-foreground",
					children: t("cta.note")
				})
			]
		})]
	});
}
function Footer({ wa, t }) {
	return /* @__PURE__ */ jsxs("footer", {
		id: "contato",
		className: "bg-ink text-cream/80",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ jsxs("span", {
								className: "font-display text-2xl text-cream",
								children: [
									"Bella",
									/* @__PURE__ */ jsx("span", {
										className: "text-gold",
										children: " Brow"
									}),
									" Studio"
								]
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-sm leading-relaxed max-w-sm",
							children: t("footer.tagline")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex gap-3",
							children: [/* @__PURE__ */ jsx("a", {
								href: "https://instagram.com",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "Instagram",
								className: "h-10 w-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-ink transition",
								children: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" })
							}), /* @__PURE__ */ jsx("a", {
								href: wa,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "WhatsApp",
								className: "h-10 w-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-ink transition",
								children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" })
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-xs uppercase tracking-[0.25em] text-gold mb-4",
					children: t("footer.visit")
				}), /* @__PURE__ */ jsxs("p", {
					className: "flex items-start gap-2 text-sm whitespace-pre-line",
					children: [/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 mt-0.5 shrink-0 text-gold" }), t("footer.address")]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-xs uppercase tracking-[0.25em] text-gold mb-4",
					children: t("footer.hours")
				}), /* @__PURE__ */ jsxs("p", {
					className: "flex items-start gap-2 text-sm whitespace-pre-line",
					children: [/* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 mt-0.5 shrink-0 text-gold" }), t("footer.hours_value")]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-cream/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-6 py-6 text-xs text-cream/50 flex flex-wrap justify-between gap-3",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Bella Brow Studio. ",
					t("footer.rights")
				] }), /* @__PURE__ */ jsx("p", { children: t("footer.made") })]
			})
		})]
	});
}
function FloatWA({ wa, t }) {
	return /* @__PURE__ */ jsxs("a", {
		href: wa,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "WhatsApp",
		className: "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-4 shadow-luxe hover:scale-105 transition-transform duration-300",
		children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("span", {
			className: "hidden sm:inline font-medium",
			children: t("whatsapp.float")
		})]
	});
}
//#endregion
export { Landing as t };
