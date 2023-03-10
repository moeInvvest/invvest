import RegularBarChart from "./Templates/RegularBarChart";

function ResearchAndDevelopmentExpenses({ stock }) {
    const labels = stock.researchAndDevelopmentExpenses.map(data => data.calendarYear);
    const data1 = stock.researchAndDevelopmentExpenses.map(data => data.researchAndDevelopmentExpenses);

    return <RegularBarChart
        labels={labels}
        dataset1={{ title: "Dépenses R&D", data: data1 }}
        title="Dépenses recherche et dévélopement"
        typeOfData="shorthandPrice"
    />;
}

export default ResearchAndDevelopmentExpenses;
