import React from "react";

function CounterSection() {
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
          <h2>70.3 M NaN</h2>
          <h4>Market Cap</h4>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
