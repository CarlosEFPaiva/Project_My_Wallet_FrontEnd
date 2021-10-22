import PageTitle from "../../components/PageTitle";
import NewEntryButton from "./elements/NewEntryButton";
import EntriesTable from "./elements/EntriesTable";
import LogOutButton from "./elements/LogOutButton";
import { LoadingSpinner } from "../../Utils/External Libs/loaderSpinnerUtils";

import userDataContext from "../../contexts/userDataContext";
import { moveToSignInPage, getAndSaveUserData } from "./HomeScreenFunctions";

import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export default function Homescreen() {
    const {userData, setUserData} = useContext(userDataContext);
    const browsingHistory = useHistory();

    useEffect( () => {
        if (!userData.token) {
            moveToSignInPage(browsingHistory);
        } else {
            getAndSaveUserData(userData, setUserData, browsingHistory);
        }
    }, []);

    if(!userData.name) {
        return(
            <Wrapper>
                <LoadingSpinner />
            </Wrapper>
        );
    }
    
    return (
        <Wrapper>
            <PageTitle> Olá, {userData.name} </PageTitle>
            <LogOutButton />
            <EntriesTable />
            <Buttons>
                <NewEntryButton type = "deposit" onClick = { () => browsingHistory.push("/new-deposit") }/>
                <NewEntryButton type = "withdraw" onClick = { () => browsingHistory.push("/new-withdraw") }/>
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