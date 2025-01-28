import React from "react";
import Button from "../atoms/Button";

const NavMenu: React.FC = () => {
  return (
    <nav className="flex space-x-4">
      <Button>Home</Button>
      <Button>Produtos</Button>
      <Button>Sobre</Button>
    </nav>
  );
};

export default NavMenu;