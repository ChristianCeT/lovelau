import Image from "next/image";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="w-screen h-screen bg-[#FDFBE7]">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
