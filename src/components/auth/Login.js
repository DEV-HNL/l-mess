import "./styleLogin.scss";
const Login = () => {
  return (
    <form>
      <div className="login">
        <div className="login-board">
          <a href="/">
            <h2 className="login-header">L Mess</h2>
          </a>
          <div className="login-content">
            <div className="login-user">
              <div className="login-title">
                <h2>Welcome Back</h2>
                <span>Welcome back! Please enter your details</span>
              </div>
              <div className="login-account">
                <div className="login-account-email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="login-account-password">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="login-remember">
                <div className="login-remember-check">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember</label>
                </div>
                <a href="#">Forgot passwork</a>
              </div>
              <button className="login-signin" type="submit">
                Sign In
              </button>
              <div className="login-socail">
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
          </div>
          <div className="login-signup">
            <h2 className="login-signup-title">
              Hello Friend!
              <br />
              <span>You don't have an account</span>
            </h2>
            <a href="/auth/signup">Sign Up Now!</a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
