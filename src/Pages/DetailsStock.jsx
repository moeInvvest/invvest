import { RecentlyViewed } from "../Components";
import { BlueBannerStockDetails, Consensus, EarningsChart, Employees, Finances, InsiderTrading, InstitutionalOwnership, ManagementTeam, OutstandingShares, Segmentation, StockAbout, StockDividends, StockKeyData, Valorisation } from "../Components/DetailsStock";
import { stock } from "../Components/DetailsStock/DummyData";

function DetailsStock() {
    return (
        <BlueBannerStockDetails stock={stock}>
            <StockKeyData stock={stock} />
            <StockAbout stock={stock} />
            <div className="flex flex-col lg:flex-row">
                <EarningsChart stock={stock} />
                <Consensus stock={stock} />
            </div>
            <Valorisation stock={stock} />
            <StockDividends stock={stock} />
            <Segmentation stock={stock} />
            <Finances stock={stock} />
            <div className="flex flex-col lg:flex-row">
                <OutstandingShares stock={stock} />
                <Employees stock={stock} />
            </div>
            <div className="flex flex-col lg:flex-row">
                <ManagementTeam stock={stock} />
                <InstitutionalOwnership stock={stock} />
            </div>
            <div className="flex items-center gap-4">
                <InsiderTrading stock={stock} />
                {/* <div className="flex-1"></div> */}
            </div>
            <RecentlyViewed />
        </BlueBannerStockDetails>
    );
}

export default DetailsStock;
