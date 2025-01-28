import React from "react";
import NavMenu from "../molecules/NavMenu";
import Text from "../atoms/Text";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Text className="text-white text-xl font-bold">Thera</Text>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;