import React from "react";
import { Link } from "react-router-dom";

import { logo, headTitle } from "../../../../constants/constant";

const Header = () => {
  return (
    <>
      <div className={`w-full p-4 flex justify-center items-center`}>
        <div className="w-full flex justify-between">
          <div className="flex gap-10">
            <Link to={`/`}>
              <img src={logo.src} alt={logo.alt} />
            </Link>
            <ul className="flex gap-8">
              {headTitle.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
