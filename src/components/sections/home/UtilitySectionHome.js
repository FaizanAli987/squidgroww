import React from 'react'
import UtilityBox from '../Global/UtilityBox'
import owlbanner from "../../../assets/images/owlbanner.png";
import owl from "../../../assets/images/owl.png"
function UtilitySectionHome() {
  return (
    <>
     <UtilityBox
      desktopBackgroundImage={owlbanner}
      hotText="HOT"
      title="Introducing SilentSwap: The Ultimate Privacy."
      description="Seamless swaps, ultimate privacy, and cross-chain freedom. Unlock the future of trading now. Seamless swaps, ultimate privacy, and cross-chain freedom. Unlock the future of trading now."
      buttonText="Visit Website"
      buttonLink="https://www.silentswap.com/"
      classn="signleutility"
      phoneimg={owl}
    />
    </>
  )
}

export default UtilitySectionHome