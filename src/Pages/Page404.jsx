import React from "react";
import { Link } from "react-router-dom";
import { page404 } from "../Assets";
import styles from "../Styles";

function Page404() {
    return (
        <section className={`${styles.boxWidth} px-4 py-12 xl:py-24 flex items-center lg:items-start flex-col lg:flex-row justify-center gap-12 lg:gap-40`}>
            <div className="flex flex-col items-start gap-4 mt-8">
                <h1 className="text-4xl md:text-5xl font-extrabold font-graphikBold text-transparent bg-clip-text bg-gradient-to-r from-[#46A1E3] to-[#5943DF] break-keep">Oups !</h1>
                <h2 className="font-bold text-xl lg:max-w-[355px]">La page que vous recherchez semble s'être faite aspirer.</h2>
                <Link to="/" className={`${styles.primaryButton} flex gap-4 items-center mt-8`}>Page d'accueil <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div>
                <img src={page404} alt="page 404" className="max-w-[350px] max-h-[350px] sm:max-w-[412px] sm:max-h-[412px]" />
            </div>
        </section>
    );
}

export default Page404;
