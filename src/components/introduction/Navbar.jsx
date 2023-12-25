import React from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../../assets/images/index";
import "./style.scss";

function Navbar() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <nav>
        {logo}
        <div>
          <select name="">
            <option value="">Tiếng Việt</option>
            <option value="">English</option>
            <option value="">日本語</option>
          </select>
          <button className="login-button" type="submit" onClick={navigateToLogin}>
            Đăng nhập
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
