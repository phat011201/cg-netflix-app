import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.scss";

function Emailpart() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    let value = event.target.value;
    setEmail(value);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleButtonPress = () => {
    if (isValidEmail(email)) {
      navigate("/register/:step?");
    } else {
      console.log("Email không hợp lệ!");
    }
  };

  return (
    <form action="" className="email-signup">
      <input
        type="email"
        placeholder="Địa chỉ email"
        value={email || ""}
        onChange={handleEmailChange}
        required
      />

      <button type="submit" onClick={handleButtonPress}>
        Bắt đầu
      </button>
    </form>
  );
}

export default Emailpart;
