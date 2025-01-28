import React from "react";
import Link from "next/link";
import Button from "../atoms/Button";

const NavMenu: React.FC = () => {
  return (
    <nav className="flex space-x-4">
      <Link href="/home" passHref><Button>Home</Button></Link>
      <Link href="/products" passHref><Button>Produtos</Button></Link>
      <Link href="/sobre" passHref><Button>Sobre</Button></Link>
    </nav>
  );
};

export default NavMenu;
