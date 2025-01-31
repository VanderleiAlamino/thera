import { TagTypes } from "@/application/enums/tags";
import Text from "@/components/atoms/Text";
import MainTemplate from "@/components/templates/MainTemplate";
import React from "react";

const Home: React.FC = () => {
  return (
    <MainTemplate>
      <div className="text-justify my-8">
        <Text tag={TagTypes.Heading1} className="text-4xl text-center font-bold mb-4">
          Bem-vindo à Thera 🌟
        </Text>
        
        <Text tag={TagTypes.Paragraph} className="text-xl mb-6">
          A Thera é a plataforma perfeita para você gerenciar seus produtos de forma eficiente e prática. Encontre e organize os itens do seu inventário com facilidade, 
          explore suas opções de preço, e aproveite uma experiência de compra personalizada.
        </Text>

        <div className="mb-8">
          <Text tag={TagTypes.Heading2} className="text-2xl font-semibold mb-2">
            Como Funciona 🤔
          </Text>
          <Text tag={TagTypes.Paragraph} className="text-lg mb-4">
            Em poucos cliques, você pode visualizar todos os produtos disponíveis, aplicar filtros de preço, e ainda ter a opção de buscar pelo nome do produto. 
            A Thera também te ajuda a tomar decisões com informações claras sobre cada item.
          </Text>
        </div>

        <div className="mb-8">
          <Text tag={TagTypes.Heading2} className="text-2xl font-semibold mb-2">
            O Que Esperar 👀
          </Text>
          <Text tag={TagTypes.Paragraph} className="text-lg mb-4">
            Oferecemos uma experiência única e intuitiva para nossos usuários. Com Thera, você tem a liberdade de explorar e comprar produtos com o melhor custo-benefício.
          </Text>
        </div>

        <div className="mb-8">
          <Text tag={TagTypes.Heading2} className="text-2xl font-semibold mb-2">
            Pronto para começar? 🚀
          </Text>
          <Text tag={TagTypes.Paragraph} className="text-lg mb-6">
            Explore nossos produtos agora e aproveite as melhores ofertas!
          </Text>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Home;
