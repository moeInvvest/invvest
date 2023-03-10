import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginGoogleIcon, LoginFacebookIcon, LoginFacebookIconNM, LoginGoogleIconNM } from "../Assets";
import { ThemeContext } from "../Contexts/ThemeContext";
import styles from "../Styles";

const LoginSocialIcons = [{ icon: LoginGoogleIcon, iconNM: LoginGoogleIconNM }, { icon: LoginFacebookIcon, iconNM: LoginFacebookIconNM }];

function Login() {
    const { globalTheme } = useContext(ThemeContext);

    return (
        <div className={`${styles.boxWidth} px-4 py-12 xl:py-24 flex items-center justify-center`}>
            <div className="flex flex-col gap-12 xl:gap-20 xl:flex-row w-[100%] md:w-[80%]">
                <div className="flex flex-col items-start pt-0 xl:pt-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-graphikBold text-transparent bg-clip-text bg-gradient-to-r from-[#46A1E3] to-[#5943DF] break-keep">Ravis <br className="hidden xl:block" />de vous revoir !</h1>
                    <h2 className="mt-8 font-bold text-xl">Connectez-vous pour accéder à votre compte.</h2>
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
                        <button className={`${styles.primaryButton} px-8 mt-4 flex items-center justify-center gap-4 w-full sm:w-auto`}>Se connecter <i className="fa-solid fa-arrow-right"></i></button>
                    </form>
                    <Link to="/forgot-password" className="text-primary-clr dark:text-text-light w-full text-center">Mot de passe oublié</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
