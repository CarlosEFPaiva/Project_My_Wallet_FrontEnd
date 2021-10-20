import { RiLogoutBoxRLine } from "react-icons/ri";
import styled from "styled-components";

export default function LogOutButton() {
    return (
        <Button>
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
`