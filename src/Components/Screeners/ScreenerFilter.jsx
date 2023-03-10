import { Popover } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { iconPro } from "../../Assets";
import ScreenerSearchInput from "./ScreenerSearchInput";
import ScreenerSortBy from "./ScreenerSortBy";

import 'swiper/css';
import 'swiper/css/navigation';
import styles from "../../Styles";
import { Navigation } from "swiper";

function RangeFilter() {
    return (
        <div className="px-2 py-0.5 w-full z-20">
            <input type="range" name="" id="" className="h-10 w-full" />
        </div>
    )
};

function CheckBoxesFilter({ option }) {
    return (
        <div className="flex gap-2 w-full px-2 py-1.5 z-20">
            <input type="checkbox" name="" id={option.value} className="w-4" />
            <label htmlFor={option.value} className="flex-1 cursor-pointer">{Object.values(option)[0]}</label>
        </div>
    )
};

function ScreenerFilter({ sortByOptions, placeholder, filters, breakpoints, fixedAlone }) {
    const [isFixed, setIsFixed] = useState(false);
    const [filtersWrapperTopPosition, setFiltersWrapperTopPosition] = useState(null);
    const filtersWrapperRef = useRef(null);

    useEffect(() => {
        setFiltersWrapperTopPosition(filtersWrapperRef.current?.offsetTop);
    }, []);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > filtersWrapperTopPosition) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll);
        };
    }, [isFixed]);

    return (
        <section className={`${styles.section} flex flex-col gap-4 items-start max-h-[160px] xm:max-h-[272px] md:max-h-[232px] xl:max-h-[160px] ${isFixed ? "overflow-x-hidden" : ""}`}>
            <div className="flex justify-between flex-col gap-4 xl:gap-1 xl:flex-row w-full">
                <ScreenerSearchInput placeholder={placeholder} />
                <ScreenerSortBy sortByOptions={sortByOptions} />
            </div>
            <div className={`w-full ${isFixed ? `${fixedAlone ? "shadow-md dark:shadow-white/10" : ""} fixed top-0 left-0 py-4 px-4 xxl:px-40 overflow-x-hidden z-[11] bg-white dark:bg-bg-dark-secondary` : ""}`}>
                <div className={`flex items-start gap-4 w-full overflow-x-hidden`} ref={filtersWrapperRef}>
                    <div className="flex items-center gap-2 mt-2">
                        <img src="https://moning.co/images/icons/filter.svg" alt="filters" />
                        <h3 className="hidden xm:flex whitespace-nowrap">Filtres :</h3>
                    </div>
                    <Swiper className="flex items-center justify-center w-full relative"
                        modules={[Navigation]}
                        spaceBetween={10}
                        breakpoints={breakpoints}
                        centeredSlides={false}>
                        <div className="absolute top-0 bg-gradient-to-l from-white/80 dark:from-bg-dark-secondary w-20 lg:w-44 h-[40px] right-0 z-50 rounded-r-0 pointer-events-none" />
                        {filters.map((filter) => (
                            <SwiperSlide key={filter.filterBy} className={`flex items-center justify-center flex-nowrap whitespace-nowrap w-max gap-2 rounded-xl transition-all ${filter.proOnly ? "bg-bg-yellow dark:text-text-dark hover:bg-bg-yellow-darker" : "bg-light-gray hover:bg-darker-gray dark:bg-bg-dark-hover"}`}>
                                <Popover className="relative w-full">
                                    <Popover.Button className="flex items-center justify-center gap-2 p-2 focus:outline-none w-full disabled:cursor-not-allowed" disabled={filter.proOnly}>
                                        <span className="whitespace-nowrap">{filter.filterBy}</span>
                                        {filter.proOnly && <img src={iconPro} alt="pro-icon" className="w-4 h-4 object-cover" />}
                                    </Popover.Button>
                                    <Popover.Panel className={`flex bg-light-gray dark:bg-bg-dark-hover dark:text-text-light rounded-b-lg shadow-md ${filter.options ? "flex-col items-start" : "items-center justify-center"} overflow-hidden`}>
                                        <Popover.Overlay className="fixed inset-0 top-0 left-0 w-screen z-10" />
                                        {
                                            filter.options ? filter.options.map((option, idx) =>
                                            (
                                                <CheckBoxesFilter key={idx} option={option} />
                                            )) :
                                                <RangeFilter />
                                        }
                                    </Popover.Panel>
                                </Popover>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    );
};

export default ScreenerFilter;
