import React, { useEffect, useRef, useState } from "react";

function EtfNavlinks({ anchorLinks, activeLink, setActiveLink }) {
    const [isFixed, setIsFixed] = useState(false);
    const [navWrapperTopPosition, setNavWrapperTopPosition] = useState(null);
    const navWrapperRef = useRef(null);

    useEffect(() => {
        // const navWrapper = document.getElementById("navlinks");
        // console.log(navWrapper.getBoundingClientRect().top);
        // console.log(navWrapperRef.current?.getBoundingClientRect().y);
        // setNavWrapperTopPosition(navWrapperRef.current?.getBoundingClientRect().y);
        setNavWrapperTopPosition(400);
    }, []);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const keyDataSection = document.getElementById('keyData');
    //         const aboutSection = document.getElementById('about');
    //         const dividendsSection = document.getElementById('dividend');
    //         const segmentationSection = document.getElementById('segmentation');

    //         const sections = [keyDataSection, aboutSection, dividendsSection, segmentationSection]

    //         sections.forEach((section) => {
    //             const sectionTop = section.offsetTop;
    //             if (window.pageYOffset >= sectionTop) {
    //                 setActiveLink(section.getAttribute("id"));
    //                 setTimeout(() => {
    //                 }, 200);
    //             }
    //         })
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [window.location.hash]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;
            const sections = document.querySelectorAll('section[id]');
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionBottom = sectionTop + sectionHeight;
                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    window.history.replaceState(null, '', `#${section.id}`);
                    setActiveLink(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        function handleScroll2() {
            if (window.scrollY > navWrapperTopPosition) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll2);
        window.addEventListener("touchmove", handleScroll2);

        return () => {
            window.removeEventListener("scroll", handleScroll2);
            window.removeEventListener("touchmove", handleScroll2);
        };
    }, [isFixed]);

    return (
        <div className={`${isFixed ? "fixed top-0 left-0 bg-white dark:bg-bg-dark-secondary pt-1 z-[100] px-4 shadow-md dark:shadow-white/5" : "relative"} w-full`} ref={navWrapperRef}>
            <div className="block tableBrkpt:hidden absolute bg-gradient-to-l from-white dark:from-bg-dark-secondary rounded-lg w-24 top-0 h-full right-0 z-50 pointer-events-none" />
            <nav className={`flex items-center justify-between w-full overflow-x-auto styled-scrollbar relative snap-x snap-mandatory pb-1 ${isFixed ? "max-w-[1200px] mx-auto" : ""}`} id="navlinks">
                {anchorLinks.map(link => (
                    <a key={link.goto} href={`#${link.goto}`} className={`text-center w-full py-2 rounded-md transition-all min-w-[200px] snap-start ${activeLink === link.goto ? "bg-light-gray dark:bg-bg-dark-hover" : ""}`} >
                        {link.text}
                    </a>
                ))}
            </nav>
        </div>
    );
}

export default EtfNavlinks;
