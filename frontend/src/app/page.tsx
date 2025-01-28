import React from "react";
import MainTemplate from "../components/templates/MainTemplate";
import Text from "../components/atoms/Text";

const HomePage: React.FC = () => {
  return (
    <MainTemplate>
      <Text className="text-center">Bem-vindo ao Thera!</Text>
    </MainTemplate>
  );
};

export default HomePage;