import React from "react";
import EchoBox from "../Global/EchoBox";
import swapphone from "../../../assets/images/swapphone.png";
import swapphonesm from "../../../assets/images/phoneimg-sm.png";
import sgsphone from "../../../assets/images/sgsphone.png";
import sgsphonesm from "../../../assets/images/sgsphonesm.png";
import nftphone from "../../../assets/images/nftphone.png";
import nftphonesm from "../../../assets/images/nftphonesm.png";

function EcosystemSection() {
  return (
    <section className="echosystem-section">
      <div className="section-header">
        <h2>SquidGrow Ecosystem</h2>
        <p>
          SquidGrow's Ecosystem has multiple products including a DEX, NFT
          Marketplace, & Liquidity Locker.
        </p>
      </div>
      <div className="echoboxes">
        <EchoBox
          headerText="SWAP"
          subHeaderText="SilentSwap"
          description="Seamless swaps, ultimate privacy, and cross-chain freedom. Unlock the future of trading now."
          imageSrc={swapphone}
          imageSrcPhone={swapphonesm}
          buttonText="View Website"
          buttonLink="https://www.silentswap.com/"
        />
        <EchoBox
          headerText="DECENTRALIZED EXCHANGE"
          subHeaderText="SGS"
          description="Trade smarter, faster, and safer with SGS. Experience the decentralized exchange redefined."
          imageSrc={sgsphone}
          imageSrcPhone={sgsphonesm}
          buttonText="View Website"
          buttonLink="https://www.sgs.trade/?srcChain=1&destChain=1&srcToken=0x0000000000000000000000000000000000000000&destToken=0xb72E76cCf005313868DB7b48070901a44629da98"
        />
        <EchoBox
          headerText="NFT MARKETPLACE"
          subHeaderText="Inkubate"
          description="Discover, trade, and thrive on Inkubate Net – the marketplace where ideas come to life."
          imageSrc={nftphone}
          imageSrcPhone={nftphonesm}
          buttonText="View Website"
          buttonLink="https://inkubate.trade/"
        />
      </div>
    </section>
  );
}

export default EcosystemSection;
