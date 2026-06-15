import i18n from "i18next";
import { initReactI18next } from "react-i18next";
var pt_default = {
	nav: {
		"home": "Início",
		"about": "Sobre",
		"services": "Serviços",
		"results": "Resultados",
		"testimonials": "Depoimentos",
		"contact": "Contato",
		"book": "Agendar"
	},
	hero: {
		"badge": "Bella Brow Studio",
		"title_1": "Sobrancelhas",
		"title_em": "perfeitas",
		"title_2": "para valorizar sua beleza natural",
		"subtitle": "Design personalizado para harmonizar seu rosto e destacar seu olhar — com técnica refinada, produtos premium e o cuidado que você merece.",
		"cta_primary": "Agendar pelo WhatsApp",
		"cta_secondary": "Ver Resultados",
		"rating_main": "5.0 · +2.500 clientes",
		"rating_sub": "satisfeitas com o resultado",
		"badge_label": "Premiado",
		"badge_value": "Top Studio 2025"
	},
	trust: {
		"clients": "Clientes atendidas",
		"years": "Anos de experiência",
		"certs": "Certificações",
		"satisfaction": "Satisfação"
	},
	about: {
		"kicker": "Sobre a Especialista",
		"title_1": "Cada olhar é uma",
		"title_em": "obra única",
		"body": "Sou Bella Ferreira, especialista em design de sobrancelhas com mais de 8 anos transformando rostos por todo o Brasil. Formada nas mais renomadas escolas de visagismo e atualizada constantemente em técnicas internacionais, dedico cada atendimento a realçar o que há de mais belo em você.",
		"b1": "Atendimento personalizado",
		"b2": "Técnicas modernas",
		"b3": "Ambiente confortável",
		"b4": "Produtos premium",
		"cta": "Conversar comigo",
		"years_badge": "8+ anos\nde arte"
	},
	services: {
		"kicker": "Nossos Serviços",
		"title_1": "Tratamentos",
		"title_em": "sob medida",
		"title_2": "para você",
		"subtitle": "Uma carta completa de procedimentos premium para realçar sua beleza.",
		"from": "A partir de",
		"cta": "Agendar meu horário",
		"items": {
			"design": {
				"title": "Design de Sobrancelhas",
				"desc": "Modelagem personalizada que harmoniza com seu formato facial."
			},
			"henna": {
				"title": "Henna",
				"desc": "Coloração natural que preenche falhas e realça o desenho."
			},
			"lamination": {
				"title": "Brow Lamination",
				"desc": "Fios alinhados, volume e efeito penteado por semanas."
			},
			"micro": {
				"title": "Micropigmentação",
				"desc": "Técnica fio a fio para sobrancelhas naturais e duradouras."
			},
			"maintenance": {
				"title": "Manutenção",
				"desc": "Retoques periódicos para manter o design impecável."
			},
			"consult": {
				"title": "Consultoria Facial",
				"desc": "Análise de visagismo personalizada para seu olhar."
			}
		}
	},
	results: {
		"kicker": "Antes & Depois",
		"title_1": "Resultados que",
		"title_em": "falam por si",
		"subtitle": "Arraste o controle para revelar a transformação. Cada cliente, uma nova história.",
		"before": "Antes",
		"after": "Depois",
		"labels": {
			"henna": "Design + Henna",
			"lamination": "Brow Lamination",
			"custom": "Design Personalizado"
		}
	},
	benefits: {
		"kicker": "Por que Bella Brow",
		"title_1": "Excelência em",
		"title_em": "cada detalhe",
		"items": {
			"natural": {
				"title": "Resultado Natural",
				"desc": "Design que realça sua beleza sem exageros."
			},
			"personal": {
				"title": "Atendimento Personalizado",
				"desc": "Cada cliente recebe atenção exclusiva."
			},
			"cert": {
				"title": "Profissional Certificada",
				"desc": "Mais de 8 anos de experiência e cursos."
			},
			"comfort": {
				"title": "Ambiente Confortável",
				"desc": "Espaço acolhedor pensado para você relaxar."
			},
			"premium": {
				"title": "Produtos Premium",
				"desc": "Marcas de alta qualidade e hipoalergênicas."
			},
			"satisfaction": {
				"title": "Alta Satisfação",
				"desc": "+98% das clientes voltam e indicam."
			}
		}
	},
	testimonials: {
		"kicker": "Depoimentos",
		"title_1": "O que dizem nossas",
		"title_em": "clientes",
		"prev": "Anterior",
		"next": "Próximo",
		"items": [
			{
				"name": "Mariana Souza",
				"text": "A Bella transformou meu olhar! Resultado natural e impecável, atendimento maravilhoso do início ao fim."
			},
			{
				"name": "Carolina Martins",
				"text": "Profissional excepcional. O design ficou perfeito para o meu rosto, recebi muitos elogios. Recomendo demais!"
			},
			{
				"name": "Patricia Almeida",
				"text": "Ambiente lindo, técnica refinada e cuidado em cada detalhe. Virei cliente fiel, simplesmente apaixonada!"
			}
		]
	},
	cta: {
		"title_1": "Pronta para",
		"title_em": "transformar",
		"title_2": "seu olhar?",
		"subtitle": "Agende agora mesmo sua avaliação e descubra o design ideal para você.",
		"button": "Falar no WhatsApp",
		"note": "Resposta em poucos minutos"
	},
	footer: {
		"tagline": "Design de sobrancelhas premium. Realçando a beleza natural de cada cliente com técnica, arte e cuidado.",
		"visit": "Visite",
		"address": "Rua das Flores, 123 — Jardins\nSão Paulo, SP",
		"hours": "Horário",
		"hours_value": "Seg a Sex · 9h–19h\nSáb · 9h–17h",
		"rights": "Todos os direitos reservados.",
		"made": "Feito com cuidado · CNPJ 00.000.000/0001-00"
	},
	whatsapp: {
		"message": "Olá, gostaria de agendar um horário no Bella Brow Studio.",
		"float": "Agendar"
	},
	meta: {
		"title": "Bella Brow Studio — Design de Sobrancelhas Premium",
		"description": "Estúdio especializado em design de sobrancelhas, henna, brow lamination e micropigmentação. Realce sua beleza natural com técnicas modernas e atendimento personalizado."
	}
};
var fr_default = {
	nav: {
		"home": "Accueil",
		"about": "À propos",
		"services": "Services",
		"results": "Résultats",
		"testimonials": "Avis",
		"contact": "Contact",
		"book": "Réserver"
	},
	hero: {
		"badge": "Bella Brow Studio",
		"title_1": "Des sourcils",
		"title_em": "parfaits",
		"title_2": "pour sublimer votre beauté naturelle",
		"subtitle": "Un design personnalisé pour harmoniser votre visage et mettre votre regard en valeur — avec une technique raffinée, des produits premium et le soin que vous méritez.",
		"cta_primary": "Réserver sur WhatsApp",
		"cta_secondary": "Voir les Résultats",
		"rating_main": "5,0 · +2 500 clientes",
		"rating_sub": "satisfaites du résultat",
		"badge_label": "Primé",
		"badge_value": "Top Studio 2025"
	},
	trust: {
		"clients": "Clientes servies",
		"years": "Ans d'expérience",
		"certs": "Certifications",
		"satisfaction": "Satisfaction"
	},
	about: {
		"kicker": "À propos de l'experte",
		"title_1": "Chaque regard est une",
		"title_em": "œuvre unique",
		"body": "Je suis Bella Ferreira, spécialiste en design de sourcils avec plus de 8 ans d'expérience. Formée dans les meilleures écoles de visagisme et constamment à jour sur les techniques internationales, je consacre chaque rendez-vous à révéler ce qu'il y a de plus beau en vous.",
		"b1": "Service personnalisé",
		"b2": "Techniques modernes",
		"b3": "Environnement confortable",
		"b4": "Produits premium",
		"cta": "Discuter avec moi",
		"years_badge": "8+ ans\nd'art"
	},
	services: {
		"kicker": "Nos Services",
		"title_1": "Des soins",
		"title_em": "sur mesure",
		"title_2": "pour vous",
		"subtitle": "Une carte complète de prestations premium pour révéler votre beauté.",
		"from": "À partir de",
		"cta": "Réserver mon rendez-vous",
		"items": {
			"design": {
				"title": "Design de Sourcils",
				"desc": "Modelage personnalisé qui harmonise votre visage."
			},
			"henna": {
				"title": "Henné",
				"desc": "Coloration naturelle qui comble les manques et sublime le tracé."
			},
			"lamination": {
				"title": "Brow Lamination",
				"desc": "Poils alignés, volume et effet coiffé pour plusieurs semaines."
			},
			"micro": {
				"title": "Microblading",
				"desc": "Technique poil à poil pour des sourcils naturels et durables."
			},
			"maintenance": {
				"title": "Entretien",
				"desc": "Retouches régulières pour un design toujours impeccable."
			},
			"consult": {
				"title": "Consultation Visage",
				"desc": "Analyse visagiste personnalisée pour votre regard."
			}
		}
	},
	results: {
		"kicker": "Avant & Après",
		"title_1": "Des résultats qui",
		"title_em": "parlent d'eux-mêmes",
		"subtitle": "Glissez le curseur pour révéler la transformation. Chaque cliente, une nouvelle histoire.",
		"before": "Avant",
		"after": "Après",
		"labels": {
			"henna": "Design + Henné",
			"lamination": "Brow Lamination",
			"custom": "Design Personnalisé"
		}
	},
	benefits: {
		"kicker": "Pourquoi Bella Brow",
		"title_1": "L'excellence dans",
		"title_em": "chaque détail",
		"items": {
			"natural": {
				"title": "Résultat Naturel",
				"desc": "Un design qui sublime sans en faire trop."
			},
			"personal": {
				"title": "Service Personnalisé",
				"desc": "Chaque cliente reçoit une attention unique."
			},
			"cert": {
				"title": "Professionnelle Certifiée",
				"desc": "Plus de 8 ans d'expérience et de formations."
			},
			"comfort": {
				"title": "Cadre Confortable",
				"desc": "Un espace pensé pour votre détente."
			},
			"premium": {
				"title": "Produits Premium",
				"desc": "Des marques haut de gamme et hypoallergéniques."
			},
			"satisfaction": {
				"title": "Haute Satisfaction",
				"desc": "+98% des clientes reviennent et recommandent."
			}
		}
	},
	testimonials: {
		"kicker": "Avis",
		"title_1": "Ce que disent nos",
		"title_em": "clientes",
		"prev": "Précédent",
		"next": "Suivant",
		"items": [
			{
				"name": "Mariana Souza",
				"text": "Bella a transformé mon regard ! Résultat naturel et impeccable, un service merveilleux du début à la fin."
			},
			{
				"name": "Carolina Martins",
				"text": "Professionnelle exceptionnelle. Le design est parfait pour mon visage, j'ai reçu tellement de compliments !"
			},
			{
				"name": "Patricia Almeida",
				"text": "Bel espace, technique raffinée et soin du détail. Je suis devenue cliente fidèle, tout simplement conquise !"
			}
		]
	},
	cta: {
		"title_1": "Prête à",
		"title_em": "transformer",
		"title_2": "votre regard ?",
		"subtitle": "Réservez votre consultation dès maintenant et découvrez le design idéal pour vous.",
		"button": "Parler sur WhatsApp",
		"note": "Réponse en quelques minutes"
	},
	footer: {
		"tagline": "Design de sourcils premium. Révéler la beauté naturelle de chaque cliente avec technique, art et soin.",
		"visit": "Visitez",
		"address": "Rue des Fleurs, 123 — Jardins\nSão Paulo, Brésil",
		"hours": "Horaires",
		"hours_value": "Lun. au Ven. · 9h–19h\nSam. · 9h–17h",
		"rights": "Tous droits réservés.",
		"made": "Conçu avec soin · CNPJ 00.000.000/0001-00"
	},
	whatsapp: {
		"message": "Bonjour, je souhaite prendre rendez-vous au Bella Brow Studio.",
		"float": "Réserver"
	},
	meta: {
		"title": "Bella Brow Studio — Design de Sourcils Premium",
		"description": "Studio spécialisé en design de sourcils, henné, brow lamination et microblading. Sublimez votre beauté naturelle avec des techniques modernes et un service personnalisé."
	}
};
//#endregion
//#region src/i18n/index.ts
function detectInitial() {
	if (typeof window === "undefined") return "pt";
	const stored = localStorage.getItem("lang");
	if (stored === "pt" || stored === "fr") return stored;
	return (navigator.language || "").toLowerCase().startsWith("fr") ? "fr" : "pt";
}
if (!i18n.isInitialized) i18n.use(initReactI18next).init({
	resources: {
		pt: { translation: pt_default },
		fr: { translation: fr_default }
	},
	lng: detectInitial(),
	fallbackLng: "pt",
	interpolation: { escapeValue: false }
});
function setLanguage(lang) {
	if (typeof window !== "undefined") localStorage.setItem("lang", lang);
	i18n.changeLanguage(lang);
	if (typeof document !== "undefined") document.documentElement.lang = lang;
}
//#endregion
export { setLanguage as t };
