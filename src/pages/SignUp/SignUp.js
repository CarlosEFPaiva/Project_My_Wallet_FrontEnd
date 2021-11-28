import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import contactServerContext from '../../contexts/contactServerContext';

import AppTitle from '../../components/AppTitle';
import Input from '../../components/Input';
import RectangularButton from '../../components/RectangularButton';
import UnderButtonMessage from '../../components/UnderButtonMessage';

import { adjustStateObject } from '../../utils/stateObjectFunctions';
import { ValidateAndSendSignUpValues } from './SignUpFunctions';

export default function SignUpPage() {
    const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const { isContactingServer, setIsContactingServer } = useContext(contactServerContext);
    const inputs = [
        { key: 'SignUp input 1', placeholder: 'Nome', type: 'text', atribute: 'name', value: signUpData.name },
        { key: 'SignUp input 2', placeholder: 'E-mail', type: 'text', atribute: 'email', value: signUpData.email },
        { key: 'SignUp input 3', placeholder: 'Senha', type: 'password', atribute: 'password', value: signUpData.password },
        { key: 'SignUp input 4', placeholder: 'Confirme a senha', type: 'password', atribute: 'confirmPassword', value: signUpData.confirmPassword },
    ];
    const browsingHistory = useHistory();

    return (
        <Wrapper>
            <AppTitle />
            <form
                onSubmit={(event) => ValidateAndSendSignUpValues(
                    event,
                    signUpData,
                    setIsContactingServer,
                    browsingHistory,
                )}
            >
                {inputs.map(({ key, placeholder, type, atribute, value }) => (
                    <Input
                        key={key}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => adjustStateObject(
                            signUpData,
                            setSignUpData,
                            atribute,
                            e.target.value,
                        )}
                        type={type}
                        disabled={isContactingServer}
                    />
                ))}
                <RectangularButton
                    text="Cadastrar"
                    isLoading={isContactingServer}
                    type="submit"
                />
            </form>
            <UnderButtonMessage
                text="Já tem uma conta? Entre agora!"
                onClick={() => browsingHistory.push('/')}
            />
        </Wrapper>
    );
}

const Wrapper = styled.section`
    width: 100%;
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
