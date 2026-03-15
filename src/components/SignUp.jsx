import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "./Header";
import "./style.css";

const SignUp = () => {
  const location = useLocation();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");
    try {
      signUp(fname, lname, email, password);
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
                <h1>Sign Up</h1>
              </div>
              {error && (
                <p style={{ color: "#e87c03", fontSize: "14px", marginBottom: "12px" }}>
                  {error}
                </p>
              )}
              <form onSubmit={submitHandler} className="signinput-field">
                <input
                  className="signin-input"
                  type="text"
                  required
                  spellCheck="false"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                <input
                  className="signin-input"
                  type="text"
                  required
                  spellCheck="false"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
                <input
                  className="email"
                  type="email"
                  required
                  spellCheck="false"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="paswrd"
                  type="password"
                  required
                  spellCheck="false"
                  placeholder="Password"
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="signbtnstarted-btn">
                  Sign Up
                </button>
              </form>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  textAlign: "center",
                  marginTop: "20px",
                  fontSize: "15px",
                }}
              >
                Already have an account?{" "}
                <Link to="/signin" style={{ color: "#fff", fontWeight: "600" }}>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
