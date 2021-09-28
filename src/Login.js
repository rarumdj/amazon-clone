import { Link } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { auth } from "./Firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const registerUser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://pngimg.com/uploads/amazon/small/amazon_PNG24.png"
            alt=""
          />
        </Link>
        <div className="login__container">
          <h1>Login</h1>
          <form>
            <h5>E-mail</h5>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <h5>Password</h5>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
            />
            <button onClick={loginUser}>Login</button>
          </form>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button className="login__regButton" onClick={registerUser}>
            Create your amazon account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
