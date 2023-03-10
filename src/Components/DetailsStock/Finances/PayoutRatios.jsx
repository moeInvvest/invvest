import RegularBarChart from "./Templates/RegularBarChart";

function PayoutRatios({ stock }) {
    const labels = stock.payoutRatios.map(data => data.calendarYear);
    const data1 = stock.payoutRatios.map(data => data.payoutRatio);

    return <RegularBarChart
        labels={labels}
        dataset1={{ title: "Ratio de distribution", data: data1 }}
        title="Ratio de distribution"
        typeOfData="percentage"
    />;
}

export default PayoutRatios;
