import React, { useEffect, useState } from "react";

function CounterSection() {
  const [marketCap, setMarketCap] = useState("Loading...");

  const getMarketCap = async () => {
    try {
      const response = await fetch(
        "https://api.dexscreener.com/latest/dex/tokens/0xb72E76cCf005313868DB7b48070901a44629da98"
      );
      const data = await response.json();

      if (data && data.pairs && data.pairs.length > 0) {
        const marketCapValue =
          (data.pairs[0].marketCap / 1000000).toFixed(1) + " M";
        setMarketCap(marketCapValue);
      } else {
        setMarketCap("N/A");
      }
    } catch (error) {
      console.error("Error fetching market cap:", error);
      setMarketCap("Error");
    }
  };

  useEffect(() => {
    getMarketCap();
    const interval = setInterval(getMarketCap, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="counter-section">
      <div className="counter-boxes">
        <div className="counter-box">
          <h2>+23k</h2>
          <h4>Holders</h4>
        </div>
        <div className="counter-box">
          <h2>+500k</h2>
          <h4>Transactions</h4>
        </div>
        <div className="counter-box">
          <h2>{marketCap}</h2>
          <h4>Market Cap</h4>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
