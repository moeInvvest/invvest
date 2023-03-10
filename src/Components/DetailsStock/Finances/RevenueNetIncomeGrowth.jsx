import GrowthBarChart from "./Templates/GrowthBarChart";

function RevenueNetIncomeGrowth({ stock }) {
    const labels = stock.revenueNetIncome.map(data => data.calendarYear);
    const revenuesGrowthData = stock.revenueNetIncome.map(data => data.growthRevenue);
    const netIncomeGrowthData = stock.revenueNetIncome.map(data => data.growthNetIncome);

    return (
        <GrowthBarChart
            labels={labels}
            dataset1={{ title: "Croissance CA", data: revenuesGrowthData }}
            dataset2={{ title: "Croissance Benef. net", data: netIncomeGrowthData }}
            title="Croissance chiffre d'affaires & bénéfice net"
        />
    );
}

export default RevenueNetIncomeGrowth;
