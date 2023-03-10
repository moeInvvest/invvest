const styles = {
    boxWidth: "xl:max-w-[1280px] w-full mx-auto",
    secondaryButton: "py-2 px-3 outline outline-2 rounded-md outline-primary-clr dark:outline-bg-light text-primary-clr dark:text-text-light transition-all xl:hover:bg-secondary-btn-hover xl:dark:hover:outline-primary-clr-hover xl:dark:hover:bg-transparent xl:dark:hover:text-primary-clr font-bold",
    primaryButton: "py-2 px-3 outline outline-2 rounded-md outline-primary-clr bg-primary-clr text-bg-light  xl:hover:bg-primary-clr-hover xl:hover:outline-primary-clr-hover transition-all font-bold",
    inputClasses: "bg-secondary-btn-hover w-full py-4 px-4 rounded-xl dark:bg-bg-dark-hover outline-[0.5px] outline-primary-clr",

    section: "mt-8 mx-0 sm:mx-4 py-6 px-4 sm:px-8 bg-white dark:bg-bg-dark-secondary rounded-2xl xl:rounded-3xl shadow-headerBox dark:shadow-darkHeaderBox",
    boxBgBsRounded: "bg-white dark:bg-bg-dark-secondary rounded-2xl xl:rounded-3xl shadow-headerBox dark:shadow-darkHeaderBox",
    heading: "font-extrabold font-graphik text-xl"
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;