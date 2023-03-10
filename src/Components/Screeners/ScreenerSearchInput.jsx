import React, { useState } from "react";
import styles from "../../Styles";

function ScreenerSearchInput({ placeholder }) {
    const [searchValue, setSearchValue] = useState("");

    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    function cancelSearchValue() {
        setSearchValue("");
    }

    return (
        <div className="flex-items-center justify-between w-full xl:w-[40%] min-w-[300px]">
            <div className="relative group w-full">
                <input
                    type="text"
                    name="searchValue"
                    id="searchValue"
                    value={searchValue}
                    onChange={(e) => handleChange(e)}
                    placeholder={placeholder}
                    className={`${styles.inputClasses} w-full pr-10`}
                />
                {searchValue.length > 0 ?
                    <label htmlFor="searchValue" className="cursor-pointer absolute top-0 right-0 text-black/50 dark:text-white/50 aspect-square flex items-center justify-center h-full" onClick={cancelSearchValue}>
                        <i className="fa-solid fa-times text-xl"></i>
                    </label>
                    :
                    <label htmlFor="searchValue" className="cursor-pointer absolute top-0 right-0 text-black/50 dark:text-white/50 aspect-square flex items-center justify-center group-focus-within:hidden h-full">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </label>
                }
            </div>
        </div>
    );
}

export default ScreenerSearchInput;
