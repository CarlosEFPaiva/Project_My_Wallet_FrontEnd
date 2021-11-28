import { sendErrorAlert } from './externalLibs/sweetAlertUtils';
import { clearLocalStorage } from './localStorageUtils';
import { adjustStateObject } from './stateObjectFunctions';

function logout(browsingHistory, userData, setUserData) {
    clearLocalStorage();
    adjustStateObject(userData, setUserData, 'token', '');
    browsingHistory.push('/');
}

async function moveToSignInPage(browsingHistory, userData, setUserData) {
    const alert = await sendErrorAlert('Primeiro faça seu login!');
    if (alert.isConfirmed) {
        logout(browsingHistory, userData, setUserData);
    }
}

export {
    moveToSignInPage,
    logout,
};
