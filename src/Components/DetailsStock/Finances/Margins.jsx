
import RegularBarChart from "./Templates/RegularBarChart";

function Margins({ stock }) {
    const labels = stock.margins.map(data => data.calendarYear);
    const data1 = stock.margins.map(data => data.operatingIncomeRatio);
    const data2 = stock.margins.map(data => data.netIncomeRatio);

    return <RegularBarChart
        labels={labels}
        dataset1={{ title: "Marge opérationnelle", data: data1 }}
        dataset2={{ title: "Marge nette", data: data2 }}
        title="Marge opérationnelle & nette"
        typeOfData="percentage"
    />;
}

export default Margins;
