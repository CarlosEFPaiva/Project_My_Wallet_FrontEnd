import styled from "styled-components";

export default function UnderButtonMessage({text, onClick}) {
    return (
        <Wrapper onClick = { onClick }>
            {text}
        </Wrapper>
    );
}

const Wrapper = styled.span`
    margin-top: 40px;
    font-weight: 700;
    font-size: 15px;
`