import GrowthBarChart from "./Templates/GrowthBarChart";

function OperatingIncomeCashFlowsGrowth({ stock }) {
    const labels = stock.operatingIncomesCashFlows.map(data => data.calendarYear);
    const operatingIncomesData = stock.operatingIncomesCashFlows.map(data => data.growthOperatingIncome);
    const freeCashFlowData = stock.operatingIncomesCashFlows.map(data => data.growthFreeCashFlow);

    return (
        <GrowthBarChart
            labels={labels}
            dataset1={{ title: "Croissance bénéf. ope.", data: operatingIncomesData }}
            dataset2={{ title: "Croissance FCF", data: freeCashFlowData }}
            title="Croissance bénéfice opérationnel & Free cash flow"
        />
    );
}

export default OperatingIncomeCashFlowsGrowth;
