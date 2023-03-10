export function getNumberSign(num) {
    if (num > 0) {
        return "+"
    } else if (num === 0) {
        return "";
    } else {
        return "-"
    }
};

export function getNumber(num) {
    let onlyNumVar;
    if (num < 0) {
        const onlyNum = num.toLocaleString().split("-")[1];
        onlyNumVar = onlyNum;
    } else {
        onlyNumVar = num
    }
    return onlyNumVar.toString().replace(".", ",");
};

export function getScoreColor(num) {
    if (num === undefined) {
        return "bg-gray-300"
    }
    if (num >= 17 && num <= 20) {
        return "bg-[#098600]";
    } else if (num >= 13 && num <= 16) {
        return "bg-[#7DB33D]";
    } else if (num >= 9 && num <= 12) {
        return "bg-[#d0d801]";
    } else if (num >= 5 && num <= 8) {
        return "bg-[#d88f01]";
    } else if (num >= 0 && num <= 4) {
        return "bg-[#da2d2d]";
    }
};

export function getPERColor(PER, form) {
    if (form === "bg") {
        if (PER <= 20) return "bg-[#098600]";
        if (PER > 20 && PER <= 30) return "bg-[#d88f01]";
        else return "bg-[#da2d2d]";
    } else {
        if (PER <= 20) return "text-[#098600]";
        if (PER > 20 && PER <= 30) return "text-[#d88f01]";
        else return "text-[#da2d2d]";
    }
};

// export const currencyFormatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
// });

export const currencyFormatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 15
});

export const currencyFormatterDecimal = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
});

export function formatCash(cash, format, unit) {
    let finalCash;
    if (format === "nonDecimal") {
        finalCash = currencyFormatter.format(cash).split(",")[0];
    } else {
        finalCash = currencyFormatter.format(cash);
    }

    if (unit === "$") {
        finalCash = "$" + finalCash.split("€")[0];
    }

    return finalCash;
}

export const currencyFormatterEuro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
});

export function formatCashShorthand(n, unit) {
    if (n < 1e3) return `$${n}`;
    if (n >= 1e3 && n < 1e6) return `$${formatFrenchNumber(+(n / 1e3).toFixed(1))} K`;
    if (n >= 1e6 && n < 1e9) return `$${formatFrenchNumber(+(n / 1e6).toFixed(1))} mln`;
    if (n >= 1e9) return `$${formatFrenchNumber(+(n / 1e9).toFixed(1))} mds`;
};

export function getESGScoreColor(score) {
    if (score === undefined) {
        return "bg-gray-300"
    }
    if (score === "A+" || score === "A") {
        return "bg-[#098600]";
    } else if (score === "A-" || score === "B+") {
        return "bg-[#7DB33D]";
    } else if (score === "B" || score === "B-") {
        return "bg-[#d0d801]";
    } else if (score === "C+" || score === "C") {
        return "bg-[#d88f01]";
    } else if (score === "C-" || score === "D") {
        return "bg-[#da2d2d]";
    }
};


export function percentageBubble(num) {
    return (
        <div className={`text-left py-1 px-2 rounded-lg font-bold w-max flex gap-1 ${num >= 0 ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}>
            <span>{getNumberSign(num)}</span>
            <span>{getNumber(num)}</span>
            <span>%</span>
        </div>
    )
};

export function getPercentageString(num) {
    return (
        <h3 className="font-bold flex gap-1">
            <span>{getNumberSign(num)}</span>
            <span>{getNumber(num)}</span>
            <span>%</span>
        </h3>
    )
}

export function formatFrenchDate(date, short) {
    const mois = ["jan", "fev", "mars", "avr", "mai", "juin", "juil", "août", "sept", "oct", "nov", "dec"]

    let year = date.getFullYear();
    let dayNumber = date.getDate();
    let month = mois[date.getMonth()];
    if (short) return `${month} ${year}`
    return `${dayNumber} ${month} ${year}`;
};

export function formatFrenchNumber(number) {
    if (number !== undefined) {
        return number.toLocaleString('fr-FR');
    } else {
        return null
    }
};

export function createGradient(ctx, colors, deg) {
    const gradient = ctx.createLinearGradient(0, 0, 0, deg || 600);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);
    return gradient;
};
