import { useContext } from 'react';
import styled from 'styled-components';

import UserDataContext from '../../../contexts/userDataContext';
import { centsToReais, formatDate } from '../../../utils/currencyAndDateUtils';

export default function ListOfItems() {
    const { userData } = useContext(UserDataContext);
    const totalBalance = userData.entries
        .map(({ value, type }) => (type === 1 ? value : -1 * value))
        .reduce((previous, current) => current + previous);
    const keys = userData.entries.map((entry, index) => `Entry Line ${index}`);

    return (
        <Wrapper>
            <List>
                {userData.entries.map(({ date, description, type, value }, index) => (
                    <SingleLine key={keys[index]}>
                        <Date>
                            {formatDate(date)}
                        </Date>
                        <Item>
                            {description}
                        </Item>
                        <Price type={type}>
                            {centsToReais(value)}
                        </Price>
                    </SingleLine>
                ))}
            </List>
            <Total positive={totalBalance >= 0}>
                Saldo
                <span>
                    {centsToReais(totalBalance, true)}
                </span>
            </Total>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 24px 12px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

const List = styled.ul`
    width: 100%;
    height: calc(100% - 20px);
    overflow: scroll;
`;

const SingleLine = styled.li`
    width: 100%;
    margin-bottom: 16px;
    font-size: 16px;
    color: #000;
    display: flex;
`;

const Date = styled.span`
    color: #C6C6C6;
`;

const Item = styled.div`
    height: 17px;
    width: 100%;
    margin-left: 8px;
    display: flex;
    overflow: scroll;
    white-space: nowrap;
`;

const Price = styled.span`
    margin-left: 8px;
    color: ${({ type }) => (type === 0 ? '#C70000' : '#03AC00')};
`;

const Total = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    text-transform: uppercase;
    color: #000000;
    font-weight: 700;
    & span {
        color: ${({ positive }) => (positive ? '#03AC00' : '#C70000')};
        font-weight: 400;
    }
`;
