import React from "react";
import styles from "../Styles";

function ForgotPassword() {
    return (
        <div className={`${styles.boxWidth} px-4 py-12 xl:py-24 flex items-center justify-center`}>
            <div className="flex flex-col gap-12 xl:gap-20 xl:flex-row xl:flex-between w-[100%] md:w-[80%] pb-36">
                <div className="flex flex-col items-start pt-0 xl:pt-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-graphikBold text-transparent bg-clip-text bg-gradient-to-r from-[#46A1E3] to-[#5943DF] break-keep">Mot de passe <br className="hidden xl:block" />oublié ?</h1>
                    <h2 className="mt-8 font-bold text-xl">Pas de souci. Réinitialisez-le ici 👉</h2>
                </div>
                <div className="bg-white dark:bg-bg-dark-secondary p-5 xl:p-8 flex flex-col items-center gap-4 rounded-2xl xl:rounded-3xl shadow-headerBox w-full lg:w-[450px] xl:ml-auto">
                    <form className="flex flex-col items-center w-full gap-3">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            autoComplete="off"
                            className={styles.inputClasses}
                        />
                        <button className={`${styles.primaryButton} px-8 mt-4 flex items-center justify-center gap-4 w-full sm:w-auto`}>Réinitialiser le mot de passe <i className="fa-solid fa-arrow-right"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
