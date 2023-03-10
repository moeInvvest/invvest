import styles from "../../../Styles";
import Margins from "./Margins";
import NetIncomeFreeCashFlowPerShare from "./NetIncomeFreeCashFlowPerShare";
import OperatingIncomeCashFlows from "./OperatingIncomeCashFlows";
import OperatingIncomeCashFlowsGrowth from "./OperatingIncomeCashFlowsGrowth";
import PayoutRatios from "./PayoutRatios";
import Ratios from "./Ratios";
import ResearchAndDevelopmentExpenses from "./ResearchAndDevelopmentExpenses";
import RevenueNetIncome from "./RevenueNetIncome";
import RevenueNetIncomeGrowth from "./RevenueNetIncomeGrowth";

function Finances({ stock }) {
    return (
        <section className={`${styles.section}`}>
            <h2 className={`${styles.heading} text-2xl mb-8`}>Finances</h2>
            <div className="flex flex-col gap-24 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
                    <RevenueNetIncome stock={stock} />
                    <RevenueNetIncomeGrowth stock={stock} />
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <OperatingIncomeCashFlows stock={stock} />
                    <OperatingIncomeCashFlowsGrowth stock={stock} />
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <NetIncomeFreeCashFlowPerShare stock={stock} />
                    <Margins stock={stock} />
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <ResearchAndDevelopmentExpenses stock={stock} />
                    <Ratios stock={stock} />
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <PayoutRatios stock={stock} />
                    <div className="flex-1"></div>
                </div>
            </div>
        </section>
    );
};

export default Finances;
