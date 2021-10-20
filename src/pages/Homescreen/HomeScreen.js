import PageTitle from "../../components/PageTitle";
import NewEntryButton from "./elements/NewEntryButton";
import EntriesTable from "./elements/EntriesTable";
import LogOutButton from "./elements/LogOutButton";

import userDataContext from "../../contexts/userDataContext";
import { adjustStateObject } from "../../Utils/StateObjectFunctions";
import { getUserData } from "../../Utils/External Libs/axiosUtils";

import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export default function Homescreen() {
    const {userData, setUserData} = useContext(userDataContext);
    const browisingHistory = useHistory();

    useEffect( () => {
        const entries = getUserData(userData.id);
        adjustStateObject(userData, setUserData, "entries", entries);
    }, []);

    return (
        <Wrapper>
            <PageTitle> Olá, {userData.name} </PageTitle>
            <LogOutButton />
            <EntriesTable />
            <Buttons>
                <NewEntryButton type = "deposit" onClick = { () => browisingHistory.push("/new-deposit") }/>
                <NewEntryButton type = "withdraw" onClick = { () => browisingHistory.push("/new-withdraw") }/>
            </Buttons>
        </Wrapper>
    );
}


const Wrapper = styled.section`
    width: 100%;
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Buttons = styled.div`
    width: 100%;
    height: 114px;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
`