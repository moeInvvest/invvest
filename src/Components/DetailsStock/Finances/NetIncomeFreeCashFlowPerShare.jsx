import RegularBarChart from "./Templates/RegularBarChart";

function NetIncomeFreeCashFlowPerShare({ stock }) {
    const labels = stock.keyMetrics.map(data => data.calendarYear);
    const data1 = stock.keyMetrics.map(data => data.epsdiluted);
    const data2 = stock.keyMetrics.map(data => data.freeCashFlowPerShare);

    return <RegularBarChart
        labels={labels}
        dataset1={{ title: "Bénéfice net / action", data: data1 }}
        dataset2={{ title: "FCF / action", data: data2 }}
        title="Bénéfice net & Free cash flow / action"
        typeOfData="price"
    />;
}

export default NetIncomeFreeCashFlowPerShare;
