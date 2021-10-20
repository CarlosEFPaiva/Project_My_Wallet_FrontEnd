import PageTitle from "../../components/PageTitle";
import Input from "../../components/Input";
import RectangularButton from "../../components/RectangularButton";
import UnderButtonMessage from "../../components/UnderButtonMessage";

import { adjustStateObject } from "../../Utils/StateObjectFunctions";
import { autoCompleteCurrencyValue } from "../../Utils/TextUtils";

import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export default function NewEntry({type}) {
    const [newEntry, setNewEntry] = useState({ value:"", description:"" });
    const isLoading = false;
    const inputs = [
        { placeholder: "Valor", type: "number", atribute: "value", value: newEntry.value},
        { placeholder: "Descrição", type: "text", atribute: "description", value: newEntry.description },
    ];
    const browsingHistory = useHistory();

    return (
        <Wrapper>
            <PageTitle> {type === "deposit" ? "Nova Entrada" : "Nova Saída"} </PageTitle>
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
                    disabled = { isLoading }
                    min = {0}
                    step = "0.01"
                />
            )}
            <RectangularButton 
                text = { type === "deposit" ? "Salvar Entrada" : "Salvar Saída" }
                isLoading = { isLoading }
            />
            <UnderButtonMessage 
                text = "Voltar"
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