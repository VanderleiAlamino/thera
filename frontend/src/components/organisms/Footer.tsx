import React from "react";
import Text from "../atoms/Text";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-auto">
      <div className="container mx-auto text-center">
        <Text className="text-white">
          © 2023 Thera. Todos os direitos reservados.
        </Text>
      </div>
    </footer>
  );
};

export default Footer;