import styled from "styled-components";

export default function UnderButtonMessage({text, isLoading, onClick}) {
    return (
        <Wrapper disabled = {isLoading} onClick = { onClick }>
            {text}
        </Wrapper>
    );
}

const Wrapper = styled.button`
    margin-top: 40px;
    font-weight: 700;
    font-size: 15px;
    color: #FFFFFF;
`