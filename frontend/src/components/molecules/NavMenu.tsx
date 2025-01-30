import React from "react";
import Link from "next/link";
import Button from "../atoms/Button";

const NavMenu: React.FC = () => {
  return (
    <nav className="flex space-x-4">
      <Link href="/home" passHref>
        <Button className="px-4 py-2 bg-blue-500 text-white rounded">
          Home
        </Button>
      </Link>
      <Link href="/products" passHref>
        <Button className="px-4 py-2 bg-blue-500 text-white rounded">
          Produtos
        </Button>
      </Link>
      <Link href="/new-product" passHref>
        <Button className="px-4 py-2 bg-blue-500 text-white rounded">
          Novo Produto
        </Button>
      </Link>
    </nav>
  );
};

export default NavMenu;
