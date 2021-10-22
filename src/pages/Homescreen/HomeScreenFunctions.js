import { sendErrorAlert, sendConfirmAlert } from "../../Utils/External Libs/sweetAlertUtils";
import { getUserData } from "../../Utils/External Libs/service";
import { adjustStateObject } from "../../Utils/StateObjectFunctions";
import { logout } from "../../Utils/BrowsingUtils";

function getAndSaveUserData(userData, setUserData, browsingHistory) {
    getUserData(userData.token)
    .then( res => {
        adjustStateObject(userData, setUserData, ["name", "entries"], [res.data.name, res.data.entries]);
    })
    .catch(async error => {
        const alert = await sendErrorAlert("Oh não! parece que houve um erro com o servidor.. Por favor, faça login novamente");
        if (alert.isConfirmed) {
            logout(browsingHistory)
        }
    })
}

async function confirmAndLogout(browsingHistory) {
    const alert = await sendConfirmAlert("Deseja realmente sair?", "Sair");
    if (alert.isConfirmed) {
        logout(browsingHistory)
    }
}

export {
    getAndSaveUserData,
    confirmAndLogout,
}