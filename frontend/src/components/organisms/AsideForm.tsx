import React from "react";
import Text from "../atoms/Text";
import FormProduct from "./FormProduct";
import { TagTypes } from "@/application/enums/tags";

const AsideForm: React.FC<{ isAsideVisible: boolean; modal: (message: string) => void }> = ({
  isAsideVisible,
  modal,
}) => {
  return (
    <aside
      className={`fixed right-0 top-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isAsideVisible ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ width: "320px" }}
    >
      <div className="p-6">
        <Text className="text-xl font-bold mb-4" tag={TagTypes.Heading2}>
          Formulário
        </Text>
        <FormProduct modal={modal} />
      </div>
    </aside>
  );
};

export default AsideForm;