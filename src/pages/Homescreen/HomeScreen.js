import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import UserGreetings from './elements/UserGreetings';
import NewEntryButton from './elements/NewEntryButton';
import EntriesTable from './elements/EntriesTable';
import LogOutButton from './elements/LogOutButton';
import { LoadingSpinner } from '../../utils/externalLibs/loaderSpinnerUtils';

import userDataContext from '../../contexts/userDataContext';
import { getAndSaveUserData, confirmAndLogout } from './HomeScreenFunctions';
import { moveToSignInPage } from '../../utils/browsingUtils';

export default function Homescreen() {
    const { userData, setUserData } = useContext(userDataContext);
    const browsingHistory = useHistory();

    useEffect(() => {
        if (!userData.token) {
            moveToSignInPage(browsingHistory, userData, setUserData);
        } else {
            getAndSaveUserData(userData, setUserData, browsingHistory);
        }
    }, []);

    if (!userData.name) {
        return (
            <Wrapper isLoading>
                <LoadingSpinner />
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <UserGreetings>
                {'Olá, '}
                {userData.name.split(' ')[0]}
            </UserGreetings>
            <LogOutButton
                onClick={() => confirmAndLogout(browsingHistory, userData, setUserData)}
            />
            <EntriesTable />
            <Buttons>
                <NewEntryButton type="deposit" onClick={() => browsingHistory.push('/new-deposit')} />
                <NewEntryButton type="withdraw" onClick={() => browsingHistory.push('/new-withdraw')} />
            </Buttons>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    width: 100%;
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: ${({ isLoading }) => (isLoading ? 'center' : 'flex-start')};
`;

const Buttons = styled.div`
    width: 100%;
    height: 114px;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
`;
