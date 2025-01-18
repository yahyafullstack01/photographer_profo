import React from "react";
import Hero from "./Hero/hero";
import Menu from "./Menu/menu";

const Header: React.FC = () => {
  return (
    <div className="relative">
      <Menu />
      <Hero />
    </div>
  );
};

export default Header;
