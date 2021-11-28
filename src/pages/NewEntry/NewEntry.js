import { useHistory } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import PageTitle from '../../components/PageTitle';
import Input from '../../components/Input';
import RectangularButton from '../../components/RectangularButton';
import UnderButtonMessage from '../../components/UnderButtonMessage';

import contactServerContext from '../../contexts/contactServerContext';
import UserDataContext from '../../contexts/userDataContext';
import { adjustStateObject } from '../../utils/stateObjectFunctions';
import { autoCompleteCurrencyValue } from '../../utils/currencyAndDateUtils';
import { ValidateAndSendEntryValues } from './NewEntryFunctions';
import { moveToSignInPage } from '../../utils/browsingUtils';

export default function NewEntry({ type }) {
    const [newEntry, setNewEntry] = useState({ type, value: '', description: '' });
    const { userData, setUserData } = useContext(UserDataContext);
    const { isContactingServer, setIsContactingServer } = useContext(contactServerContext);
    const inputs = [
        { key: 'NewEntry input 1', placeholder: 'Valor', inputType: 'number', atribute: 'value', value: newEntry.value },
        { key: 'NewEntry input 2', placeholder: 'Descrição', inputType: 'text', atribute: 'description', value: newEntry.description },
    ];
    const browsingHistory = useHistory();

    useEffect(() => {
        if (!userData.token) {
            moveToSignInPage(browsingHistory, userData, setUserData);
        }
    }, []);

    return (
        <Wrapper>
            <PageTitle>
                {type === 'deposit' ? 'Nova Entrada' : 'Nova Saída'}
            </PageTitle>
            <form
                onSubmit={(event) => ValidateAndSendEntryValues(
                    event,
                    newEntry,
                    userData,
                    setUserData,
                    setIsContactingServer,
                    browsingHistory,
                )}
            >
                {inputs.map(({ key, placeholder, inputType, atribute, value }) => (
                    <Input
                        key={key}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => (
                            inputType === 'number' ?
                                adjustStateObject(
                                    newEntry,
                                    setNewEntry,
                                    atribute,
                                    autoCompleteCurrencyValue(e.target.value),
                                ) :
                                adjustStateObject(
                                    newEntry,
                                    setNewEntry,
                                    atribute,
                                    e.target.value,
                                )
                        )}
                        type={inputType}
                        disabled={isContactingServer}
                        min={0}
                        step="0.01"
                    />
                ))}
                <RectangularButton
                    text={type === 'deposit' ? 'Salvar Entrada' : 'Salvar Saída'}
                    isLoading={isContactingServer}
                    type="submit"
                />
            </form>
            <UnderButtonMessage
                text="Voltar"
                isLoading={isContactingServer}
                onClick={() => browsingHistory.push('/homescreen')}
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
`;
