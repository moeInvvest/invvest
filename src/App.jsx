import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header } from "./Components";
import {
  Homepage,
  Login,
  Signup,
  ForgotPassword,
  DiscoursForum,
  ScreenerStocks,
  ScreenerETFs,
  ScreenerCryptos,
  About,
  Privacy,
  Pricing,
  TermsAndConditions,
  TrendETF,
  TrendCrypto,
  PublicPortfolios,
  ContactUs,
  SharedPortfolios,
  WatchList,
  Portfolio,
  CreatePortfolio,
  EditPortfolio,
  MySubscription,
  Dashboard,
  DividendsForecast,
  AdvancedDiversification,
  DividendsCalendar,
  TrendStock,
  Page404,
  ResetPassword,
  DetailsStock,
  DetailsETF,
  DetailsCrypto
} from "./Pages";

import {
  Chart as ChartJS,
} from 'chart.js/auto';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [location]);
  return (
    <div className="w-full flex flex-col items-center min-h-screen justify-between">
      <main className="flex flex-col w-full">
        <Header />
        <i className={`fa-solid fa-arrow-up fixed bottom-10 right-10 flex items-center justify-center rounded-full w-10 h-10 dark:bg-[#eee] bg-[#333] cursor-pointer text-white dark:text-black z-50 ${showTopBtn ? "flex" : "hidden"}`} onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}></i>
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* SCREENERS */}
          <Route path="/stocks" element={<ScreenerStocks />} />
          <Route path="/etf" element={<ScreenerETFs />} />
          <Route path="/crypto" element={<ScreenerCryptos />} />

          <Route path="/portfolios" element={<PublicPortfolios />} />
          <Route path="/trends-stock" element={<TrendStock />} />
          <Route path="/trends-etf" element={<TrendETF />} />
          <Route path="/trends-crypto" element={<TrendCrypto />} />
          <Route path="/about" element={<About />} />
          <Route path="/pro" element={<Pricing />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<Privacy />} />

          <Route path="/stock/:ticker" element={<DetailsStock />} />
          <Route path="/etf/:ticker" element={<DetailsETF />} />
          <Route path="/crypto/:ticker" element={<DetailsCrypto />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path='*' element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
