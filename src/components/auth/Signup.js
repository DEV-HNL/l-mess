import React, { useRef } from "react";
import "./styleSignup.scss";
const Signup = () => {
  const nodeRef = useRef();
  const handleForcus = () => {
    nodeRef.current.click();
  };
  return (
    <form>
      <div className="signup">
        <div className="signup-board">
          <div className="signup-header">
            <a href="/">
              <h2>L Mess</h2>
            </a>
            <a href="/auth/login">
              <h2>Login</h2>
            </a>
          </div>
          <div className="signup-content">
            <div className="signup-title">
              <h2>Sign Up </h2>
              <span>Sign Up! to become a member of L Mess</span>
            </div>
            <div className="signup-account">
              <div className="signup-account-data">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="signup-account-data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="signup-account-data">
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="signup-account-data">
                <label htmlFor="repasword">Re-pasword</label>
                <input
                  type="password"
                  id="repasword"
                  name="repasword"
                  placeholder="Enter your repasword"
                />
              </div>
            </div>
            <div className="signup-agree">
              <div className="signup-agree-check">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree">agree to our terms</label>
              </div>
              <a href="/">Dieu Khoang</a>
            </div>
          </div>
          <div className="signup-avatar">
            <div className="signup-avatar-render">
              <i className="fa-solid fa-camera" onClick={handleForcus}></i>
            </div>
            <input
              ref={nodeRef}
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
            <span>Choise Your Avatar</span>
          </div>
          <button type="submit" className="signup-submit">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signup;
