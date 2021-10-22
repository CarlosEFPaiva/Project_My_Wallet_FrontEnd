import PageTitle from "../../components/PageTitle";
import Input from "../../components/Input";
import RectangularButton from "../../components/RectangularButton";
import UnderButtonMessage from "../../components/UnderButtonMessage";

import ContactServerContext from "../../contexts/ContactServerContext";
import UserDataContext from "../../contexts/userDataContext";
import { adjustStateObject } from "../../Utils/StateObjectFunctions";
import { autoCompleteCurrencyValue } from "../../Utils/CurrencyAndDateUtils";
import { ValidateAndSendEntryValues } from "./NewEntryFunctions";

import { useContext, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";


export default function NewEntry({type}) {
    const [newEntry, setNewEntry] = useState({ type: type, value:"", description:"" });
    const { userData } = useContext(UserDataContext);
    const {isContactingServer, setIsContactingServer} = useContext(ContactServerContext);
    const inputs = [
        { placeholder: "Valor", type: "number", atribute: "value", value: newEntry.value},
        { placeholder: "Descrição", type: "text", atribute: "description", value: newEntry.description },
    ];
    const browsingHistory = useHistory();

    return (
        <Wrapper>
            <PageTitle> {type === "deposit" ? "Nova Entrada" : "Nova Saída"} </PageTitle>
            <form onSubmit = { event => ValidateAndSendEntryValues(event, newEntry, userData.token, setIsContactingServer, browsingHistory) } >
                {inputs.map( ({ placeholder, type, atribute, value }, index) => 
                    <Input 
                        key = { index }
                        placeholder = { placeholder }
                        value = { value }
                        onChange = { e => 
                            type === "number" ?
                            adjustStateObject(newEntry, setNewEntry, atribute, autoCompleteCurrencyValue(e.target.value) ) :
                            adjustStateObject(newEntry, setNewEntry, atribute, e.target.value)                    
                        }
                        type = { type }
                        disabled = { isContactingServer }
                        min = {0}
                        step = "0.01"
                    />
                )}
                <RectangularButton 
                    text = { type === "deposit" ? "Salvar Entrada" : "Salvar Saída" }
                    isLoading = { isContactingServer }
                    type = "submit"
                />
            </form>
            <UnderButtonMessage 
                text = "Voltar"
                isLoading = { isContactingServer }
                onClick = { () => browsingHistory.push("/homescreen") }
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
`