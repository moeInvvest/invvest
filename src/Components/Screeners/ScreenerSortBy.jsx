import React, { useState } from "react";

function ScreenerSortBy({ sortByOptions }) {
    const [sortBy, setSortBy] = useState(sortByOptions[0]);
    const [highToLow, setHighToLow] = useState("descendant");

    return (
        <div className="hidden xm:flex gap-4 w-full xl:w-auto">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-sort"></i>
                    <span className="break-keep">Trier par :</span>
                </div>
                <div className="flex items-center gap-2 bg-light-gray dark:bg-bg-dark-hover rounded-xl px-2 py-2 font-bold">
                    {sortByOptions.map(option => (
                        <button
                            key={option}
                            className={`p-2 rounded-xl transition-all ${sortBy === option ? "bg-white shadow-sm dark:text-bg-dark-hover" : ""}`}
                            onClick={() => setSortBy(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            <select name="highToLow" defaultValue={highToLow} className={`bg-secondary-btn-hover dark:bg-bg-dark-hover px-2 font-bold rounded-xl cursor-pointer h-[56px] self-end`} onSelect={() => setHighToLow(prev => prev === "ascendant" ? "ascendant" : "descendant")}>
                <option value="descendant">Descendant</option>
                <option value="ascendant">Ascendant</option>
            </select>
        </div>
    );
}

export default ScreenerSortBy;
