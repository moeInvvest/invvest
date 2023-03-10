import RegularBarChart from "./Templates/RegularBarChart";

function Ratios({ stock }) {
    const labels = stock.ratios.map(data => data.calendarYear);
    const data1 = stock.ratios.map(data => data.returnOnEquity);
    const data2 = stock.ratios.map(data => data.returnOnCapitalEmployed);

    return <RegularBarChart
        labels={labels}
        dataset1={{ title: "Retour sur capitaux", data: data1 }}
        dataset2={{ title: "ROIC", data: data2 }}
        title="Retour sur capitaux & capitaux investis"
        typeOfData="percentage"
    />;
}

export default Ratios;
