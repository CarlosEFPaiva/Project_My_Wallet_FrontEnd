import { sendErrorAlert, sendConfirmAlert } from "../../Utils/External Libs/sweetAlertUtils";
import { getUserData } from "../../Utils/External Libs/axiosUtils";
import { adjustStateObject } from "../../Utils/StateObjectFunctions";
import { clearLocalStorage } from "../../Utils/LocalStorageUtils";

function getAndSaveUserData(userData, setUserData, browsingHistory) {
    getUserData(userData.token)
    .then( res => {
        adjustStateObject(userData, setUserData, ["name", "entries"], [res.data.name, res.data.entries]);
    })
    .catch(async error => {
        const alert = await sendErrorAlert("Oh não! parece que houve um erro com o servidor.. Por favor, faça login novamente");
        if (alert.isConfirmed) {
            clearLocalStorage()
            browsingHistory.push("/");
        }
    })
}

async function Logout(browsingHistory) {
    const alert = await sendConfirmAlert("Deseja realmente sair?", "Sair");
    if (alert.isConfirmed) {
        clearLocalStorage();
        browsingHistory.push("/")
    }
}


export {
    getAndSaveUserData,
    Logout
}