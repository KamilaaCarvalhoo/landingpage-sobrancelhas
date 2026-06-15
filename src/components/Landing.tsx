import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Sparkles, Star, MessageCircle, Instagram, MapPin, Clock,
  Leaf, Palette, Brush, Wand2, Heart, Eye, Award,
  Sofa, Gem, Smile, ChevronLeft, ChevronRight, ShieldCheck,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import specialistImg from "@/assets/specialist.jpg";
import before1 from "@/assets/before1.jpg";
import after1 from "@/assets/after1.jpg";
import before2 from "@/assets/before2.jpg";
import after2 from "@/assets/after2.jpg";
import before3 from "@/assets/before3.jpg";
import after3 from "@/assets/after3.jpg";
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";
import client3 from "@/assets/client3.jpg";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Reveal } from "@/components/Reveal";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { setLanguage, type Lang } from "@/i18n";

const PHONE = "5511999999999";

function whatsappUrl(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export function Landing({ lang }: { lang?: Lang }) {
  const { t, i18n } = useTranslation();
  const [, setTick] = useState(0);

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      setLanguage(lang);
      setTick((n) => n + 1);
    }
  }, [lang, i18n.language]);

  const waMsg = t("whatsapp.message");
  const wa = whatsappUrl(waMsg);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav wa={wa} t={t} />
      <Hero wa={wa} t={t} />
      <Trust t={t} />
      <About wa={wa} t={t} />
      <Services wa={wa} t={t} />
      <BeforeAfterSection t={t} />
      <Benefits t={t} />
      <Testimonials t={t} />
      <CTA wa={wa} t={t} />
      <Footer wa={wa} t={t} />
      <FloatWA wa={wa} t={t} />
    </div>
  );
}

type T = ReturnType<typeof useTranslation>["t"];

