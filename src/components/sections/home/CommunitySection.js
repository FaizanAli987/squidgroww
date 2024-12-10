import React from "react";
import plane from "../../../assets/images/plane.png";
import communitysm from "../../../assets/images/communitysm.png";
function CommunitySection() {
  return (
    <section className="community-section">
      <div className="community-content">
        <h1>The Community</h1>
        <img src={communitysm} className="forphone communityimg" alt="" />
        <p>
          Empowering our community is at the heart of SquidGrow's philosophy.
          Through a user-centric approach, we prioritize your needs, ideas, and
          feedback, cultivating a dynamic community that propels the platform's
          evolution in the ever-changing crypto landscape.
        </p>
        <a href="" className="purplebtn">
          {" "}
          <img src={plane} alt="" /> Join the community
        </a>
      </div>
    </section>
  );
}

export default CommunitySection;
