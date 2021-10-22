import { sendErrorAlert } from "./External Libs/sweetAlertUtils"
import { clearLocalStorage } from "./LocalStorageUtils"

async function moveToSignInPage(browsingHistory) {
    const alert = await sendErrorAlert("Primeiro faça seu login!");
    if (alert.isConfirmed) {
        browsingHistory.push("/");
    }
}

function logout(browsingHistory) {
    clearLocalStorage();
    browsingHistory.push("/")
}

export {
    moveToSignInPage,
    logout,
}