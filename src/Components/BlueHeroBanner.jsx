import React from "react";
import styles from "../Styles";

function BlueHeroBanner({
    heading: {
        title,
        paragraph
    }, children }) {
    return (
        <div className="relative w-full">
            <div className="absolute w-full h-56 bg-gradient-to-r from-[#085BFC] to-[#004ce0] z-[1]" />
            <div className={`${styles.boxWidth} w-full mx-auto z-[2] relative`}>
                <div className="py-8 px-4 text-text-light flex flex-col items-start gap-4">
                    <h1 className="font-extrabold font-graphikBold text-3xl">{title}</h1>
                    <p>{paragraph}</p>
                </div>
                {children}
            </div>
        </div>
    );
}

export default BlueHeroBanner;
