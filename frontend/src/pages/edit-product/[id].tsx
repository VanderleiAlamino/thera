import { TagTypes } from "@/application/enums/tags";
import Text from "@/components/atoms/Text";
import Modal from "@/components/molecules/Modal";
import FormProduct from "@/components/organisms/FormProduct";
import MainTemplate from "@/components/templates/MainTemplate";
import { useState } from "react";

const EditProduct: React.FC = () => {   

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState(""); 

    const handleModal = (message: string) => {
        setModalMessage(message);
        setIsModalOpen(true);
    };

    return (
        <MainTemplate>
            <div className="flex flex-col items-center justify-center min-h-screen">
                
                <Text className="text-2xl font-bold mb-4" tag={TagTypes.Heading1}>
                    Editar produto
                </Text>

                <div className="w-full max-w-lg">
                    <FormProduct modal={handleModal} edit={true} />
                </div>                
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Status do Cadastro">
                <p>{modalMessage}</p>
            </Modal>
        </MainTemplate>
    );
};

export default EditProduct;
