import { TagTypes } from "@/application/enums/tags";
import ImageSvg from "@/components/atoms/ImageSvg";
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
            <Text className="text-2xl font-bold mb-4" tag={TagTypes.Heading1}>
                Editar produto
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="w-full">
                    <FormProduct modal={handleModal} edit={true} />
                </div>

                <div className="hidden md:flex items-center justify-center">
                    <ImageSvg />
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Status do Cadastro">
                <p>{modalMessage}</p>
            </Modal>
        </MainTemplate>
    );
};

export default EditProduct;