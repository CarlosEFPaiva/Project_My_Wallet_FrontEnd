import styled from 'styled-components';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export default function LogOutButton({ onClick }) {
    return (
        <Button onClick={onClick}>
            <RiLogoutBoxRLine />
        </Button>
    );
}

const Button = styled.button`
    position: fixed;
    top: 22px;
    right: 24px;
    font-size: 30px;
    color: #FFFFFF;
`;
