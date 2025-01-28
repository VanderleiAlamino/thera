import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { IMainTemplateProps } from "../../application/interfaces/main";
import "../../app/globals.css";

const MainTemplate: React.FC<IMainTemplateProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default MainTemplate;