import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 56px;
    background-color: ${({ disabled }) => (disabled ? '#E2E2E2' : '#FFFFFF')};
    border: none;
    outline: none;
    border-radius: 5px;
    margin-bottom: 12px;
    padding-left: 16px;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    color: ${({ disabled }) => (disabled ? '#AFAFAF' : '#000000')};
    ::placeholder {
        color: #000000 ;
    }
`;

export default Input;
