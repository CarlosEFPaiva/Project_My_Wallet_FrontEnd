import AppTitle from "../../components/AppTitle";
import Input from "../../components/Input";
import RectangularButton from "../../components/RectangularButton";
import UnderButtonMessage from "../../components/UnderButtonMessage";

import ContactServerContext from "../../contexts/ContactServerContext";
import UserDataContext from "../../contexts/userDataContext";
import { ValidateAndSendSignIn } from "./SignInFunctions";
import { adjustStateObject } from "../../Utils/StateObjectFunctions";

import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";


export default function SignInPage() {
    const [signInData, setSignInData] = useState({ email:"", password: "" });
    const { isContactingServer, setIsContactingServer } = useContext(ContactServerContext);
    const { userData, setUserData } = useContext(UserDataContext);
    const inputs = [
        { placeholder: "E-mail", type: "text", atribute: "email", value: signInData.email },
        { placeholder: "Senha", type: "password", atribute: "password", value: signInData.password },
    ];
    const browsingHistory = useHistory();

    useEffect( () => {
        if (userData.token) {
            browsingHistory.push("/homescreen");
        }
    }, []);

    return (
        <Wrapper>
            <AppTitle />
            <form onSubmit = { (event) => ValidateAndSendSignIn(event, signInData, setIsContactingServer, userData, setUserData, browsingHistory) } >
                {inputs.map( ({ placeholder, type, atribute, value }, index) => 
                    <Input 
                        key = { index }
                        placeholder = { placeholder }
                        type = { type }
                        value = { value }
                        onChange = { e => adjustStateObject(signInData, setSignInData, atribute, e.target.value )}
                        disabled = { isContactingServer }
                    />
                )}
                <RectangularButton 
                    text = { "Entrar" }
                    type = "submit"
                    isLoading = { isContactingServer }
                />
            </form>
            <UnderButtonMessage 
                text = "Primeira vez? Cadastre-se!"
                isLoading = { isContactingServer }
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