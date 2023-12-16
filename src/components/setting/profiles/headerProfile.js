import React, { useState, useEffect } from "react";
import "../scss/header.scss";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isHeaderVisible ? `visible` : `hidden`}`}></div>
  );
};

export default Header;
