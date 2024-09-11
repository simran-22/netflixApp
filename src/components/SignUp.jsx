import { useState } from "react";
import { Link } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebaseConfig";

const SignUp = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      // await createUserWithEmailAndPassword(auth, email, password);
      //   const user = auth.currentUser;
      //   console.log(user);
      //   console.log("user succusfull");
    } catch (error) {
      console.log(error.message);
    }
  };

  const nameHandler = (e) => {
    console.log(e.target.value);
    setFname(e.target.value);
  };

  const lastnameHandler = (e) => {
    console.log(e.target.value);
    setLname(e.target.value);
  };

  const emailHandler = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <section className="signWraper">
        <div className="container ">
          <div className="col-sm-12 ">
            <div className="signBg ">
              <div className="signHeading">
                <h1>Sign In</h1>
              </div>
              <form onSubmit={submithandler} className="signinput-field">
                <input
                  className="signin-input"
                  type="text"
                  required
                  spellCheck="false"
                  placeholder="FName"
                  value={fname}
                  onChange={nameHandler}
                />
                <input
                  className="signin-input"
                  type="text"
                  required
                  spellCheck="false"
                  placeholder="LName"
                  onChange={lastnameHandler}
                  value={lname}
                />
                <input
                  className="email"
                  type="email"
                  required
                  spellCheck="false"
                  placeholder="Email"
                  onChange={emailHandler}
                  value={email}
                />
                <input
                  className="paswrd"
                  type="password"
                  required
                  spellCheck="false"
                  placeholder="Password"
                  onChange={passwordHandler}
                  value={password}
                />

                <button type="submit" className="signbtnstarted-btn">
                  <Link to={"/signin"}>Sign Up</Link>{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
