import { sendErrorAlert } from "./External Libs/sweetAlertUtils"
import { clearLocalStorage } from "./LocalStorageUtils"
import { adjustStateObject } from "./StateObjectFunctions";

function logout(browsingHistory, userData, setUserData) {
    clearLocalStorage();
    adjustStateObject(userData, setUserData, "token", "")
    browsingHistory.push("/")
}

async function moveToSignInPage(browsingHistory, userData, setUserData) {
    const alert = await sendErrorAlert("Primeiro faça seu login!");
    if (alert.isConfirmed) {
        logout(browsingHistory, userData, setUserData);
    }
}

export {
    moveToSignInPage,
    logout,
}