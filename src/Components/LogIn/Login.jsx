import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <section className="login-card flex">
        <div className="login-container flex">
          <h1 className="Login-text">Login</h1>

          <div className="input-tel">
            <select className="country-code">
              <option value="+91">+91</option>
              <option value="+93">+93</option>
              <option value="+355">+355</option>
              <option value="+213">+213</option>
              <option value="+1684">+1684</option>
            </select>

            <input
              className="contactBar"
              type="text"
              placeholder="Phone Number"
            />
          </div>

          <div className="btn-login flex">
            <button className="OTP">Send One Time Password</button>

            <p>or</p>

            <button className="Email-button flex">
              <i className="mail-icon fa-solid fa-envelope"></i>
              Continue with Email
            </button>

            <button className="google-button flex">
              <img
                className="GoogleLogo"
                src="/zomato_clone_reactjs/assets_2/GoogleLogo.png"
                alt="Google Logo"
              />
              Continue with Google
            </button>
          </div>

          <div className="login-bottom-section flex">
            <h4>New to Zomato?</h4>
            <Link className="createAccount" to="/signup">
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
