import RegularBarChart from "./Templates/RegularBarChart";

function RevenueNetIncomeBar({ stock }) {
    const labels = stock.revenueNetIncome.map(data => data.calendarYear);
    const revenuesData = stock.revenueNetIncome.map(data => data.revenue);
    const netIncomeData = stock.revenueNetIncome.map(data => data.netIncome);

    return (
        <RegularBarChart
            labels={labels}
            dataset1={{ title: "Chiffre d'affaires", data: revenuesData }}
            dataset2={{ title: "Bénéfice net", data: netIncomeData }}
            title={"Chiffre d'affaires & bénéfice net"}
            typeOfData="shorthandPrice" />
    );
}

export default RevenueNetIncomeBar;
