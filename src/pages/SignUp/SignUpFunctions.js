import { sendErrorAlert, sendSuccessAlert } from "../../Utils/External Libs/sweetAlertUtils";
import { postSignUpData } from "../../Utils/External Libs/service";

function checkRawRegistrationValues(signUpData) {
    const {
        name,
        email,
        password,
        confirmPassword
    } = signUpData;
    const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (name.length < 3 || name.length > 20) {
        sendErrorAlert("Seu nome deve ter entre 3 e 20 caracteres!");
        return false;
    }

    if (!isEmailValid.test(email.toLowerCase())) {
        sendErrorAlert("Por favor, digite um email válido");
        return false;
    }

    if (!isPasswordValid.test(password)) {
        sendErrorAlert(`Sua senha deve conter no mínimo:<br>8 caracteres<br>1 letra maiúscula<br>1 letra minúscula<br>1 número<br>1 caracter especial (@$!%*?&)`);
        return false;
    }
    if (password !== confirmPassword) {
        sendErrorAlert("Sua senha não está igual à digitada no campo de confirmação, tente novamente");
        return false;
    }
    return true;
}

function ValidateAndSendSignUpValues(event, signUpData, setIsContactingServer, browsingHistory) {
    event.preventDefault();
    if (checkRawRegistrationValues(signUpData)) {
        setIsContactingServer(true);
        postSignUpData(signUpData)
        .then (async res => {
            setIsContactingServer(false);
            const alert = await sendSuccessAlert("Seu cadastro foi realizado com sucesso!")
            if (alert.isConfirmed) {
                browsingHistory.push("/");
            }
        })
        .catch( error => {
            setIsContactingServer(false);
            if (!error.response || error.response.status === 500) {
                sendErrorAlert("Parece que houve um problema no servidor! Tente novamente mais tarde");
                return
            };
            if (error.response.status === 409) {
                sendErrorAlert("Parece que este email já está cadastrado! Tente cadastrar outro email ou vá para a tela de login");
                return
            };
            if (error.response.status === 400) {
                sendErrorAlert("Parece que houve um erro de validação pelo servidor!");
                return
            };
        })
    }
}

export {
    ValidateAndSendSignUpValues,
}