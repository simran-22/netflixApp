import "./style.css";

import { IoIosArrowForward } from "react-icons/io";
const HeroSection = () => {
  return (
    <>
      <div className="col-sm-12 herosection ">
        <div className="overlay "></div>
      </div>
      <div className="col-sm-12 heading">
        <h1 style={{ color: "white" }}>Unlimited movies, TV shows and more</h1>
        <h3 style={{ color: "white", marginBottom: "20px" }}>
          Watch anywhere. Cancel anytime.
        </h3>
        <h4 style={{ color: "white", marginBottom: "20px" }}>
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
        <div className="input-field">
          <input type="text" required spellCheck="false" />
          <label htmlFor="#">Enter your Email</label>
          <button className="started-btn">
            Get Started <IoIosArrowForward className="arowIcon" />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
