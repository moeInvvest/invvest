import React from "react";
import { defaultTeamMemberAvatar } from "../../../Assets";
import styles from "../../../Styles";

function CryptoTeam({ crypto }) {
    return (
        <section className={`${styles.section} pb-8`}>
            <h2 className={`${styles.heading} text-2xl mb-8`}>Équipe</h2>
            <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                {crypto.team.map(teamMember => (
                    <article key={teamMember.id} className="flex items-start gap-4">
                        <img src={defaultTeamMemberAvatar} alt={teamMember.name} className="w-10 aspect-square object-cover" />
                        <div className="flex flex-col items-start text-gray-500 dark:text-gray-300">
                            <h3 className="text-sm text-gray-400">{teamMember.position}</h3>
                            <h2 className="font-bold text-md sm:text-xl truncate">{teamMember.name}</h2>
                        </div>
                    </article>
                ))}
            </section>
        </section>
    );
}

export default CryptoTeam;
