import React from "react";
import styles from "../../../Styles";
import { formatCash } from "../../../Utils";

function ManagementTeam({ stock }) {
    return (
        <section className={`mt-8 mx-0 sm:mx-4 py-6 bg-white dark:bg-bg-dark-secondary rounded-2xl xl:rounded-3xl shadow-headerBox dark:shadow-darkHeaderBox flex-1`}>
            <h2 className={`${styles.heading} text-2xl mb-8 px-4 sm:px-8`}>Management</h2>
            <div className="w-full">
                <div className="flex items-center w-full gap-4 px-4 sm:px-8 py-4 bg-[#eee] dark:bg-bg-dark-hover">
                    <h2 className="flex-[4]">Nom</h2>
                    <h2 className="hidden md:block flex-1">Depuis</h2>
                    <h2 className="flex-[3] text-right">Rémunération</h2>
                </div>
                <div className="w-full">
                    {stock.keyExecutives.map((member, i) => (
                        <div key={i} className="flex items-center w-full gap-4 px-4 sm:px-8 py-3 border-b border-gray-200 dark:border-opacity-20">
                            <div className="flex flex-col items-start flex-[4]">
                                <h2 className="flex-[4]">{member.name}</h2>
                                <h2 className="text-gray-400 text-sm">{member.title}</h2>
                            </div>
                            <h2 className="hidden md:block flex-1">{Math.abs((new Date().getFullYear() - new Date(member.titleSince).getFullYear()))} ans</h2>
                            <h2 className="flex-[3] text-right">{formatCash(member.pay, "nonDecimal", "$")}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManagementTeam;
