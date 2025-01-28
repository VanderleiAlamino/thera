import React, { useState } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { IMainTemplateProps } from "../../application/interfaces/main";
import "../../app/globals.css";
import Text from "../atoms/Text";
import { TagTypes } from "@/application/enums/tags";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { ButtonTypes } from "@/application/enums/button";
import FormProduct from "../organisms/FormProduct";


const MainTemplate: React.FC<IMainTemplateProps> = ({ children }) => {
  const [isAsideVisible, setIsAsideVisible] = useState(false);

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

        <aside
          className={`fixed right-0 top-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isAsideVisible ? "translate-x-0" : "translate-x-full"}`}
          style={{ width: "320px" }}
        >
          <div className="p-6">
            <Text className="text-xl font-bold mb-4" tag={TagTypes.Heading2}>Formulário</Text>
            <FormProduct />            
          </div>
        </aside>
      </div>

      {/* Botão para expandir/retrair o aside */}
      <button
        onClick={toggleAside}
        className="fixed right-4 bottom-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isAsideVisible ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      <Footer />
    </div>
  );
};

export default MainTemplate;