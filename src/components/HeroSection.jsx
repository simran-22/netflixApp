import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate("/signup", { state: { email } });
  };

  return (
    <>
      <div className="col-sm-12 herosection">
        <div className="overlay"></div>
      </div>
      <div className="col-sm-12 heading">
        <h1 style={{ color: "white" }}>Unlimited movies, TV shows and more</h1>
        <h3 style={{ color: "white", marginBottom: "20px" }}>
          Watch anywhere. Cancel anytime.
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            marginBottom: "24px",
            fontSize: "1.1rem",
          }}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="input-field" onSubmit={handleGetStarted}>
          <input
            type="email"
            required
            spellCheck="false"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="#">Enter your Email</label>
          <button type="submit" className="started-btn">
            Get Started <IoIosArrowForward className="arowIcon" />
          </button>
        </form>
      </div>
    </>
  );
};

export default HeroSection;
