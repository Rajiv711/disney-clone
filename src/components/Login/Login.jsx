import "./Login.css";
import logo1 from "../../Assets/images/cta-logo-one.svg";
import logo2 from "../../Assets/images/cta-logo-two.png";

import React from "react";

const Login = (props) => {
  return (
    <div className="container">
      <div className="content">
        <div className="cta">
          <div className="cta-logo-one">
            <img src={logo1} alt="" />
          </div>
          <div className="signup">
            <button>GET ALL HERE</button>
          </div>
          <p className="description">
          Get Premier Access to Raya and the Last Dragon for and additional fee with a Disney+ Subscription.As of today , the price of Disney+ and Disney bundle will increase by $1.
          </p>
          <div className="cta-logo-two">
            <img src={logo2} alt="" />
          </div>
        </div>
        <div className="bg-image"></div>
      </div>
    </div>
  );
};

export default Login;