function Nav({ wa, t }: { wa: string; t: T }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <Sparkles className="h-5 w-5 text-gold-deep" />
          <span className="font-display text-xl tracking-wide">Bella<span className="text-gold-deep"> Brow</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#top" className="hover:text-foreground transition">{t("nav.home")}</a>
          <a href="#sobre" className="hover:text-foreground transition">{t("nav.about")}</a>
          <a href="#servicos" className="hover:text-foreground transition">{t("nav.services")}</a>
          <a href="#resultados" className="hover:text-foreground transition">{t("nav.results")}</a>
          <a href="#depoimentos" className="hover:text-foreground transition">{t("nav.testimonials")}</a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LanguageSwitcher />
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-ink transition"
          >
            <MessageCircle className="h-4 w-4" /> {t("nav.book")}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ wa, t }: { wa: string; t: T }) {
  return (
    <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-32 bg-gradient-nude">
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.78 0.09 75 / 0.25), transparent 50%), radial-gradient(circle at 80% 60%, oklch(0.85 0.04 65 / 0.4), transparent 60%)" }} />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/60 px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-gold-deep">
            <Sparkles className="h-3 w-3" /> {t("hero.badge")}
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-ink">
            {t("hero.title_1")} <em className="text-gradient-gold not-italic">{t("hero.title_em")}</em> {t("hero.title_2")}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium hover:bg-ink shadow-luxe hover:scale-[1.02] transition">
              <MessageCircle className="h-5 w-5" /> {t("hero.cta_primary")}
            </a>
            <a href="#resultados"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-cream/60 backdrop-blur px-7 py-4 font-medium hover:bg-cream transition">
              {t("hero.cta_secondary")}
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-gold text-gold" />)}
            </div>
            <div className="text-sm">
              <p className="font-semibold text-ink">{t("hero.rating_main")}</p>
              <p className="text-muted-foreground">{t("hero.rating_sub")}</p>
            </div>
          </div>
        </div>

        <Reveal className="relative">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-gold/20 to-nude/40 rounded-[2.5rem] blur-2xl" />
            <img
              src={heroImg}
              alt="Bella Brow Studio"
              width={1536}
              height={1280}
              className="relative rounded-[2rem] shadow-luxe object-cover aspect-[4/5] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-cream rounded-2xl shadow-luxe p-5 flex items-center gap-3 max-w-[240px]">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center shrink-0">
                <Award className="h-6 w-6 text-cream" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{t("hero.badge_label")}</p>
                <p className="font-display text-base text-ink leading-tight">{t("hero.badge_value")}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Trust({ t }: { t: T }) {
  const items = [
    { num: "+2.5k", label: t("trust.clients") },
    { num: "8+", label: t("trust.years") },
    { num: "15+", label: t("trust.certs") },
    { num: "98%", label: t("trust.satisfaction") },
  ];
  return (
    <section className="border-y border-border/60 bg-cream/50">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((i) => (
          <div key={i.label} className="text-center">
            <p className="font-display text-3xl md:text-4xl text-gradient-gold">{i.num}</p>
            <p className="mt-1 text-xs md:text-sm tracking-widest uppercase text-muted-foreground">{i.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About({ wa, t }: { wa: string; t: T }) {
  const bullets = [
    { icon: Heart, t: t("about.b1") },
    { icon: Sparkles, t: t("about.b2") },
    { icon: Sofa, t: t("about.b3") },
    { icon: Gem, t: t("about.b4") },
  ];
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img src={specialistImg} alt="Bella" width={1024} height={1280} loading="lazy"
              className="rounded-[2rem] shadow-luxe object-cover aspect-[4/5] w-full" />
            <div className="absolute -top-5 -right-5 h-24 w-24 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center text-cream font-display text-center text-sm leading-tight whitespace-pre-line">
              {t("about.years_badge")}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <span className="text-xs tracking-[0.3em] uppercase text-gold-deep">{t("about.kicker")}</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink leading-tight">
            {t("about.title_1")} <em className="text-gradient-gold not-italic">{t("about.title_em")}</em>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">{t("about.body")}</p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {bullets.map((b) => (
              <li key={b.t} className="flex items-center gap-3 rounded-2xl border border-border bg-cream/40 px-4 py-3">
                <b.icon className="h-5 w-5 text-gold-deep shrink-0" />
                <span className="text-sm font-medium text-ink">{b.t}</span>
              </li>
            ))}
          </ul>
          <a href={wa} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:bg-ink transition">
            <MessageCircle className="h-4 w-4" /> {t("about.cta")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Services({ wa, t }: { wa: string; t: T }) {
  const services = [
    { key: "design", icon: Palette, price: "R$ 80" },
    { key: "henna", icon: Leaf, price: "R$ 95" },
    { key: "lamination", icon: Brush, price: "R$ 180" },
    { key: "micro", icon: Wand2, price: "R$ 850" },
    { key: "maintenance", icon: Heart, price: "R$ 60" },
    { key: "consult", icon: Eye, price: "R$ 120" },
  ];
  return (
    <section id="servicos" className="py-24 md:py-32 bg-gradient-nude">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-deep">{t("services.kicker")}</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
            {t("services.title_1")} <em className="text-gradient-gold not-italic">{t("services.title_em")}</em> {t("services.title_2")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("services.subtitle")}</p>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.key} delay={i * 80}>
              <article className="group h-full rounded-3xl bg-card border border-border p-8 shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-all duration-500">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <s.icon className="h-7 w-7 text-cream" />
                </div>
                <h3 className="font-display text-2xl text-ink">{t(`services.items.${s.key}.title`)}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t(`services.items.${s.key}.desc`)}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("services.from")}</span>
                  <span className="font-display text-xl text-gold-deep">{s.price}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a href={wa} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium hover:bg-ink shadow-luxe transition">
            <MessageCircle className="h-5 w-5" /> {t("services.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection({ t }: { t: T }) {
  const items = [
    { before: before1, after: after1, label: t("results.labels.henna") },
    { before: before2, after: after2, label: t("results.labels.lamination") },
    { before: before3, after: after3, label: t("results.labels.custom") },
  ];
  return (
    <section id="resultados" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-deep">{t("results.kicker")}</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
            {t("results.title_1")} <em className="text-gradient-gold not-italic">{t("results.title_em")}</em>
          </h2>
          <p className="mt-4 text-muted-foreground">{t("results.subtitle")}</p>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 100}>
              <BeforeAfter before={it.before} after={it.after} label={it.label}
                beforeLabel={t("results.before")} afterLabel={t("results.after")} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits({ t }: { t: T }) {
  const items = [
    { key: "natural", icon: Sparkles },
    { key: "personal", icon: Heart },
    { key: "cert", icon: Award },
    { key: "comfort", icon: Sofa },
    { key: "premium", icon: Gem },
    { key: "satisfaction", icon: Smile },
  ];
  return (
    <section className="py-24 md:py-32 bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">{t("benefits.kicker")}</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            {t("benefits.title_1")} <em className="text-gradient-gold not-italic">{t("benefits.title_em")}</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((b, i) => (
            <Reveal key={b.key} delay={i * 70}>
              <div className="rounded-3xl border border-cream/10 bg-cream/5 backdrop-blur p-7 h-full hover:bg-cream/10 transition">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center mb-5">
                  <b.icon className="h-6 w-6 text-ink" />
                </div>
                <h3 className="font-display text-xl">{t(`benefits.items.${b.key}.title`)}</h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">{t(`benefits.items.${b.key}.desc`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ t }: { t: T }) {
  const [idx, setIdx] = useState(0);
  const photos = [client1, client2, client3];
  const items = (t("testimonials.items", { returnObjects: true }) as { name: string; text: string }[]) || [];
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setIdx((i) => (i + 1) % items.length);
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-gradient-nude">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-deep">{t("testimonials.kicker")}</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
            {t("testimonials.title_1")} <em className="text-gradient-gold not-italic">{t("testimonials.title_em")}</em>
          </h2>
        </Reveal>
        <Reveal className="mt-14">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${idx * 100}%)` }}>
                {items.map((it, i) => (
                  <div key={i} className="min-w-full px-2">
                    <article className="bg-card rounded-3xl shadow-luxe p-8 md:p-12 text-center max-w-3xl mx-auto">
                      <img src={photos[i % photos.length]} alt={it.name} loading="lazy" width={96} height={96}
                        className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-gold/30" />
                      <div className="mt-4 flex justify-center gap-1">
                        {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}
                      </div>
                      <p className="mt-6 font-display text-xl md:text-2xl text-ink leading-snug italic">“{it.text}”</p>
                      <p className="mt-6 text-sm tracking-widest uppercase text-muted-foreground">{it.name}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prev} aria-label={t("testimonials.prev")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 h-12 w-12 rounded-full bg-cream shadow-soft flex items-center justify-center hover:bg-gold hover:text-cream transition">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} aria-label={t("testimonials.next")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 h-12 w-12 rounded-full bg-cream shadow-soft flex items-center justify-center hover:bg-gold hover:text-cream transition">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {items.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold-deep" : "w-2 bg-ink/20"}`} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTA({ wa, t }: { wa: string; t: T }) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-nude to-cream" />
      <Reveal className="relative max-w-4xl mx-auto px-6 text-center">
        <ShieldCheck className="h-10 w-10 text-gold-deep mx-auto" />
        <h2 className="mt-6 font-display text-4xl md:text-6xl text-ink leading-[1.05]">
          {t("cta.title_1")} <em className="text-gradient-gold not-italic">{t("cta.title_em")}</em> {t("cta.title_2")}
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">{t("cta.subtitle")}</p>
        <a href={wa} target="_blank" rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-9 py-5 text-lg font-medium hover:bg-ink shadow-luxe hover:scale-[1.03] transition">
          <MessageCircle className="h-6 w-6" /> {t("cta.button")}
        </a>
        <p className="mt-4 text-xs tracking-widest uppercase text-muted-foreground">{t("cta.note")}</p>
      </Reveal>
    </section>
  );
}

function Footer({ wa, t }: { wa: string; t: T }) {
  return (
    <footer id="contato" className="bg-ink text-cream/80">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold" />
            <span className="font-display text-2xl text-cream">Bella<span className="text-gold"> Brow</span> Studio</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-sm">{t("footer.tagline")}</p>
          <div className="mt-6 flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="h-10 w-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-ink transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="h-10 w-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-ink transition">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{t("footer.visit")}</h4>
          <p className="flex items-start gap-2 text-sm whitespace-pre-line">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
            {t("footer.address")}
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{t("footer.hours")}</h4>
          <p className="flex items-start gap-2 text-sm whitespace-pre-line">
            <Clock className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
            {t("footer.hours_value")}
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-cream/50 flex flex-wrap justify-between gap-3">
          <p>© {new Date().getFullYear()} Bella Brow Studio. {t("footer.rights")}</p>
          <p>{t("footer.made")}</p>
        </div>
      </div>
    </footer>
  );
}

function FloatWA({ wa, t }: { wa: string; t: T }) {
  return (
    <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-4 shadow-luxe hover:scale-105 transition-transform duration-300">
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">{t("whatsapp.float")}</span>
    </a>
  );
}

export default Landing;
