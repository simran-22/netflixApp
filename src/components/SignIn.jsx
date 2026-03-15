import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Header from "./Header";
import "./style.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");
    try {
      signIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Header />
      <section className="signWraper">
        <div className="container">
          <div className="col-sm-12">
            <div className="signBg">
              <div className="signHeading">
                <h1>Sign In</h1>
              </div>
              {error && (
                <p style={{ color: "#e87c03", fontSize: "14px", marginBottom: "12px" }}>
                  {error}
                </p>
              )}
              <form className="signinput-field" onSubmit={submitHandler}>
                <input
                  className="signin-input"
                  type="text"
                  required
                  spellCheck="false"
                  placeholder="Email or mobile number"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  className="paswrd"
                  type="password"
                  required
                  spellCheck="false"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button type="submit" className="signbtnstarted-btn">
                  Sign In
                </button>
              </form>
              <h4 className="btnor text-center">OR</h4>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <div
                  className="signbtnstarted-btn codebtn text-white"
                  style={{ cursor: "pointer", textAlign: "center" }}
                >
                  New to Netflix? <span>Sign Up Now</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
