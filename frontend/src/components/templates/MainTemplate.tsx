import React, { useState } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import AsideForm from "../organisms/AsideForm";
import Button from "../atoms/Button";
import ExpandIcon from "../atoms/ExpandIcon";
import CloseIcon from "../atoms/CloseIcon";
import { IMainTemplateProps } from "../../application/interfaces/main";
import "../../app/globals.css";
import Modal from "../molecules/Modal";

const MainTemplate: React.FC<IMainTemplateProps> = ({ children }) => {
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleModal = (message: string) => {
    setModalMessage(message);
    setIsModalOpen(true);
    setIsAsideVisible(false);
  };

  const toggleAside = () => {
    setIsAsideVisible(!isAsideVisible);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow container mx-auto p-4">
        <main className={`flex-grow transition-all duration-300 ${isAsideVisible ? "mr-4" : ""}`}>
          {children}
        </main>
        <AsideForm isAsideVisible={isAsideVisible} modal={handleModal} />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Status do Cadastro">
          <p>{modalMessage}</p>
        </Modal>
      </div>

      <Button
        onClick={toggleAside}
        className="fixed right-4 bottom-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isAsideVisible ? <ExpandIcon /> : <CloseIcon />}
      </Button>
      <Footer />
    </div>
  );
};

export default MainTemplate;
