import { sendErrorAlert } from '../../utils/externalLibs/sweetAlertUtils';
import { postSignInData } from '../../services/axios';
import { saveTokenInLocalStorage } from '../../utils/localStorageUtils';
import { adjustStateObject } from '../../utils/stateObjectFunctions';

function checkLoginValues(signInData) {
    const {
        email,
        password,
    } = signInData;
    const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!isEmailValid.test(email.toLowerCase())) {
        sendErrorAlert('Por favor, digite um email válido');
        return false;
    }

    if (!isPasswordValid.test(password)) {
        sendErrorAlert('Sua senha está incorreta! Lembre-se de que ela contém no mínimo:<br>8 caracteres<br>1 letra maiúscula<br>1 letra minúscula<br>1 número<br>1 caracter especial (@$!%*?&)');
        return false;
    }
    return true;
}

function ValidateAndSendSignIn(
    event,
    signInData,
    setIsContactingServer,
    userData,
    setUserData,
    browsingHistory,
) {
    event.preventDefault();
    if (checkLoginValues(signInData)) {
        setIsContactingServer(true);
        postSignInData(signInData)
            .then((res) => {
                adjustStateObject(userData, setUserData, 'token', res.data.token);
                saveTokenInLocalStorage(res.data.token);
                setIsContactingServer(false);
                browsingHistory.push('/homescreen');
            })
            .catch((error) => {
                setIsContactingServer(false);
                if (!error.response || error.response.status === 500) {
                    sendErrorAlert('Parece que houve um problema no servidor! Tente novamente mais tarde');
                    return;
                }
                if (error.response.status === 401) {
                    sendErrorAlert('Seu email e/ou senha estão incorretos! Lembre-se de que a senha contém no mínimo:<br>8 caracteres<br>1 letra maiúscula<br>1 letra minúscula<br>1 número<br>1 caracter especial (@$!%*?&)');
                    return;
                }
                if (error.response.status === 400) {
                    sendErrorAlert('Parece que houve um erro de validação pelo servidor!');
                }
            });
    }
}

export {
    ValidateAndSendSignIn,
};
