import AppTitle from "../../components/AppTitle";
import Input from "../../components/Input";
import RectangularButton from "../../components/RectangularButton";
import UnderButtonMessage from "../../components/UnderButtonMessage";

import { useHistory } from "react-router";
import styled from "styled-components";

export default function SignInPage() {
    const isLoading = false;
    const inputs = [
        { placeholder: "E-mail", type: "text"},
        { placeholder: "Senha", type: "password" },
    ];
    const browsingHistory = useHistory();

    return (
        <Wrapper>
            <AppTitle />
            {inputs.map( ({ placeholder, type }, index) => 
                <Input 
                    key = { index }
                    placeholder = { placeholder }
                    type = { type }
                    disabled = { isLoading }
                />
            )}
            <RectangularButton 
                text = { "Entrar" }
                isLoading = { isLoading }
            />
            <UnderButtonMessage 
                text = "Primeira vez? Cadastre-se!"
                onClick = { () => browsingHistory.push("/sign-up") }
            />
        </Wrapper>
    );
}


const Wrapper = styled.section`
    width: 100%;
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`