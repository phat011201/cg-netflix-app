import React from "react";

import Navbar from "./Navbar";
import Billboard from "./BillBoard";

const Browse = () => {
  return (
    <>
      <div className="bg-zinc-900 w-full h-full">
        <Navbar />
        <Billboard />
      </div>
    </>
  );
};

export default Browse;
