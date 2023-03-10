import { iconBusiness, iconEmail, iconForum, iconHello, iconLocation, iconSupport } from "../Assets";
import { BlueHeroBanner } from "../Components";
import styles from "../Styles";

function ContactUs() {
    const heading = {
        title: "Contactez-nous",
        paragraph: "Notre équipe est à votre entière disposition pour répondre à toutes vos questions et suggestions."
    }

    return (
        <div>
            <BlueHeroBanner heading={heading}>
                <section className={`mx-0 sm:mx-4 sm:px-8 mt-0 relative z-[2] flex flex-col gap-5`}>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="flex flex-col justify-between bg-white shadow-headerBox dark:shadow-darkHeaderBox dark:bg-bg-dark-secondary p-6 sm:p-9 gap-6 sm:gap-9 rounded-2xl xl:rounded-3xl flex-1">
                            <div className="flex items-center gap-4">
                                <img src={iconForum} alt="Aide générale" className="w-12 h-12 object-cover" />
                                <h2 className="font-bold text-xl">Aide générale</h2>
                            </div>
                            <p>L'équipe et des milliers d'investisseurs échangent et s'entraident sur le forum de discussion. C'est le meilleur endroit pour poser vos questions d'ordre général, proposer des suggestions et signaler des bugs.</p>
                            <button className={`${styles.primaryButton} flex gap-2 items-center justify-center`}>Voir le forum <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                        <div className="flex flex-col justify-between bg-white shadow-headerBox dark:shadow-darkHeaderBox dark:bg-bg-dark-secondary p-6 sm:p-9 gap-6 sm:gap-9 rounded-2xl xl:rounded-3xl flex-1">
                            <div className="flex items-center gap-4">
                                <img src={iconSupport} alt="Aide technique" className="w-12 h-12 object-cover" />
                                <h2 className="font-bold text-xl">Aide technique</h2>
                            </div>
                            <p>Si vous avez besoin de réponses ou d'une aide relative à votre compte, vos données ou votre abonnement, notre support technique est là pour vous à l'adresse email suivante :</p>
                            <a href="mailto:support@invvest.co" className="underline flex items-center gap-2 mb-1">
                                <img src={iconEmail} alt="Support" className="w-8 h-8 object-cover" />
                                support@invvest.co
                            </a>
                        </div>
                        <div className="flex flex-col justify-between bg-white shadow-headerBox dark:shadow-darkHeaderBox dark:bg-bg-dark-secondary p-6 sm:p-9 gap-6 sm:gap-9 rounded-2xl xl:rounded-3xl flex-1">
                            <div className="flex items-center gap-4">
                                <img src={iconBusiness} alt="Business" className="w-12 h-12 object-cover" />
                                <h2 className="font-bold text-xl">Business</h2>
                            </div>
                            <p>Nous sommes toujours à l'affût d'opportunité de synergies pour proposer le meilleur outil de gestion de patrimoine. Pour toute proposition, n'hésitez pas à nous envoyer un message à :</p>
                            <a href="mailto:business@invvest.co" className="underline flex items-center gap-2 mb-1">
                                <img src={iconEmail} alt="email" className="w-8 h-8 object-cover" />
                                business@invvest.co
                            </a>
                        </div>
                    </div>
                    <section className="grid lg:grid-cols-3 items-center p-6 sm:p-9 gap-8 sm:shadow-cardShadow rounded-2xl xl:rounded-3xl bg-white shadow-headerBox dark:shadow-darkHeaderBox dark:bg-bg-dark-secondary">
                        <div className="flex items-center gap-2">
                            <img src={iconHello} alt="help" className="w-12 h-12 object-cover" />
                            <h2 className="font-bold text-xl">Pour dire bonjour</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={iconLocation} alt="location" className="w-12 h-12 object-cover" />
                            <p>Talinn, Estonie</p>
                        </div>
                        <a href="mailto:hello@invvest.co" className="underline flex items-center gap-2 ">
                            <img src={iconEmail} alt="email" className="w-12 h-12 object-cover" />
                            hello@invvest.co
                        </a>
                    </section>
                </section>
            </BlueHeroBanner>
        </div >
    );
};

export default ContactUs;
