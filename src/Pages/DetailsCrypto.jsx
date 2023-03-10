import React from "react";
import { RecentlyViewed } from "../Components";
import { BlueBannerCryptoDetails, CryptoAbout, CryptoKeyData, CryptoNews, CryptoTeam } from "../Components/DetailsCrypto";
import { crypto } from "../Components/DetailsCrypto/DummyData";

function DetailsCrypto() {
    return (
        <BlueBannerCryptoDetails crypto={crypto}>
            <CryptoKeyData crypto={crypto} />
            <CryptoAbout crypto={crypto} />
            <CryptoTeam crypto={crypto} />
            <CryptoNews crypto={crypto} />
            <RecentlyViewed />
        </BlueBannerCryptoDetails>
    );
}

export default DetailsCrypto;
