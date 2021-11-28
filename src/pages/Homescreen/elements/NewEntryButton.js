import { IoIosAddCircleOutline } from 'react-icons/io';
import { AiOutlineMinusCircle } from 'react-icons/ai';

import styled from 'styled-components';

export default function NewEntryButton({ type, onClick }) {
    return (
        <Wrapper onClick={onClick}>
            {
                type === 'deposit' ?
                    <IoIosAddCircleOutline /> :
                    <AiOutlineMinusCircle />
            }
            <span>
                Nova
                <br />
                {type === 'deposit' ? 'Entrada' : 'Saída'}
            </span>
        </Wrapper>
    );
}

const Wrapper = styled.button`
    width: calc( 50% - 8px );
    height: 114px;
    border-radius: 5px;
    padding: 10px;
    background-color: #A328D6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    color: #FFFFFF;
    & span {
        font-size: 17px;
        text-align: left;
        line-height: 22px;
    }


`;
