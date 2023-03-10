import { IconFacebook, IconLinkedin, IconTwitter, IconYoutube } from "../../Assets";

export const footerLinksBlocks = [
    {
        title: "SOLUTIONS",
        links: [
            { text: "Screnner Actions", goTo: "/stocks" },
            { text: "Screener ETFs", goTo: "/etf" },
            { text: "Screnner Crypto", goTo: "/crypto" },
            { text: "Trending Actions", goTo: "/trends-stock" },
            { text: "Trending ETFs", goTo: "/trends-etf" },
            { text: "Trending Crypto", goTo: "/trends-crypto" },
        ]
    },
    {
        title: "COMMUNAUTÉ",
        links: [
            { text: "Forum de discussion", goTo: "/" },
            { text: "Portefeuilles publics", goTo: "/portfolios" },
        ]
    },
    {
        title: "INFO",
        links: [
            { text: "À propos", goTo: "/about" },
            { text: "Contact", goTo: "/contact" },
            { text: "Tarifs", goTo: "/pro" },
        ]
    },
    {
        title: "LEGAL",
        links: [
            { text: "Conditions générales", goTo: "/terms" },
            { text: "Vie privée", goTo: "/privacy" },
        ]
    }
];

export const footerMainTitle = "Tous vos investissements sous un même toit.";
export const footerSubTitle = "Utilisé par plus de 40 000 investisseurs.";

export const footerSocialIcons = [
    {
        alt: "Moning on Twitter",
        icon: IconTwitter
    },
    {
        alt: "Moning on Facebook",
        icon: IconFacebook
    },
    {
        alt: "Moning on Linkedin",
        icon: IconLinkedin
    },
    {
        alt: "Moning on Youtube",
        icon: IconYoutube
    }
];

export const subFooter = {
    main: "Invvest n'offre aucun conseil financier. Ce site et son contenu sont présentés “tel que”, sans garantie et sans tenir compte de vos objectifs, de votre situation financière ou de vos besoins. Vous assumez tous les risques associés à l'utilisation de ce site et de son contenu, y compris, sans s'y limiter, toute confiance dans l'exactitude, l'exhaustivité ou l'utilité de tout contenu disponible sur ce site.",
    copyright: "© 2023 - Invvest",
}