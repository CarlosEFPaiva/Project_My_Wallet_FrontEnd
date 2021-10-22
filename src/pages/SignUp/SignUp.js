import AppTitle from "../../components/AppTitle";
import Input from "../../components/Input";
import RectangularButton from "../../components/RectangularButton";
import UnderButtonMessage from "../../components/UnderButtonMessage";

import ContactServerContext from "../../contexts/ContactServerContext";
import { adjustStateObject } from "../../Utils/StateObjectFunctions";
import { ValidateAndSendSignUpValues } from "./SignUpFunctions";

import { useState, useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export default function SignUpPage() {
    const [signUpData, setSignUpData] = useState({ name:"", email:"", password: "", confirmPassword:"" });
    const { isContactingServer, setIsContactingServer } = useContext(ContactServerContext);
    const inputs = [
        { placeholder: "Nome", type: "text", atribute: "name", value: signUpData.name },
        { placeholder: "E-mail", type: "text", atribute: "email", value: signUpData.email },
        { placeholder: "Senha", type: "password", atribute: "password", value: signUpData.password },
        { placeholder: "Confirme a senha", type: "password", atribute: "confirmPassword", value: signUpData.confirmPassword },
    ];
    const browsingHistory = useHistory();

    return (
        <Wrapper>
            <AppTitle />
            <form onSubmit = { (event) => ValidateAndSendSignUpValues(event, signUpData, setIsContactingServer, browsingHistory) }>
                {inputs.map( ({ placeholder, type, atribute, value }, index) => 
                    <Input 
                        key = { index }
                        placeholder = { placeholder }
                        value = { value }
                        onChange = { e => adjustStateObject(signUpData, setSignUpData, atribute, e.target.value )}
                        type = { type }
                        disabled = { isContactingServer }
                    />
                )}
                <RectangularButton 
                    text = { "Cadastrar" }
                    isLoading = { isContactingServer }
                    type = "submit"
                />
            </form>
            <UnderButtonMessage 
                text = "Já tem uma conta? Entre agora!"
                onClick = { () => browsingHistory.push("/") }
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