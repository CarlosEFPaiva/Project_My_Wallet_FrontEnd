import { sendErrorAlert, sendConfirmAlert } from '../../utils/externalLibs/sweetAlertUtils';
import { getUserData } from '../../services/axios';
import { adjustStateObject } from '../../utils/stateObjectFunctions';
import { logout } from '../../utils/browsingUtils';

function getAndSaveUserData(userData, setUserData, browsingHistory) {
    getUserData(userData.token)
        .then((res) => {
            adjustStateObject(userData, setUserData, ['name', 'entries'], [res.data.name, res.data.entries]);
        })
        .catch(async () => {
            const alert = await sendErrorAlert('Oh não! parece que houve um erro com o servidor.. Por favor, faça login novamente');
            if (alert.isConfirmed) {
                logout(browsingHistory, userData, setUserData);
            }
        });
}

async function confirmAndLogout(browsingHistory, userData, setUserData) {
    const alert = await sendConfirmAlert('Deseja realmente sair?', 'Sair');
    if (alert.isConfirmed) {
        logout(browsingHistory, userData, setUserData);
    }
}

export {
    getAndSaveUserData,
    confirmAndLogout,
};
