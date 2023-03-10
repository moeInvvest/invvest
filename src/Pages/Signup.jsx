import React, { useContext } from "react";
import styles from "../Styles";
import { LoginGoogleIcon, LoginFacebookIcon, LoginFacebookIconNM, LoginGoogleIconNM } from "../Assets";
import { ThemeContext } from "../Contexts/ThemeContext";

const LoginSocialIcons = [{ icon: LoginGoogleIcon, iconNM: LoginGoogleIconNM }, { icon: LoginFacebookIcon, iconNM: LoginFacebookIconNM }];
const ticks = ["Suivez tous vos investissements.", "Décelez les opportunités et les risques.", "Ne manquez plus aucune actualité."]

function Signup() {
    const { globalTheme } = useContext(ThemeContext);

    return (
        <div className={`${styles.boxWidth} px-4 xl:pb-24 flex flex-col items-center justify-center`}>
            <h1 className="text-4xl md:text-5xl font-extrabold font-graphikBold text-transparent bg-clip-text bg-gradient-to-r from-[#46A1E3] to-[#5943DF] break-keep py-10 pb-14">Créer votre compte</h1>
            <div className="flex flex-col gap-12 xl:gap-20 xl:flex-row w-[100%] md:w-[80%]">
                <div className="flex flex-col items-start pt-0 xl:pt-12 xl:max-w-[355px]">
                    <h2 className="font-bold text-xl w-full text-center xl:text-left">Rejoignez plus de 40 000 investisseurs comme vous. C'est gratuit.</h2>
                    <div className="hidden xl:flex flex-col items-start gap-4 text-primary-clr font-bold mt-12">
                        {ticks.map((tick, idx) => (
                            <div key={idx} className="flex gap-3">
                                <i className="fa-solid fa-check text-white bg-primary-clr flex justify-center items-center p-1 rounded-full"></i>
                                <p>{tick}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white dark:bg-bg-dark-secondary p-5 xl:p-8 flex flex-col items-center gap-4 rounded-2xl xl:rounded-3xl shadow-headerBox xl:w-[450px] xl:ml-auto">
                    <div className="flex gap-4 justify-between items-center w-full">
                        {LoginSocialIcons.map((icon, idx) => (
                            <div className="py-4 flex items-center justify-center transition-all bg-secondary-btn-hover dark:bg-bg-dark-hover rounded-xl cursor-pointer w-full" key={idx}>
                                <img src={globalTheme === "light" ? icon.icon : icon.iconNM} alt="facebook-link" className="w-6 h-6" />
                            </div>
                        ))}
                    </div>
                    <h3 className="text-black/20 dark:text-white/20 font-bold text-lg">OU</h3>
                    <form className="flex flex-col items-center w-full gap-3">
                        <div className="flex gap-3 w-full">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Prénom"
                                required
                                autoComplete="off"
                                className={styles.inputClasses}
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Nom"
                                required
                                autoComplete="off"
                                className={styles.inputClasses}
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            autoComplete="off"
                            className={styles.inputClasses}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Mot de passe"
                            required
                            autoComplete="off"
                            className={styles.inputClasses}
                        />
                        <button className={`${styles.primaryButton} px-8 mt-4 flex items-center justify-center gap-4 w-full sm:w-auto`}>S'inscrire <i className="fa-solid fa-arrow-right"></i></button>
                    </form>
                </div>
                <div className="flex xl:hidden flex-col items-start gap-4 text-primary-clr font-bold mt-4 mb-16 w-max mx-auto">
                    {ticks.map((tick, idx) => (
                        <div key={idx} className="flex gap-3">
                            <i className="fa-solid fa-check text-white bg-primary-clr flex justify-center items-center p-1 rounded-full"></i>
                            <p>{tick}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Signup;
