import React from "react";
import "./styleLanding.scss";
const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-header">
        <span className="landing-header-icon">
          <a href="/">L Mess</a>
        </span>
        <div className="landing-header-nav">
          <a className="landing-header-contact">Liên hệ với chúng tôi</a>
          <a className="landing-header-info">Các tính năng</a>
          <a href="/auth/login" className="landing-header-login">
            Đăng nhập
          </a>
        </div>
      </div>
      <div className="landing-content">
        <div className="landing-sigup">
          <button className="sigup-gmail">Sigup With Gmail or Phone</button>
          <div className="sigup-social">
            <button className="sigup-social-fb">
              <i className="fa-brands fa-facebook"></i>
              <p>Facebook</p>
            </button>
            <button className="sigup-social-google">
              <i className="fa-brands fa-google"></i>
              <p>Google</p>
            </button>
          </div>
        </div>
        <div className="landing-img">
          <img
            src="http://unblast.com/wp-content/uploads/2020/10/Colored-Live-Chat-Illustration-1.jpg"
            alt="a"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
