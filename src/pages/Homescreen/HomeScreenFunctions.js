import { sendErrorAlert } from "../../Utils/External Libs/sweetAlertUtils";
import { getUserData } from "../../Utils/External Libs/axiosUtils";
import { adjustStateObject } from "../../Utils/StateObjectFunctions";
import { clearLocalStorage } from "../../Utils/LocalStorageUtils";


async function moveToSignInPage(browsingHistory) {
    const alert = await sendErrorAlert("Primeiro faça seu login!");
    if (alert.isConfirmed) {
        browsingHistory.push("/");
    }
}

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

export {
    moveToSignInPage,
    getAndSaveUserData,
}