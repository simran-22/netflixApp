import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import "./style.css";
import { auth } from "./firebaseConfig.js";

import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDeffault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          alert("Signed in successfully. Redirecting to dashboard...");
        }
      })
      .catch((error) => alert(error.message));
  };

  const emailHandler = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const paswordHandler = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <>
      <Header />
      <section className="signWraper">
        <div className="container ">
          <div className="col-sm-12 ">
            <div className="signBg ">
              <div className="signHeading">
                <h1>Sign In</h1>
              </div>
              <form className="signinput-field " onSubmit={submitHandler}>
                <input
                  className="signin-input"
                  type="text"
                  required
                  spellCheck="false"
                  onChange={emailHandler}
                  value={email}
                />
                <label className="emailinput-field" htmlFor="#">
                  Email or mobile Number
                </label>

                <input
                  className="paswrd"
                  type="password"
                  required
                  spellCheck="false"
                  onChange={paswordHandler}
                  value={password}
                  id="password"
                />
                <label className="pasword-field" htmlFor="#">
                  Enter your Password
                </label>
                <button type="submit" className="signbtnstarted-btn">
                  <Link to={"/dashboard"}> Submit</Link>
                </button>
                <h4 className=" btnor text-center">OR</h4>
                <div className="signbtnstarted-btn codebtn text-white cursor-pointer">
                  New to Netflix?
                  <span>
                    {" "}
                    <Link to={"/signup"}> Sign Up Now</Link>
                  </span>
                </div>
              </form>
              {/* <div className="forgotPass">
                <h6>Forgot Password?</h6>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
