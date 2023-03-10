import RegularBarChart from "./Templates/RegularBarChart";

function OperatingIncomeCashFlows({ stock }) {
    const labels = stock.operatingIncomesCashFlows.map(data => data.calendarYear);
    const operatingIncomesData = stock.operatingIncomesCashFlows.map(data => data.operatingIncome);
    const freeCashFlowData = stock.operatingIncomesCashFlows.map(data => data.freeCashFlow);

    return (
        <RegularBarChart
            labels={labels}
            dataset1={{ title: "Bénéfice opérationnel", data: operatingIncomesData }}
            dataset2={{ title: "Free cash flow", data: freeCashFlowData }}
            title={"Bénéfice opérationnel & Free cash flow"}
            typeOfData="shorthandPrice" />
    );
}

export default OperatingIncomeCashFlows;
