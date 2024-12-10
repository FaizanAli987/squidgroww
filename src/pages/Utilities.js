import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/sections/Global/Footer";
import UtilityBox from "../components/sections/Global/UtilityBox";
import owlbanner from "../assets/images/owlbanner.png";
import inkubatebanner from "../assets/images/inkubatebanner.png";
import ikubatesm from "../assets/images/ikubatesm.png"
import knoxbanner from "../assets/images/knoxbanner.png";
import knoxsm from "../assets/images/knoxsm.png"
import sgswapsm from "../assets/images/sgswapsm.png"
import owl from "../assets/images/owl.png";
import sgswap from "../assets/images/sgswap.png";
function Utilities() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main>
        <h1 className="maintitle">Utilities</h1>
        <section className="mainutility-section">
          <UtilityBox
            desktopBackgroundImage={owlbanner}
            
            hotText="HOT"
            title="SilentSwap"
            description="Seamless swaps, ultimate privacy, and cross-chain freedom. Unlock the future of trading now. Seamless swaps, ultimate privacy, and cross-chain freedom. Unlock the future of trading now."
            buttonText="Visit Website"
            buttonLink="#"
            classn="signleutility"
            phoneimg={owl}
          />
          <UtilityBox
            desktopBackgroundImage={sgswap}
            mobileBackgroundImage={sgswapsm}
            title="SGSwap"
            description="A token exchange application that uses blockchain-based smart contracts to conduct transactions. Users can exchange tokens with each other at the market price."
            buttonText="Visit Website"
            buttonLink="#"
            classn="mainutility rightutility sgswapbox"
            phoneimg={owl}
          />
          <UtilityBox
            desktopBackgroundImage={inkubatebanner}
            mobileBackgroundImage={ikubatesm}
            title="Inkubate"
            description="NFT Trading and Collection Launchpad Platform All in one solution to create and sell your collections with ease."
            buttonText="Visit Website"
            buttonLink="#"
            classn="mainutility inkubatebox"
            phoneimg={owl}
          />
          <UtilityBox
            desktopBackgroundImage={knoxbanner}
            mobileBackgroundImage={knoxsm}
            title="Knox Locker"
            description="Designed for blue-chip & DeFi projects alike, The Knox Locker web3 interface is heavily audited for maximum security."
            buttonText="Visit Website"
            buttonLink="#"
            classn="mainutility rightutility knoxbox"
            phoneimg={owl}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Utilities;
