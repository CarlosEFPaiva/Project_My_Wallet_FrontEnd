import { useContext } from 'react';
import styled from 'styled-components';

import UserDataContext from '../../../contexts/userDataContext';

import ListOfItems from './ListOfItems';

export default function EntriesTable() {
    const { userData } = useContext(UserDataContext);
    return (
        <Wrapper>
            {
                userData.entries.length === 0 ? (
                    <NoEntries>
                        Não há registros de entrada ou saída
                    </NoEntries>
                ) :
                    <ListOfItems />
            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
`;

const NoEntries = styled.span`
    width: 100%;
    padding: 0px calc((100% - 180px) / 2);
    font-size: 20px;
    color: #868686;
    text-align: center;
`;
