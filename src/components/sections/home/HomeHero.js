import React from 'react'

import herovideo from "../../../assets/videos/mainhero.mp4";
import ethlogo from "../../../assets/images/eth.png"
import dexlogo from "../../../assets/images/dex.png"
function HomeHero() {
  return (
    <section className="home-hero">
          <video autoPlay loop playsInline muted>
            <source src={herovideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-content">
            <h1>
              Empowering <br /> Security. <br /> Unleashing <br /> Utility.
            </h1>
            <p>
              Introducing Squidgrow, ultimate secure utility-meme token on
              Ethereum. Our goal is to rise to the top, providing unparalleled
              technology and fun.
            </p>
            <div className="hero-btns">
              <a href="">
                <img src={ethlogo} alt="" /> ETH Contract
              </a>
              <a href="">
                <img src={dexlogo} alt="" /> ETH Contract
              </a>
     
            </div>
          </div>
        </section>
  )
}

export default HomeHero