import React from "react";
import { gabrielImage, moeImage, sebastienImage } from "../Assets";
import { BlueHeroBanner } from "../Components";

function About() {
    const heading = {
        title: "Invvest pour tous",
        paragraph: "Tous les jours, nous simplifions la vie à des milliers d'investisseurs à travers le monde."
    }

    const teamMembers = [
        {
            picture: sebastienImage,
            name: "Sébastien",
            role: "CEO"
        },
        {
            picture: gabrielImage,
            name: "Gabriel",
            role: "CFO"
        },
        {
            picture: moeImage,
            name: "Moe",
            role: "Lead engineer"
        }
    ];

    const socialLinks = [
        {
            icon: "fa-brands fa-twitter",
            text: "Twitter",
            goto: "https://twitter.com"
        },
        {
            icon: "fa-brands fa-linkedin-in",
            text: "Linkedin",
            goto: "https://linkedin.com"
        },
        {
            icon: "fa-brands fa-youtube",
            text: "Youtube",
            goto: "https://youtube.com"
        },
        {
            icon: "fa-brands fa-instagram",
            text: "Instagram",
            goto: "https://instagram.com"
        },
        {
            icon: "fa-brands fa-facebook",
            text: "Facebook",
            goto: "https://facebook.com"
        },
    ]

    return (
        <BlueHeroBanner heading={heading}>
            <div className={`mx-0 sm:mx-4 relative z-[2] flex flex-col`}>
                <div className="flex flex-col lg:flex-row gap-4">
                    <article className="p-10 mt-0 bg-white dark:bg-bg-dark-secondary rounded-2xl xl:rounded-3xl shadow-headerBox dark:shadow-darkHeaderBox flex flex-col gap-4 flex-[1.5]">
                        <p>Avez-vous remarqué qu'investir est de plus en plus accessible mais pas forcément de plus en plus facile ? Vous n'êtes pas seul. Les jargons techniques sont toujours les mêmes, les graphiques toujours aussi incompréhensible et le bruit ambiant toujours aussi bruyant.</p>

                        <p>C'est en partant de ce constat que nous, Sébastien et Gabriel, avons eu l'idée en 2020 de créer Invvest. La plateforme qui redonne confiance et clarté aux investisseurs.</p>

                        <p>Que ce soit pour suivre vos investissements, déceler de nouvelles opportunités ou vous connecter aux investisseurs qui vous ressemblent, Invvest vous accompagne facilement où que vous soyez dans votre aventure financière.</p>

                        <p>Tout le monde devrait pouvoir investir. Mais nous allons plus loin : nous croyons que tout le monde devrait pouvoir MIEUX investir. Cette croyance est notre raison d'être.</p>
                    </article>
                    <aside className="py-6 px-4 sm:px-8 mt-0 bg-white dark:bg-bg-dark-secondary rounded-2xl xl:rounded-3xl shadow-headerBox dark:shadow-darkHeaderBox flex-[0.5]">
                        <h1 className="font-bold text-2xl mb-8">Suivez-nous</h1>
                        <div className="flex items-center justify-between flex-wrap lg:flex-col lg:items-start gap-4">
                            {socialLinks.map(link => (
                                <a key={link.text} href={link.goto} target="_blank" className="flex items-center gap-2">
                                    <i className={`${link.icon} text-2xl text-gray-500 min-w-[30px]`}></i>
                                    <p>{link.text}</p>
                                </a>
                            ))}
                        </div>
                    </aside>
                </div>

                <h2 className="text-3xl font-extrabold font-graphikBold text-transparent bg-clip-text bg-gradient-to-r from-[#46A1E3] to-[#5943DF] text-center mt-16 mb-8 mx-4">À la rencontre de l'équipe</h2>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    {teamMembers.map(member => (
                        <div key={member.name} className="bg-white shadow-headerBox dark:shadow-darkHeaderBox dark:bg-bg-dark-secondary p-6 sm:p-9 rounded-2xl xl:rounded-3xl flex-1 flex flex-col items-center justify-center">
                            <img src={member.picture} alt={member.role} className="rounded-full w-48 h-48" />
                            <h3 className="font-bold text-xl mt-4 mb-2">{member.name}</h3>
                            <h4 className="">{member.role}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </BlueHeroBanner >
    );
};

export default About;
