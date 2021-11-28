import styled from 'styled-components';

export default function AppTitle() {
    return (
        <Wrapper>
            MyWallet
        </Wrapper>
    );
}

const Wrapper = styled.span`
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 28px;
`;
