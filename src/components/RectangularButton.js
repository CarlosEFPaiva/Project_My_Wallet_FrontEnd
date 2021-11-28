import styled from 'styled-components';

import { LoadingDots } from '../utils/externalLibs/loaderSpinnerUtils';

export default function RectangularButton({ text, isLoading, onClick }) {
    return (
        <Wrapper
            disabled={isLoading}
            onClick={onClick}
        >
            { isLoading ? <LoadingDots /> : text}
        </Wrapper>
    );
}

const Wrapper = styled.button`
    width: 100%;
    height: 46px;
    background-color: #A328D6;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
`;
