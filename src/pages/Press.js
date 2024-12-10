import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/sections/Global/Footer";
import PressBox from "../components/sections/Global/PressBox";
import cryptonews from "../assets/images/cryptonews.png";
import blockster from "../assets/images/blockster.png"
import decrypt from "../assets/images/decrypt.png"
import newsflash from "../assets/images/newsflash.png"
function Press() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main>
        <h1 className="maintitle">Press</h1>
        <section className="press-section">
          <PressBox
            title="CRYPTO.NEWS"
            image={cryptonews}
            headline="SquidGrow crypto price down 18% as top coins seek gains"
            description="The SquidGrow meme coin, which recently migrated its token from the Binance Smart Chain to a new contract on the..."
            link="#"
          />
          <PressBox
            title="BLOCKSTER"
            image={blockster}
            headline="Long-Term Utility Helps SquidGrow Stand Out in the ..."
            description="The SquidGrow meme coin, which recently migrated its token from the Binance Smart Chain to a new contract on the..."
            link="#"
          />
          <PressBox
            title="DECRYPT"
            image={decrypt}
            headline="SquidGrow Is Bringing the Crypto Influencer Fight Club ..."
            description="The SquidGrow meme coin, which recently migrated its token from the Binance Smart Chain to a new contract on the..."
            link="#"
          />
          <PressBox
            title="CRYPTO NEWS FLASH"
            image={newsflash}
            headline="Shiba Inu Set for Continued Growth, Says Shibtoshi..."
            description="The SquidGrow meme coin, which recently migrated its token from the Binance Smart Chain to a new contract on the..."
            link="#"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Press;
