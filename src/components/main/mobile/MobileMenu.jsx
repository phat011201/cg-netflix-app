import React from "react";

import { HEADTITLE } from "../../../constants/constant";

const MobileMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        {HEADTITLE.map((item, index) => {
          return (
            <div
              className="px-3 text-center text-white hover:underline"
              key={index}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
