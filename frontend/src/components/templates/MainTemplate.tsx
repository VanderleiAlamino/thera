import React, { useState } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { IMainTemplateProps } from "../../application/interfaces/main";
import "../../app/globals.css";
import Modal from "../molecules/Modal";

const MainTemplate: React.FC<IMainTemplateProps> = ({ children }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); 

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow container mx-auto p-4 pt-16 mt-4">
        <main className={`flex-grow transition-all duration-300 mr-4}`}>
          {children}
        </main>        

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Status do Cadastro">
          <p>{modalMessage}</p>
        </Modal>
      </div>      
      <Footer />
    </div>
  );
};

export default MainTemplate;
