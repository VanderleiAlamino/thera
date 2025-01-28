import { TagTypes } from "@/application/enums/tags";
import Text from "@/components/atoms/Text";
import MainTemplate from "@/components/templates/MainTemplate";
import React from "react";

const Home: React.FC = () => {
    return (
        <MainTemplate>
            <Text tag={TagTypes.Heading1}>Bem vindo à Thera</Text>
        </MainTemplate>
    )
}

export default Home;
